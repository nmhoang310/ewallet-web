import { React, useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import ButtonLogin from '@/components/ButtonLogin';
import CreditCard from '@/components/CreditCard';
import SuccessDialog from '@/components/SuccessDialog';
import { Dialog, Transition } from '@headlessui/react';

import * as walletService from '@/services/wallet-service';
import * as paymentService from '@/services/payment-service';
import Loader from '@/components/Loader';

import { useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function Fund() {
	const { data: session, status } = useSession();
	const [token, setToken] = useState();
	const focusFunc = () => {
		inputRef.placeholder = 'test';
	};

	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		formState: { errors },
	} = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		// defaultValues: {cardNumber},
		resolver: undefined,
		context: undefined,
		criteriaMode: 'firstError',
		shouldFocusError: true,
		shouldUnregister: false,
		shouldUseNativeValidation: false,
		delayError: undefined,
	});

	const onSubmit = async () => {
		setIsOpenConfirm(true);
	};

	const topUp = async () => {
		closeConfirmDialog();
		setIsLoading(true);
		const res = await paymentService.topUp(userId, parseFloat(getValues('amount')), token);
		console.log(res);
		setIsLoading(false);
		openModal();
	};

	const [balance, setBalance] = useState(2.23);
	const [userId, setUserId] = useState(
		'0trWCURxKWQAuGh4YLKbmR6m07kRJ__rz-u2-ZcpCHDYfjelZWZ4aEZT-j9jDZeUwV00CpR5EcpU69XQIc2A7b5jjeKVoQ9nftgY_PCY3xgVd9MRqqumjNiF3-ituToCwdWRdGkXgX65OCmg1eZt8wccd9eME2050lAEiXd7mh5FftXQW6PtZ1hZAToQMlqo5iin4ONcgrhSX1kLh1'
	);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async (token) => {
			const data = await walletService.getBalance(userId, token);
			setBalance(parseFloat(data).toFixed(2));
		};
		if (session) {
			const { accessToken, idToken } = session;
			setToken(accessToken);
			fetchData(accessToken);
		}
	}, [userId, session]);

	let [isOpen, setIsOpen] = useState(false);
	let [isOpenConfirm, setIsOpenConfirm] = useState(false);

	const closeModal = async () => {
		setIsOpen(false);
		setValue('amount', '');
		const data = await walletService.getBalance(userId, token);
		setBalance(parseFloat(data).toFixed(2));
	};

	const closeConfirmDialog = () => {
		setIsOpenConfirm(false);
	};

	function openModal() {
		setIsOpen(true);
	}

	const setLoading = () => {
		if (!isLoading) return false;
	};

	const getFee = (input) => {
		const fixedFee = parseFloat(process.env.NEXT_PUBLIC_FIXEDFEE);
		const rate = parseFloat(process.env.NEXT_PUBLIC_RATE);
		const amount = (parseFloat(input) + fixedFee) / (1 - rate);
		const fee = amount * rate + fixedFee;
		return parseFloat(fee).toFixed(2);
	};

	return (
		<main
			className={`container mx-auto min-h-screen flex flex-row justify-center py-28 px-36 ${inter.className}`}
		>
			{isLoading ? <Loader isOpen={isLoading} isClose={setLoading} /> : null}
			<div className="flex flex-col justify-center">
				<div className="flex flex-row">
					<div className="px-14">
						<Link href="/wallet/details" type="button " className="float-left text-gray-700">
							<span className="sr-only">Open main menu</span>
							<ArrowBackOutlinedIcon aria-hidden="true" />
						</Link>
						<h5 className="px-8 text-lg w-full">ENTER AMOUNT TO LOAD</h5>
					</div>
				</div>
				<div className="px-3 py-4 w-96 place-self-center">
					<Card balance={balance} />
				</div>
				<div className="flex justify-center py-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-10 h-10"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
						/>
					</svg>
				</div>
				<form
					id="top-upForm"
					className="flex flex-col place-items-center"
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className="mb-2 content-center bg-none text-center text-2xl outline-none bg-transparent focus:outline-none focus:border-sky-500"
						name="amount"
						id="amount"
						placeholder="Enter Amount"
						{...register('amount', {
							required: true,
							// onChange: (value) => formatAmount(value),
							validate: {
								matchPattern: (value) => /^[1-9]\d*(\.\d+)?$/.test(value),
								// checkLength: (value) => value.length >= 19,
							},
						})}
					/>
					{errors.amount?.type === 'required' && (
						<p className="text-red-500 text-sm italic">Amount is required!</p>
					)}
					{errors.amount?.type === 'matchPattern' && (
						<p className="text-red-500 text-sm italic">Amount is not valid!</p>
					)}
				</form>
				<div className="inline-flex items-center justify-center w-full">
					<hr className="w-64 h-px my-4 bg-gray-500 border-0" />
				</div>
				<div className="flex justify-center">ADDING FUNDS BY</div>
				<div className="px-16 py-4 w-fit">
					<CreditCard />
				</div>
				<div className="flex self-center w-52 py-4">
					<ButtonLogin
						//set func to call onsubmit

						form="top-upForm"
						type="submit"
						name="Load"
						color_500="#A855F7"
						color_600="#9333EA"
						color_700="#7E22CE"
					/>
				</div>
			</div>

			{/* dialog confirm */}
			<Transition appear show={isOpenConfirm} as={Fragment}>
				<Dialog as="div" className="relative z-40" onClose={closeConfirmDialog}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/30 bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="drop-shadow-2xl bg-purple-300 w-96 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<div className="fixed top-0 left-0 right-0 bg-white rounded-t-2xl p-6">
										<Dialog.Title
											as="h2"
											className="text-xl text-center font-medium leading-6 text-gray-900"
										>
											Confirm
										</Dialog.Title>
									</div>
									<div className="overflow-y-auto mt-12">
										{/*content here */}
										<div className="mx-auto px-2 py-2 flex flex-col">
											<div className="py-2">
												<h1 className="float-left">Amount: </h1>
												<h1 className="font-bold float-right">{getValues('amount')}$</h1>
											</div>
											<div className="py-2">
												<h1 className="float-left">Process Fee: </h1>
												<h1 className="font-bold float-right">{getFee(getValues('amount'))}$</h1>
											</div>
											<div className="py-2">
												<h1 className="float-left">Total: </h1>
												<h1 className="font-bold float-right">
													{parseFloat(getValues('amount')) +
														parseFloat(getFee(getValues('amount')))}
													$
												</h1>
											</div>
										</div>
										<div className="flex flex-row space-x-2">
											<ButtonLogin
												func={() => closeConfirmDialog()}
												name="Cancel"
												color_500="#fca5a5"
												color_600="#f87171"
												color_700="#ef4444"
											/>
											<ButtonLogin
												func={() => topUp()}
												name="Top up"
												color_500="#A855F7"
												color_600="#9333EA"
												color_700="#7E22CE"
											/>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

			<SuccessDialog message="Payment" isOpen={isOpen} closeModal={closeModal} />
		</main>
	);
}

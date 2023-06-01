import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import ButtonLogin from '@/components/ButtonLogin';
import CreditCard from '@/components/CreditCard';
import SuccessDialog from '@/components/SuccessDialog';

import * as walletService from '@/services/wallet-service'; 
import * as paymentService from '@/services/payment-service'; 
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] });

export default function Fund() {
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

	const onSubmit = async (data) => {
		setIsLoading(true);
		const res = await paymentService.topUp(userId, parseFloat(getValues('amount')));
		console.log(res);
		setIsLoading(false);
		openModal();
	};

	const [balance, setBalance] = useState(2.23);
	const [userId, setUserId] = useState("0trWCURxKWQAuGh4YLKbmR6m07kRJ__rz-u2-ZcpCHDYfjelZWZ4aEZT-j9jDZeUwV00CpR5EcpU69XQIc2A7b5jjeKVoQ9nftgY_PCY3xgVd9MRqqumjNiF3-ituToCwdWRdGkXgX65OCmg1eZt8wccd9eME2050lAEiXd7mh5FftXQW6PtZ1hZAToQMlqo5iin4ONcgrhSX1kLh1");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const data = await walletService.getBalance(userId);
			setBalance(parseFloat(data).toFixed(2));
		}
		fetchData();
	}, [userId]);

	let [isOpen, setIsOpen] = useState(false);

	const closeModal = async () => {
		setIsOpen(false);
		setValue('amount', '');
		const data = await walletService.getBalance(userId);
		setBalance(parseFloat(data).toFixed(2));
	}

	function openModal() {
		setIsOpen(true);
	}

	const setLoading = () => {
		if (!isLoading)
			return false;
	}

	return (
		<main
			className={`container mx-auto min-h-screen flex flex-row justify-center py-28 px-36 ${inter.className}`}
		>
			{isLoading ? <Loader isOpen={isLoading} isClose={setLoading}/> : null}
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
					<Card balance={balance}/>
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
				<form id='top-upForm' className="flex flex-col place-items-center" onSubmit={handleSubmit(onSubmit)}>
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
						
			<SuccessDialog message="Payment" isOpen={isOpen} closeModal={closeModal} />
		</main>
	);
}

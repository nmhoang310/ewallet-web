import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { Inter } from 'next/font/google';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Link from 'next/link';

import ButtonLogin from '@/components/ButtonLogin';
import SuccessDialog from '@/components/SuccessDialog';

import * as walletService from '@/services/wallet-service'; 

import { useSession  } from 'next-auth/react';


const inter = Inter({ subsets: ['latin'] });

export default function AddNewCard() {
	const { data: session, status } = useSession()
	const [token, setToken] = useState();
	let [cardNumber, setCardNumber] = useState('');
	const [card, setCard] = useState({
		firstName: null,
		lastName: null,
		cardNumber: null,
		cardHolder: null,
		expDate: null,
		cvv: null,
		billingAddr: null,
		cardType: null,
	});
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
		let type = "";
		
		if (data.cardNumber.charAt(0) === '4') type="Visa";
		else if (cardNumber.charAt(0) === '2' || cardNumber.charAt(0) === '5')
			type="Mastercard";
		let payload={
			firstName: "Pham",
			lastName: "MinhCo",
			userId: "0trWCURxKWQAuGh4YLKbmR6m07kRJ__rz-u2-ZcpCHDYfjelZWZ4aEZT-j9jDZeUwV00CpR5EcpU69XQIc2A7b5jjeKVoQ9nftgY_PCY3xgVd9MRqqumjNiF3-ituToCwdWRdGkXgX65OCmg1eZt8wccd9eME2050lAEiXd7mh5FftXQW6PtZ1hZAToQMlqo5iin4ONcgrhSX1kLh1",
			cardNumber: data.cardNumber.replace(/\D/g, ''),
			expDate: data.expDate,
			cvv: data.cvv,
			cardHolder: data.cardHolder,
			cardType: type,
			billingAddr: data.street + ', ' + data.state + ', ' + data.city + ' ' + data.zip
		};
		
		let res = await walletService.addNewCard(payload, token);
		console.log(res);
		openModal();
	};

	let [isOpen, setIsOpen] = useState(false);

	const formatCardNumber = (event) => {
		let input = event.target.value;
		// Remove any existing spaces from the input
		const sanitizedInput = input.replace(/\s/g, '');

		// Use regular expressions to separate the string into groups of four digits
		const separatedNumbers = sanitizedInput.replace(/(\d{4})/g, '$1 ');

		// Trim any trailing whitespace
		const result = separatedNumbers.trim();

		setValue('cardNumber', result.slice(0, 19));
		setCardNumber(result.slice(0, 19));
	};

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	useEffect(() => {
		if (session) {
			const  { accessToken, idToken } = session
			setToken(accessToken)
		}
	}, [session]);

	return (
		<main
			className={`container mx-auto min-h-screen flex flex-row justify-center py-24 px-36 ${inter.className}`}
		>
			<div className="z-2 max-w-5xl font-mono text-base lg:flex bg-white p-8 rounded-lg">
				<div className="flex flex-col">
					{/* BacK */}
					<div className="text-violet-700 font-bold mb-6">
						<Link href="/wallet" type="button " className="float-left text-gray-700">
							<span className="sr-only">Add Credit Card</span>
							<ArrowBackOutlinedIcon aria-hidden="true" />
						</Link>
						<h5 className="px-8 text-lg w-full">Add Credit Card</h5>
					</div>
					{/* Credit Card Information */}
					<div>
						<h5 className="text-violet-700 font-bold mb-3">Credit Card Information</h5>
						<form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
							{/* <div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
									<label
										className="block tracking-wide text-gray-700 font-bold mb-2"
										htmlFor="grid-firstName"
									>
										First Name
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="grid-firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label
										className="block tracking-wide text-gray-700 font-bold mb-2"
										htmlFor="grid-lastName"
									>
										Last Name
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div> */}
							<div className="relative flex flex-wrap -mx-3 mb-4">
								<div className="w-full px-3">
									<label
										className="block tracking-wide text-gray-700  font-bold mb-2"
										htmlFor="cardNumber"
									>
										Card Number
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="cardNumber"
										name="cardNumber"
										type="text"
										placeholder="Enter Card Number"
										max={19}
										{...register('cardNumber', {
											required: true,
											onChange: (value) => formatCardNumber(value),
											validate: {
												matchPattern: (value) => /^-?\d+(\s+\d+)*$/.test(value),
												checkLength: (value) => value.length >= 19,
											},
										})}
									/>
									{errors.cardNumber?.type === 'required' && (
										<p className="text-red-500 text-sm italic">Card number is required!</p>
									)}
									{errors.cardNumber?.type === 'matchPattern' && (
										<p className="text-red-500 text-sm italic">Card number is not valid!</p>
									)}
									{errors.cardNumber?.type === 'checkLength' && (
										<p className="text-red-500 text-sm italic">Card number must be 16 digits!</p>
									)}
									{cardNumber.charAt(0) === '4' ? (
										<Image
											className="pointer-events-none absolute top-1/2 transform -translate-y-1/4 bottom-0 right-5"
											src="/visa.png"
											width={31}
											height={31}
											alt="Picture of the author"
										/>
									) : null}
									{cardNumber.charAt(0) === '2' || cardNumber.charAt(0) === '5' ? (
										<Image
											className="pointer-events-none absolute top-1/2 transform -translate-y-1/4 bottom-0 right-5"
											src="/master-card.png"
											width={42}
											height={42}
											alt="Picture of the author"
										/>
									) : null}
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label
										className="block tracking-wide text-gray-700 font-bold mb-2"
										htmlFor="grid-expDate"
									>
										Expiration Date
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-500  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
										id="grid-expDate"
										name="expDate"
										type="month"
										min={
											new Date().getFullYear() +
											'-' +
											(new Date().getMonth() + 1).toString().padStart(2, '0')
										}
										pattern="[0-9]{4}-[0-9]{2}"
										placeholder="MM/YYYY"
										{...register('expDate', {
											required: true,
										})}
									/>
									{errors.expDate?.type === 'required' && (
										<p className="text-red-500 text-sm italic">Expiration Date is required!</p>
									)}
								</div>
								<div className="w-full md:w-1/2 px-3 relative">
									<label
										className="block tracking-wide text-gray-700 font-bold mb-2"
										htmlFor="grid-securityCode"
									>
										Security Code
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-securityCode"
										type="text"
										placeholder="3-digit CVV"
										{...register('cvv', {
											required: true,
											onChange: (value) => {
												setValue('cvv', value.target.value.slice(0, 3));
											},
											validate: {
												matchPattern: (value) => /^\d+$/.test(value),
												checkLength: (value) => value.length >= 3,
											},
										})}
									/>
									{errors.cvv?.type === 'required' && (
										<p className="text-red-500 text-sm italic">CVV number is required!</p>
									)}
									{errors.cvv?.type === 'matchPattern' && (
										<p className="text-red-500 text-sm italic">CVV is not valid!</p>
									)}
									{errors.cvv?.type === 'checkLength' && (
										<p className="text-red-500 text-sm italic">The CVV number is 3 digits!</p>
									)}
									<Image
										className="pointer-events-none absolute top-1/2 transform -translate-y-1/4 bottom-0 right-5"
										src="/cvv.png"
										width={31}
										height={31}
										alt="Picture of the author"
									/>
								</div>
							</div>

							<div className="flex flex-wrap -mx-3">
								<div className="w-full px-3">
									<label
										className="block tracking-wide text-gray-700 font-bold mb-2"
										htmlFor="cardHolder"
									>
										Name on Card
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="cardHolder"
										name="cardHolder"
										type="text"
										placeholder="Enter Name on Card"
										{...register('cardHolder', {
											required: true,
											onChange: (value) => {
												setValue('cardHolder', value.target.value.toUpperCase());
											},
										})}
									/>
									{errors.cardHolder?.type === 'required' && (
										<p className="text-red-500 text-sm italic">Name is required!</p>
									)}
								</div>
							</div>
							<div className="inline-flex items-center justify-center w-full">
								<hr className="w-full h-px mb-6 bg-gray-500 border-0" />
							</div>
							<div className="flex flex-col w-full">
								<div className="text-violet-700 font-bold mb-3">Billing Address</div>
								<div className="flex flex-wrap -mx-3">
									<div className="w-full px-3">
										<label
											className="block tracking-wide text-gray-700 font-bold mb-2"
											htmlFor="street"
										>
											Street Address
										</label>
										<input
											className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											id="street"
											name="street"
											type="text"
											// placeholder="Street Address"
											defaultValue="1 Main St"
											{...register('street', {
												required: true,
											})}
										/>
										{errors.street?.type === 'required' && (
											<p className="text-red-500 text-sm italic">Street is required!</p>
										)}
									</div>
								</div>
								<div className="flex flex-wrap -mx-3">
									<div className="w-full px-3">
										<label
											className="block tracking-wide text-gray-700 font-bold mb-2"
											htmlFor="city"
										>
											City
										</label>
										<input
											className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											id="city"
											name="city"
											type="text"
											// placeholder="City"
											defaultValue="San Jose"
											{...register('city', {
												required: true,
											})}
										/>
										{errors.city?.type === 'required' && (
											<p className="text-red-500 text-sm italic">City is required!</p>
										)}
									</div>
								</div>
								<div className="flex flex-wrap mb-2 w-full">
									<div className="w-full md:w-1/2 pr-3 mb-6 md:mb-0">
										<label
											className="block tracking-wide text-gray-700 font-bold mb-2"
											htmlFor="state"
										>
											State
										</label>
										<div className="relative">
											<select
												className="block appearance-none w-full bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												id="state"
												name="state"
												{...register('state')}
											>
												<option>California</option>
												<option>Missouri</option>
												<option>Texas</option>
											</select>
											<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
												<svg
													className="fill-current h-4 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
												>
													<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
												</svg>
											</div>
										</div>
									</div>
									<div className="w-full md:w-1/2 pl-3 mb-6 md:mb-0">
										<label
											className="block tracking-wide text-gray-700 font-bold mb-2"
											htmlFor="zip"
										>
											Zip
										</label>
										<input
											className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											id="zip"
											type="text"
											// placeholder="ZIP Code"
											defaultValue="95131"
											{...register('zip', {
												required: true,
											})}
										/>
										{errors.zip?.type === 'required' && (
											<p className="text-red-500 text-sm italic">ZIP is required!</p>
										)}
									</div>
								</div>
							</div>
							<div className="flex self-center w-full pt-12">
								<ButtonLogin
									//func={() => openModal()}
									type="submit"
									name="Add"
									color_500="#A855F7"
									color_600="#9333EA"
									color_700="#7E22CE"
								/>
							</div>
						</form>
					</div>

					<SuccessDialog message="Add new card" isOpen={isOpen} closeModal={closeModal} />
				</div>
			</div>
		</main>
	);
}

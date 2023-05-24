import { React, useState } from 'react';

import { Inter } from 'next/font/google';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Link from 'next/link';

import ButtonLogin from '@/components/ButtonLogin';
import SuccessDialog from '@/components/SuccessDialog';

const inter = Inter({ subsets: ['latin'] });

export default function AddNewCard() {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<main className={`container mx-auto min-h-screen flex flex-row py-28 px-36 ${inter.className}`}>
			<div className="z-2 max-w-5xl font-mono text-sm lg:flex">
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
						<h5 className='text-violet-700 font-bold mb-3'>Credit Card Information</h5>
						<form className="w-full max-w-lg">
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label
										className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="cardNumber"
									>
										Card Number
									</label>
									<input
										className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="cardNumber"
										type="password"
										placeholder="Enter Card Number"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label
										className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="grid-expDate"
									>
										Expiration Date
									</label>
									<input
										className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="grid-expDate"
										type="text"
										placeholder="MM/YY"
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label
										className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="grid-securityCode"
									>
										Security Code
									</label>
									<input
										className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-securityCode"
										type="text"
										placeholder="3-digit CVV"
									/>
								</div>
							</div>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label
										className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="cardNumber"
									>
										Name on Card
									</label>
									<input
										className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="cardNumber"
										type="password"
										placeholder="Enter Card Number"
									/>
								</div>
							</div>
							<div className='flex flex-col w-full'>
                            <div className='text-violet-700 font-bold mb-3'>Billing Address</div>
							<div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full px-3">
									<label
										className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="cardNumber"
									>
										Street Address
									</label>
									<input
										className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="cardNumber"
										type="password"
										placeholder="Street Address"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full px-3">
									<label
										className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="cardNumber"
									>
										Apt., ste., bldg.
									</label>
									<input
										className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="cardNumber"
										type="password"
										placeholder="Apt., ste., bldg."
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full px-3">
									<label
										className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="cardNumber"
									>
										City
									</label>
									<input
										className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="cardNumber"
										type="password"
										placeholder="City"
									/>
								</div>
							</div>
							<div className="flex flex-wrap mb-2 w-full">
								<div className="w-full md:w-1/2 pr-3 mb-6 md:mb-0">
									<label
										className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="grid-state"
									>
										State
									</label>
									<div className="relative">
										<select
											className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											id="grid-state"
										>
											<option>New Mexico</option>
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
										className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="grid-zip"
									>
										Zip
									</label>
									<input
										className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-zip"
										type="text"
										placeholder="ZIP Code"
									/>
								</div>
							</div>
                            </div>
						</form>
					</div>

					<div className="flex self-center w-52 py-4">
						<ButtonLogin
						    func={() => openModal()}
							name="Add"
							color_500="#A855F7"
							color_600="#9333EA"
							color_700="#7E22CE"
						/>
					</div>
					<SuccessDialog message="Payment" isOpen={isOpen} closeModal={closeModal} />
				</div>
			</div>
		</main>
	);
}

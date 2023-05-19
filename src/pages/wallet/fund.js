import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import Card from '@/components/Card';
import ButtonLogin from '@/components/ButtonLogin';
import CreditCard from '@/components/CreditCard';

const inter = Inter({ subsets: ['latin'] });

export default function fund() {
    const focusFunc = () => {
        inputRef.placeholder = 'test';
    };


	return (
		<main
			className={`container mx-auto min-h-screen flex flex-row justify-center py-28 px-36 ${inter.className}`}
		>
			<div className="flex flex-col justify-center">
				<div className="flex flex-row">
					<div className="px-14">
						<Link href="/" type="button " className="float-left text-gray-700">
							<span className="sr-only">Open main menu</span>
							<ArrowBackOutlinedIcon aria-hidden="true" />
						</Link>
						<h5 className="px-8 text-lg w-full">ENTER AMOUNT TO LOAD</h5>
					</div>
				</div>
				<div className="px-16 py-4 w-fit">
					<Card />
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
				<div className='flex justify-center'>
					<input className='content-center bg-none text-center text-2xl outline-none bg-transparent focus:outline-none focus:border-sky-500' name="myInput"  placeholder="Enter Amount"/>
				</div>
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-4 bg-gray-500 border-0"/>
                </div>
				<div className="flex justify-center">ADDING FUNDS BY</div>
				<div className="px-16 py-4 w-fit">
					<CreditCard />
				</div>
				<div className="flex self-center w-52 py-4">
					<ButtonLogin name="Load" color_500="#3B82F6" color_600="#2563EB" color_700="#1D4ED8" />
				</div>
			</div>
		</main>
	);
}

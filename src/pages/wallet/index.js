import { useContext, useState, React, Fragment } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Card from '@/components/Card';
import ButtonCard from '@/components/ButtonCard';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import CreditCard from '@/components/CreditCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<main className={`container mx-auto min-h-screen flex flex-row py-28 px-36 ${inter.className}`}>
			<div className="z-2 max-w-5xl font-mono text-sm lg:flex">
				<Link className='p-4 w-fit h-64' href="/wallet/details">
					<Card />
				</Link>
				<div className='p-4 w-fit h-64'>
					<CreditCard />
				</div>
			</div>
		</main>
	);
}

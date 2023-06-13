import { useContext, useState, React, Fragment, useEffect } from 'react';
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

import { useSession  } from 'next-auth/react';

import * as walletService from '@/services/wallet-service'; 

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [balance, setBalance] = useState(2.23);
	const [userId, setUserId] = useState("0trWCURxKWQAuGh4YLKbmR6m07kRJ__rz-u2-ZcpCHDYfjelZWZ4aEZT-j9jDZeUwV00CpR5EcpU69XQIc2A7b5jjeKVoQ9nftgY_PCY3xgVd9MRqqumjNiF3-ituToCwdWRdGkXgX65OCmg1eZt8wccd9eME2050lAEiXd7mh5FftXQW6PtZ1hZAToQMlqo5iin4ONcgrhSX1kLh1");
	const { data: session, status } = useSession()
	useEffect(() => {
		// const { accessToken, idToken } = session
		const fetchData = async (token) => {
			const data = await walletService.getBalance(userId, token);
			setBalance(parseFloat(data).toFixed(2));
		}

		if (session) {
			const  { accessToken, idToken } = session
			fetchData(accessToken);
		}
	}, [userId, session]);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	// if (status === "loading") {
	// 	return <p>Loading...</p>
	// }

	// if (status === "unauthenticated") {
	// 	return signIn('wso2is', { callbackUrl: '/' })
	// }

	return (
		<main className={`container mx-auto min-h-screen py-28 px-36 ${inter.className}`}>
			<div className="z-2 w-full px-15 font-mono text-sm grid grid-cols-3 gap-3 flex space-x-4">
				<Link className="p-4 w-96 h-60" href="/wallet/details">
					<Card balance={balance}/>
				</Link>
				<div className="p-4 w-96 h-60">
					<CreditCard />
				</div>
				<div className="p-4 h-60 w-fit">
					<Link href="/wallet/add-new-card" className="w-fit h-fit ">
						<div className="h-full p-4 rounded-xl border-dashed border-2 border-black border-dashed font-bold text-lg w-80 flex flex-col place-content-center place-items-center ">
							<Image
								className="m-0"
								src="https://market-kanoo-dev.kardsys.com/assets/images/wallet/add-card.png"
								width={68}
								height={68}
								alt="Picture of the author"
							/>
							<div>Add New Card</div>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}


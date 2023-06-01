import { React, useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Datepicker from 'react-tailwindcss-datepicker';

import ButtonLogin from '@/components/ButtonLogin';

const inter = Inter({ subsets: ['latin'] });

import * as accountingService from '@/services/accounting-service';
import Loader from '@/components/Loader';

export default function Transaction() {
	const [listTransaction, setListTransaction] = useState(null);
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});
	const handleValueChange = (newValue) => {
		console.log('newValue:', newValue);
		setValue(newValue);
	};
	const [walletId, setWalletId] = useState("5rNeRRSrXD2rrC7ACtahv");
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const data = await accountingService.getListTransactionByWalletId(walletId);
			setListTransaction(data);
			setIsLoading(false)
			console.log(data)
		}

		fetchData();
	}, [walletId]);

	const setLoading = () => {
		if (!isLoading)
			return false;
	}

	return (
		<main className={`container z-0 w-full min-h-screen flex flex-col py-28 ${inter.className}`}>
			{isLoading ? <Loader isOpen={isLoading} isClose={setLoading}/> : null}
			<div className="w-full text-center font-bold text-2xl py-5 border-y-2 ">TRANSACTIONS</div>
			<div className="flex flex-col py-4 px-12">
				{/* filter */}
				<div className="flex flex-row justify-around font-bold">
					<div>
						<div className="w-full lg:max-w-sm">
							<select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
								<option>All cards</option>
								<option>Kanoo Cash card</option>
								<option>React with Tailwind CSS</option>
								<option>React With Headless UI</option>
							</select>
						</div>
					</div>
					<div className="flex flex-row items-center">
						<div className="w-fit px-4">Filter by:</div>
						<div className="lg:max-w-sm">
							<select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
								<option>All categories</option>
								<option>Kanoo Cash card</option>
								<option>React with Tailwind CSS</option>
								<option>React With Headless UI</option>
							</select>
						</div>
					</div>
					<div className="flex flex-row items-center">
						<div className="w-fit px-4">DATE:</div>

						<Datepicker primaryColor={'purple'} value={value} onChange={handleValueChange} />
					</div>
				</div>

				<div className="w-32 my-6"><ButtonLogin name="Filter" color_500="#A855F7" color_600="#9333EA" color_700="#7E22CE" /></div>

				{/* table */}
				<div className="overflow-x-auto shadow-md sm:rounded-lg">
					<table className="w-full text-sm overflow-scroll text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Transaction ID
								</th>
								<th scope="col" className="px-6 py-3">
									Category
								</th>
								<th scope="col" className="px-6 py-3">
									Status
								</th>
								<th scope="col" className="px-6 py-3">
									Beneficiary
								</th>
								<th scope="col" className="px-6 py-3">
									Remitter
								</th>
								<th scope="col" className="px-6 py-3">
									Amount
								</th>
								<th scope="col" className="px-6 py-3">
									Process Fee
								</th>
								<th scope="col" className="px-6 py-3">
									Transaction Date
								</th>
							</tr>
						</thead>
						<tbody className='text-center'>
							{listTransaction !== null ? listTransaction.map(transaction => (
								<tr key= {transaction.transactionId}
								className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{transaction.transactionId}
								</th>
								<td className="px-6 py-4">{transaction.category}</td>
								<td className="px-6 py-4">{transaction.status}</td>
								<td className="px-6 py-4">{transaction.beneficiary}</td>
								<td className="px-6 py-4">{transaction.remitter}</td>
								<td className="px-6 py-4">{transaction.amount}$</td>
								<td className="px-6 py-4">{transaction.fee}$</td>
								<td className="px-6 py-4">{transaction.transactionDate}</td>
							</tr>
							)) : setLoading(true)}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
}

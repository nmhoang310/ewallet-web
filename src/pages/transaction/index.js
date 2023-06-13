import { React, useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Datepicker from 'react-tailwindcss-datepicker';

import ButtonLogin from '@/components/ButtonLogin';
import { useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

import * as accountingService from '@/services/accounting-service';
import * as walletService from '@/services/wallet-service';
import Loader from '@/components/Loader';

export default function Transaction() {
	const [userId, setUserId] = useState("0trWCURxKWQAuGh4YLKbmR6m07kRJ__rz-u2-ZcpCHDYfjelZWZ4aEZT-j9jDZeUwV00CpR5EcpU69XQIc2A7b5jjeKVoQ9nftgY_PCY3xgVd9MRqqumjNiF3-ituToCwdWRdGkXgX65OCmg1eZt8wccd9eME2050lAEiXd7mh5FftXQW6PtZ1hZAToQMlqo5iin4ONcgrhSX1kLh1");
	const { data: session, status } = useSession();
	const [token, setToken] = useState();
	const [walletId, setWalletId] = useState();
	const [listTransaction, setListTransaction] = useState(null);
	const [listTransactionTemp, setListTransactionTemp] = useState(null);
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});
	const handleValueChange = (newValue) => {
		console.log('newValue:', newValue);
		setValue(newValue);
	};
	
	const [isLoading, setIsLoading] = useState(true);
	const [isFilter, setIsFilter] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			if (session) {
				const { accessToken, idToken } = session;
				const walletId = await walletService.getWalletId(userId, accessToken)
				setWalletId(walletId);
				const data = await accountingService.getListTransactionByWalletId(walletId, accessToken);
				setToken(accessToken);
				setListTransaction(data);
				setListTransactionTemp(data);
				setIsLoading(false);
			}

			//console.log(data)
		};

		fetchData();
	}, [walletId, session]);

	const setLoading = () => {
		if (!isLoading) return false;
	};

	const filter = async () => {
		const start = value.startDate + 'T00:00:00';
		const end = value.endDate + 'T23:59:59';
		setIsLoading(true);
		console.log(token);
		const data = await accountingService.getListTransactionByDate(start, end, walletId, token);
		setListTransaction(data);
		setIsLoading(false);
		setIsFilter(true);
	};

	const refresh = () => {
		setListTransaction(listTransactionTemp);
		setIsFilter(false);
	};

	return (
		<main className={`container z-0 w-full min-h-screen flex flex-col py-28 ${inter.className}`}>
			{isLoading ? <Loader isOpen={isLoading} isClose={setLoading} /> : null}
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

				{isFilter ? (
					<div className="w-32 my-6 flex flex-row space-x-8 w-1/5">
						<ButtonLogin
							func={() => filter()}
							name="Filter"
							color_500="#A855F7"
							color_600="#9333EA"
							color_700="#7E22CE"
						/>
						<ButtonLogin
							func={() => refresh()}
							name="Refresh"
							color_500="#0284c7"
							color_600="#0369a1"
							color_700="#075985"
						/>
					</div>
				) : (
					<div className="w-32 my-6">
						<ButtonLogin
							func={() => filter()}
							name="Filter"
							color_500="#A855F7"
							color_600="#9333EA"
							color_700="#7E22CE"
						/>
					</div>
				)}

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
						<tbody className="text-center">
							{listTransaction
								? listTransaction.map((transaction) => (
										<tr
											key={transaction.transactionId}
											className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
										>
											<th
												scope="row"
												className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												{transaction.transactionId}
											</th>
											<td className="px-6 py-4">{transaction.category}</td>
											<td className="px-6 py-4">{transaction.status}</td>
											<td className="px-6 py-4">{transaction.remitter}</td>
											<td className="px-6 py-4">{transaction.amount}$</td>
											<td className="px-6 py-4">{transaction.fee}$</td>
											<td className="px-6 py-4">{transaction.transactionDate}</td>
										</tr>
								  ))
								: setLoading(true)}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
}

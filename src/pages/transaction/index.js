import { React, useState } from 'react';
import { Inter } from 'next/font/google';
import Datepicker from 'react-tailwindcss-datepicker';

import ButtonLogin from '@/components/ButtonLogin';

const inter = Inter({ subsets: ['latin'] });

export default function Transaction() {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});
	const handleValueChange = (newValue) => {
		console.log('newValue:', newValue);
		setValue(newValue);
	};
	return (
		<main className={`container z-0 w-full min-h-screen flex flex-col py-28 ${inter.className}`}>
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
					<table className="w-full text-sm overflow-scroll text-left text-gray-500 dark:text-gray-400">
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
									Fee
								</th>
								<th scope="col" className="px-6 py-3">
									Transaction Date
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Apple MacBook Pro 17
								</th>
								<td className="px-6 py-4">Silver</td>
								<td className="px-6 py-4">Laptop</td>
								<td className="px-6 py-4">$2999</td>
								<td className="px-6 py-4">200</td>
								<td className="px-6 py-4">100$</td>
								<td className="px-6 py-4">$2999</td>
								<td className="px-6 py-4">23/05/2023</td>
							</tr>
							<tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Microsoft Surface Pro
								</th>
								<td className="px-6 py-4">White</td>
								<td className="px-6 py-4">Laptop PC</td>
								<td className="px-6 py-4">$1999</td>
								<td className="px-6 py-4">200</td>
								<td className="px-6 py-4">100$</td>
								<td className="px-6 py-4">$2999</td>
								<td className="px-6 py-4">23/05/2023</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Magic Mouse 2
								</th>
								<td className="px-6 py-4">Black</td>
								<td className="px-6 py-4">Accessories</td>
								<td className="px-6 py-4">$99</td>
								<td className="px-6 py-4">200</td>
								<td className="px-6 py-4">100$</td>
								<td className="px-6 py-4">$2999</td>
								<td className="px-6 py-4">23/05/2023</td>
							</tr>
							<tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Google Pixel Phone
								</th>
								<td className="px-6 py-4">Gray</td>
								<td className="px-6 py-4">Phone</td>
								<td className="px-6 py-4">$799</td>
								<td className="px-6 py-4">200</td>
								<td className="px-6 py-4">100$</td>
								<td className="px-6 py-4">$2999</td>
								<td className="px-6 py-4">23/05/2023</td>
							</tr>
							<tr>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Apple Watch 5
								</th>
								<td className="px-6 py-4">Red</td>
								<td className="px-6 py-4">Wearables</td>
								<td className="px-6 py-4">$999</td>
								<td className="px-6 py-4">200</td>
								<td className="px-6 py-4">100$</td>
								<td className="px-6 py-4">$2999</td>
								<td className="px-6 py-4">23/05/2023</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
}

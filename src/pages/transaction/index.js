import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function index() {
	return (
		<main className={`container z-1 w-screen min-h-screen flex flex-col py-28 ${inter.className}`}>
			<div className="w-full text-center font-bold text-2xl py-5 border-y-2 ">TRANSACTIONS</div>
			<div className="flex flex-col py-8 px-12 -z-1 z-999999999999">
				{/* filter */}
				<div className="flex flex-row pb-10 justify-between">
					<div>
						<div className="relative w-full lg:max-w-sm">
							<select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
								<option>All cards</option>
								<option>Kanoo Cash card</option>
								<option>React with Tailwind CSS</option>
								<option>React With Headless UI</option>
							</select>
						</div>
					</div>
					<div className='flex flex-row'>
						<h5>Filter by:</h5>
						<div className="relative w-full lg:max-w-sm">
							<select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
								<option>All categories</option>
								<option>Kanoo Cash card</option>
								<option>React with Tailwind CSS</option>
								<option>React With Headless UI</option>
							</select>
						</div>
					</div>
					<div className='flex flex-row'>
                        <h1>FROM</h1>
						<div class="relative max-w-sm">
							<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									aria-hidden="true"
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<input
								datepicker
								type="text"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Select date"
							/>
						</div>
					</div>
					<div className='flex flex-row'>
                        <h1>TO</h1>
						<div class="relative max-w-sm">
							<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									aria-hidden="true"
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<input
								datepicker
								type="text"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Select date"
							/>
						</div>
					</div>
				</div>

				{/* table */}
				<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" class="px-6 py-3">
									Transaction ID
								</th>
								<th scope="col" class="px-6 py-3">
									Category
								</th>
								<th scope="col" class="px-6 py-3">
									Status
								</th>
								<th scope="col" class="px-6 py-3">
									Beneficiary
								</th>
								<th scope="col" class="px-6 py-3">
									Remitter
								</th>
								<th scope="col" class="px-6 py-3">
									Amount
								</th>
								<th scope="col" class="px-6 py-3">
									Fee
								</th>
								<th scope="col" class="px-6 py-3">
									Transaction Date
								</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Apple MacBook Pro 17
								</th>
								<td class="px-6 py-4">Silver</td>
								<td class="px-6 py-4">Laptop</td>
								<td class="px-6 py-4">$2999</td>
								<td class="px-6 py-4">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
										Edit
									</a>
								</td>
							</tr>
							<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Microsoft Surface Pro
								</th>
								<td class="px-6 py-4">White</td>
								<td class="px-6 py-4">Laptop PC</td>
								<td class="px-6 py-4">$1999</td>
								<td class="px-6 py-4">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
										Edit
									</a>
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Magic Mouse 2
								</th>
								<td class="px-6 py-4">Black</td>
								<td class="px-6 py-4">Accessories</td>
								<td class="px-6 py-4">$99</td>
								<td class="px-6 py-4">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
										Edit
									</a>
								</td>
							</tr>
							<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Google Pixel Phone
								</th>
								<td class="px-6 py-4">Gray</td>
								<td class="px-6 py-4">Phone</td>
								<td class="px-6 py-4">$799</td>
								<td class="px-6 py-4">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
										Edit
									</a>
								</td>
							</tr>
							<tr>
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Apple Watch 5
								</th>
								<td class="px-6 py-4">Red</td>
								<td class="px-6 py-4">Wearables</td>
								<td class="px-6 py-4">$999</td>
								<td class="px-6 py-4">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
										Edit
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
}

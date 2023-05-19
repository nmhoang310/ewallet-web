import Link from 'next/link';
import { useContext, useState, React, Fragment } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

import {
	Bars3Icon,
	ShoppingCartIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {
	ChevronDownIcon,
	UserCircleIcon,
} from '@heroicons/react/20/solid';
import { Dialog, Menu, Transition } from '@headlessui/react';
import ButtonLogin from './ButtonLogin';
import ButtonCard from './ButtonCard';

const items = [
	{ name: 'Account', action: '#' },
	{ name: 'Update Wallet PIN', action: '#' },
	{ name: 'Forgot Wallet PIN', action: '#' },
	{ name: 'Security', action: '#' },
	{ name: 'Logout', action: '#' },
];
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<header className="container fixed top-0 bg-gradient-to-r from-purple-800 to-pink-600">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">eWallet</span>
						<img
							className="h-8 w-auto"
							src="https://market-kanoo-dev.kardsys.com/assets/image/home.png"
							alt=""
						/>
					</Link>
				</div>

				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

				<div className="hidden lg:flex lg:gap-x-12">
					<a href="#" className="text-sm font-semibold leading-6 text-white">
						MARKETPLACE
					</a>
					<Link href="/" className="text-sm font-semibold leading-6 text-white">
						WALLET
					</Link>
					<a href="#" className="text-sm font-semibold leading-6 text-white">
						MESSAGES
					</a>
					<Link href="transaction" className="text-sm font-semibold leading-6 text-white">
						TRANSACTIONS
					</Link>
					<a href="#" className="text-sm font-semibold leading-6 text-white">
						ORDERS
					</a>
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
					</button>
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

				<Menu as="div" className="relative inline-block text-left">
					<div>
						<Menu.Button className="inline-flex w-full px-3 py-2">
							<UserCircleIcon className="h-7 w-7 flex-none text-slate-100" />
							<ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute right-0 z-999 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="py-4 px-3">
								<div className="py-5">
									<a
										href="#"
										className="bg-purple-600 hover:bg-purple-500 py-2.5 px-5 rounded-full text-purple-100 transition duration-500"
									>
										KYC Verified
									</a>
								</div>

								<div className="py-1">
									{items.map((item) => (
										<Menu.Item key={item.name}>
											{({ active }) => (
												<a
													onClick={() => openModal()}
													className={classNames(
														active ? 'bg-purple-700 text-white rounded-md' : 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													{item.name}
												</a>
											)}
										</Menu.Item>
									))}
								</div>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</nav>
			{/* Dialog */}
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="drop-shadow-2xl bg-purple-300 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h2"
										className="text-3xl text-center font-medium leading-6 text-gray-900 py-4"
									>
										Sign In
									</Dialog.Title>

									<div className="container mx-auto h-full flex justify-center items-center">
										<div className="max-w-md w-full">
											<div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
												<div className="mb-4">
													<label className="block text-gray-700 font-bold mb-2" htmlFor="typeEmailX-2">
														Email
													</label>
													<input
														type="email"
														id="typeEmailX-2"
														className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													/>
												</div>

												<div className="mb-4">
													<label className="block text-gray-700 font-bold mb-2" htmlFor="typePasswordX-2">
														Password
													</label>
													<input
														type="password"
														id="typePasswordX-2"
														className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													/>
												</div>

												<div className="flex items-center mb-4">
													<input className="mr-2 leading-tight" type="checkbox" id="form1Example3" />
													<label className="block text-gray-700 font-bold" htmlFor="form1Example3">
														Remember password
													</label>
												</div>

												<div className="mb-4">
													{/* <button
														className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
														type="button"
													>
														Sign In
													</button> */}
													<ButtonLogin name='Sign In' color_500='#3B82F6' color_600='#2563EB' color_700='#1D4ED8'/>
												</div>

												<hr className="my-4" />
													<div className='py-2'>
														<ButtonLogin name="Sign in with Google" icon={<GoogleIcon/>} color_500='#EF4444' color_600='#DC2626' color_700='#B91C1C'/>
													</div>
													
													{/* <button
														className="bg-white border border-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
														style="background-color: #e8511a;"
													>
														<i className="fab fa-github mr-2"></i> Sign in with GitHub
													</button> */}
													<ButtonLogin name="Sign in with WSO2" icon={<GitHubIcon/>} color_500='#FB923C' color_600='#F97316' color_700='#EA580C'/>
											</div>
										</div>
									</div>

									{/* <div className="mt-2">
										<p className="text-sm text-gray-500">
											Your payment has been successfully submitted. We’ve sent you an email with all
											of the details of your order.
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											Got it, thanks!
										</button>
									</div> */}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</header>
	);
}

import Link from 'next/link';
import {  useState, React, Fragment } from 'react';

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
import LoginModal from './LoginModal';


function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const items = [
		{ name: 'Account', action: () => console.log('Account') },
		{ name: 'Update Wallet PIN', action: () => console.log('Update Wallet PIN') },
		{ name: 'Forgot Wallet PIN', action: () => console.log('Forgot Wallet PIN') },
		{ name: 'Security', action: () => console.log('Security') },
		{ name: 'Logout', action: () => openModal() },
	];

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<header className="container fixed top-0 bg-gradient-to-r z-50 from-purple-800 to-pink-600">
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
					<Link href="/wallet" className="text-sm font-semibold leading-6 text-white">
						WALLET
					</Link>
					<a href="#" className="text-sm font-semibold leading-6 text-white">
						MESSAGES
					</a>
					<Link href="/transaction" className="text-sm font-semibold leading-6 text-white">
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
													onClick={item.action}
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
			<LoginModal isOpen={isOpen} closeModal={closeModal}/>
		</header>
	);
}

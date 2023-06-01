import { React, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Loader(props) {
	let circleCommonClasses = 'h-2.5 w-2.5 bg-current   rounded-full';
	return (
		<>
			<Transition appear show={props.isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={props.isClose}>
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
								<Dialog.Panel className="flex flex-col place-items-center w-fit max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<div className="flex">
										<div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
										<div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
										<div className={`${circleCommonClasses} animate-bounce400`}></div>
									</div>
									{/* <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										{props.message} successful
									</Dialog.Title> */}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

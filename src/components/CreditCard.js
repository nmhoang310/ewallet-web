import React from 'react';
import Image from 'next/image';

export default function CreditCard() {
	return (
		<div className="bg-credit bg-cover bg-no-repeat bg-center h-full w-full p-4 rounded-xl text-white text-base">
			<Image src="/mastercard.png" width={52} height={52} alt="Picture of the author" />
			<div className="text-2xl font-bold w-full pt-8 pb-10 px-4 text-center">XXXX XXXX XXXX 9999</div>
			<div>
				<div className="flex justify-between">
					<div className="float-left self-end">Phmhco</div>
					<div className="float-right text-end">
						<div className="text-xs">Valid</div>
						<div>01/2028</div>
					</div>
				</div>
			</div>
		</div>
	);
}

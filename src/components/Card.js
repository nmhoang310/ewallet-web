import React from 'react';

export default function Card(props) {
	return (
		<div className="bg-cash bg-cover bg-no-repeat bg-center h-full w-full p-4 rounded-xl text-white text-base">
			<div>Cash card</div>
			<div className="text-4xl w-full pt-8 pb-10 px-12 text-center">BSD {props.balance}</div>
			<div>
				<div className="flex justify-between">
					<div className='float-left self-end'>Phmhco</div>
					<div className="float-right text-end text-xs">
						<div>6556</div>
						<div>Level 2 verified</div>
					</div>
				</div>
			</div>
		</div>
	);
}

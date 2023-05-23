import { useState, React} from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function index() {
	return (
		<main className={`container mx-auto min-h-screen flex flex-row py-28 px-36 ${inter.className}`}>
			<div className="z-2 max-w-5xl font-mono text-sm lg:flex">
			</div>
		</main>
	);
}

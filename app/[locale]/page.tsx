'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('Index');
	return (
		<main>
			<h1 className='uppercase'>AFURI</h1>
			<h2 className='uppercase'>FINE RAMEN</h2>
		</main>
	);
}

'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('Index');
	return (
		<main>
			<h1 className='uppercase text-3xl text-red-600'>AFURI</h1>
			<h2 className='uppercase'>FINE RAMEN</h2>
			<p className='test text-red-600'>TEST</p>
			<Button variant='destructive'>{t('Order Here')}</Button>
		</main>
	);
}

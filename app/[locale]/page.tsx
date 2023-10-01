'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
	const t = useTranslations('Index');
	return (
		<main>
			<div className='flex place-items-center justify-center h-screen'>
				<div className='grid grid-flow-row place-items-center h-screen'>
					<div className='grid grid-flow-row items-center gap-[17rem]'>
						<div className='grid grid-flow-row text-center'>
							<h1 className='uppercase text-6xl'>AFURI</h1>
							<h2 className='uppercase text-2xl'>FINE RAMEN</h2>
						</div>
						<Link
							href='/avatar'
							className='flex flex-auto justify-center'>
							<Button
								variant='outline'
								className='rounded-[40px] border-[1px] border-solid'>
								{t('Order Here')}
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}

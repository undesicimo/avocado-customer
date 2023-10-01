import { ThemeProvider } from '@/components/themeprovider';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

type P = {
	params: { locale: string };
	children: React.ReactNode;
};

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'jp' }];
}

export default async function LocaleLayout({
	children,
	params: { locale },
}: P) {
	let messages;
	try {
		messages = (await import(`../../messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider
					locale={locale}
					messages={messages}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'>
						{children}
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

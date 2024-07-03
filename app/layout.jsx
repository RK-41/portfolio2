import { Exo } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// theme provider
import { ThemeProvider } from '@/components/ThemeProvider';

const exo = Exo({ subsets: ['latin'] });

export const metadata = {
	title: 'Rajan Kumar',
	description: 'Portfolio of Rajan Kumar',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={exo.className}>
				<ThemeProvider attribute='class' defaultTheme='light'>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}

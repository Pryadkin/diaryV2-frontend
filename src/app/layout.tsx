import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { SITE_NAME } from '@/shared/constants/seo.constants'
import { Header } from '@/shared/ui/Header'

import './globals.scss'
import { Providers } from './providers'

const fonts = Roboto_Condensed({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-roboto',
	style: ['normal'],
})

export const metadata: Metadata = {
	title: {
		default: 'Diary',
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Best game platform [htmldiary.com]',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const links = [
		{ title: 'Profile', pathName: '/profile' },
		{ title: 'Search', pathName: '/search' },
	]

	return (
		<html lang="en">
			<body className={fonts.className}>
				<Providers>
					<Header logoTitle="Diary" links={links} />

					{children}

					<Toaster />
				</Providers>
			</body>
		</html>
	)
}

import type { Metadata } from 'next'
import { Open_Sans, Roboto } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { SITE_NAME } from '@/shared/constants/seo.constants'

import './globals.scss'
import { Providers } from './providers'

const fonts = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	display: 'swap',
	variable: '--font-roboto',
	style: ['normal', 'italic'],
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
					{children}

					<Toaster />
				</Providers>
			</body>
		</html>
	)
}

'use client'

import cn from 'clsx'
import { Honk } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Header.module.scss'

const fonts = Honk({ subsets: ['latin'] })

interface Props {
	logoTitle: string
	links: {
		title: string
		pathName: string
	}[]
}

export const Header = ({ logoTitle, links }: Props) => {
	const path = usePathname()
	const isCurrentPage = (name: string) => path === name

	return (
		<header className={styles.header}>
			<div className={cn(styles.logo, fonts.className)}>{logoTitle}</div>

			<div className={styles.buttonWrapper}>
				{links.map(({ title, pathName }) => {
					return (
						<Link
							key={title}
							href={pathName}
							className={cn(
								styles.button,
								isCurrentPage(pathName) && styles.selectButton,
							)}
						>
							{title}
						</Link>
					)
				})}
			</div>

			<div className={styles.userWrapper}>
				<div className={styles.userTitle}>User Name</div>
			</div>
		</header>
	)
}

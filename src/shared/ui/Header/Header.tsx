'use client'

import styles from './Header.module.scss'
import { Profile } from '@/widgets'
import { GlobalLoader } from '@/widgets'

interface Props {
	logoTitle: string
	links: {
		title: string
		pathName: string
	}[]
}

export const Header = () => {
	return (
		<header className={styles.wrapper}>
			<GlobalLoader />
			<Profile />
		</header>
	)
}

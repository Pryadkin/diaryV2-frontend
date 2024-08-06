'use client'

import { MenuItem } from '..'
import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/shared/constants/color.constants'

import { LogoutButton } from '../LogoutButton/LogoutButton'
import { MENUITEMS } from '../MenuItem/menu.data'

import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<div className={styles.wrapper}>
			<Link href="/" className={styles.logoWrapper} draggable={false}>
				<GanttChartSquare className={styles.logoIcon} size={38} />
				<h1 className={styles.logoTitle}>Diary</h1>
			</Link>
			<div className={styles.menuItemWrapper}>
				<LogoutButton />
				{MENUITEMS.map(item => (
					<MenuItem item={item} key={item.link} />
				))}
			</div>
			<footer></footer>
		</div>
	)
}

'use client'

import { PropsWithChildren } from 'react'

import { Header } from '@/shared/ui/Header'

import styles from './DashboardLayout.module.scss'
import { Sidebar } from '@/widgets'

export const DashboardLayout = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<div className={styles.wrapper}>
			<Sidebar />

			<main className={styles.main}>
				<Header />
				{children}
			</main>
		</div>
	)
}

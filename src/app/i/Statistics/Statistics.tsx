'use client'

import { useProfile } from '@/shared/hooks/useProfile'
import { Loader } from '@/shared/ui'

import styles from './Statistics.module.scss'

export const Statistics = () => {
	const { data, isLoading } = useProfile()

	if (isLoading) {
		return <Loader />
	}

	return (
		<div className={styles.wrapper}>
			{data?.statistics.length ? (
				data.statistics.map(stat => (
					<div className={styles.statItem} key={stat.label}>
						<h3 className={styles.title}>{stat.label}</h3>
						<p className={styles.num}>{stat.value}</p>
					</div>
				))
			) : (
				<p>Statistics not loaded</p>
			)}
		</div>
	)
}

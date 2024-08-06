import { useProfile } from '@/shared/hooks/useProfile'
import { Loader } from '@/shared/ui'

import styles from './Profile.module.scss'

export const Profile = () => {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.wrapper}>
			<div className={styles.profile}>
				<p>{data?.user.name}</p>
				<p>{data?.user.email}</p>
			</div>
			<div className={styles.avatar}>{data?.user.name[1]}</div>
		</div>
	)
}

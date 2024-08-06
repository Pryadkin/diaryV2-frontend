'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { authService } from '@/shared/api/auth/auth.service'

import styles from './LogoutButton.module.scss'

export const LogoutButton = () => {
	const router = useRouter()

	const {} = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth'),
	})

	return (
		<div className={styles.wrapper}>
			<button className={styles.button}>
				<LogOut size={20} className={styles.icon} />
			</button>
		</div>
	)
}

import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useProfile } from '@/shared/hooks/useProfile'

import { TypeUserForm } from '@/entities/user/user.types'

export const useInitialData = (reset: UseFormReset<TypeUserForm>) => {
	const { data, isSuccess } = useProfile()

	useEffect(() => {
		if (isSuccess && data) {
			reset({
				email: data.user.email,
				name: data.user.name,
				breakInterval: data.user.breakInterval,
				intervalsCount: data.user.intervalsCount,
				workInterval: data.user.workInterval,
			})
		}
	}, [isSuccess, reset, data])
}

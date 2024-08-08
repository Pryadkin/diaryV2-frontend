'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/ui'

import styles from './Settings.module.scss'
import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'
import { TypeUserForm } from '@/entities/user/user.types'

export const Settings = () => {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange',
	})

	useInitialData(reset)

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined,
		})
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.leftWrapper}>
				<Field
					id="email"
					label="Email"
					placeholder="Enter email"
					type="email"
					{...register('email')}
				/>

				<Field
					id="name"
					label="Name"
					placeholder="Enter name"
					{...register('name')}
				/>

				<Field
					id="password"
					label="Password"
					placeholder="Enter password"
					type="password"
					{...register('password')}
				/>
			</div>

			<div className={styles.rightWrapper}>
				<Field
					id="workInterval"
					label="Work interval (min.):"
					placeholder="Enter work interval (min.):"
					isNumber
					{...register('workInterval', {
						valueAsNumber: true,
					})}
				/>

				<Field
					id="breakInterval"
					label="Break interval (min.):"
					placeholder="Enter break interval (min.):"
					isNumber
					{...register('breakInterval', {
						valueAsNumber: true,
					})}
				/>

				<Field
					id="intervalsCount"
					label="Intervals count (max 10):"
					placeholder="Enter intervals count (max 10):"
					isNumber
					{...register('intervalsCount', {
						valueAsNumber: true,
					})}
				/>
			</div>

			<Button type="submit" disabled={isPending}>
				Save
			</Button>
		</form>
	)
}

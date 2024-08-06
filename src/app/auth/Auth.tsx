'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { authService } from '@/shared/api/auth/auth.service'
import { IAuthForm } from '@/shared/api/auth/auth.types'
import { DASHBOARD_PAGES } from '@/shared/configs/pages-url.config'
import { Button } from '@/shared/ui'
import { Field } from '@/shared/ui/Fields/Fields'
import { Heading } from '@/shared/ui/Heading'

import styles from './Auth.module.scss'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Here is your toast.')
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Heading title="Auth" />

				<Field
					id="email"
					label="Email"
					placeholder="Enter email"
					type="email"
					extra=""
					{...register('email')}
				/>

				<Field
					id="password"
					label="Password"
					placeholder="Enter password"
					type="password"
					extra=""
					{...register('password')}
				/>

				<div className={styles.btns}>
					<Button onClick={() => setIsLoginForm(true)}>Login</Button>
					<Button onClick={() => setIsLoginForm(false)}>Register</Button>
				</div>
			</form>
		</div>
	)
}

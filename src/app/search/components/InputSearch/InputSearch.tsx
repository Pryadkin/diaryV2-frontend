'use client'

import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	page: z.number(),
	pageSize: z.number(),
	search: z.string(),
	genres: z.string(),
})

type FormFields = z.infer<typeof schema>

export const InputSearch = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({})

	const onSubmit: SubmitHandler<FormFields> = data => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('search')} type="text" placeholder="Search" />
		</form>
	)
}

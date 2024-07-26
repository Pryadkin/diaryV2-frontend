import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useSearch = () => {
	const queryClient = useQueryClient()

	const createTasks = async (data: FormData) => {
		const res = await fetch('https://api.rawg.io/api/games')

		if (res.ok) {
			return res.json()
		}
	}

	const createTaskMutation = useMutation({
		mutationFn: (data: FormData) => createTasks(data),
		onSuccess: () => {
			alert('Задача создана')
			queryClient.invalidateQueries({
				queryKey: ['games'],
			})
		},
		onError: error => {
			if (error instanceof Error) {
				console.error(`😱 Axios request failed: ${error}`)
				alert(error.message)
			} else {
				console.error('Unexpected error', error)
			}
		},
	})

	return { createTaskMutation }
}

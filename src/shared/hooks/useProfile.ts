import { useQuery } from '@tanstack/react-query'

import { userService } from '@/entities/user/user.service'

export const useProfile = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
	})

	return { data, isLoading, isSuccess }
}

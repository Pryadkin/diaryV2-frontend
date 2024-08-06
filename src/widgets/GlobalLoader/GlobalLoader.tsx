'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'

import { Loader } from '@/shared/ui'

export const GlobalLoader = () => {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isMutating || isFetching ? (
		<div>
			<Loader />
		</div>
	) : null
}

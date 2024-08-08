import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Heading } from '@/shared/ui/Heading'

import { Statistics } from './Statistics'

export const metadata: Metadata = {
	title: 'dashboard',
	...NO_INDEX_PAGE,
}

export default function dashboardPage() {
	return (
		<div style={{ color: 'white' }}>
			<Heading title="Statistics" />
			<Statistics />
		</div>
	)
}

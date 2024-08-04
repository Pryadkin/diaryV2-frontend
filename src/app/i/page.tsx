import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

export const metadata: Metadata = {
	title: 'dashboard',
	...NO_INDEX_PAGE,
}

export default function dashboardPage() {
	return <div style={{ color: 'white' }}>dashboard</div>
}

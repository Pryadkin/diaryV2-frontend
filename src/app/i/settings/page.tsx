import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Heading } from '@/shared/ui'

import { Settings } from './Settings'

export const metadata: Metadata = {
	title: 'settings',
	...NO_INDEX_PAGE,
}

export default function SettingsPage() {
	return (
		<div>
			<Heading title="Settings" />
			<Settings />
		</div>
	)
}

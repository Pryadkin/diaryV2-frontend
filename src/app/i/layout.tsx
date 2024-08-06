import { PropsWithChildren } from 'react'

import { DashboardLayout } from './DashboardLayout/DashboardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>
}

import {
	CalendarRange,
	KanbanSquare,
	LayoutDashboard,
	Settings,
	Timer,
} from 'lucide-react'

import { DASHBOARD_PAGES } from '@/shared/configs/pages-url.config'

import type { IMenuItem } from './menu.type'

export const MENUITEMS: IMenuItem[] = [
	{
		icon: LayoutDashboard,
		link: DASHBOARD_PAGES.HOME,
		name: 'Dashboard',
	},
	{
		icon: KanbanSquare,
		link: DASHBOARD_PAGES.TASKS,
		name: 'Tasks',
	},
	{
		icon: Timer,
		link: DASHBOARD_PAGES.TIMER,
		name: 'Pomodoro',
	},
	{
		icon: CalendarRange,
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Time blocking',
	},
	{
		icon: Settings,
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Settings',
	},
]

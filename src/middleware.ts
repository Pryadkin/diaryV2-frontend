import { NextRequest, NextResponse } from 'next/server'

import { EnumTokens } from './shared/api/auth/auth-token'
import { DASHBOARD_PAGES } from './shared/configs/pages-url.config'

export const middleware = async (
	request: NextRequest,
	response: NextResponse,
) => {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isDashboardPage = url.includes('/i')
	const isAuthPage = url.includes('/auth')

	console.log('isAuthPage', isAuthPage)

	// if (isAuthPage && refreshToken) {
	// 	return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
	// }

	// if (isAuthPage) {
	// 	return NextResponse.next()
	// }

	// :TODO add isDashboardPage to middleware
	// * isDashboardPage
	// if (isDashboardPage && refreshToken) {
	// 	return NextResponse.redirect(new URL(DASHBOARD_PAGES.NOTFOUND, url))
	// }

	// if (isDashboardPage && !refreshToken) {
	// 	return NextResponse.redirect(new URL(DASHBOARD_PAGES.NOTFOUND, url))
	// }

	// if (!refreshToken) {
	// 	return NextResponse.redirect(new URL('/auth', url))
	// }

	return NextResponse.next()
}

export const config = {
	matcher: ['/i/:path', '/auth/:path'],
}

// * isDashboardPage - с админ панели делаем переход на 404, чтобы злоумышленник методом тыка не вычислил адрес админ панельи
// (он может перебирать урлы и тайти тот, который редиректит на страницу логина)

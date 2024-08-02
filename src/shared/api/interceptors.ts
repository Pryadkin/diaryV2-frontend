import axios, { CreateAxiosDefaults } from 'axios'

import { getAccessToken, removeFromStorage } from './auth/auth-token'
import { authService } from './auth/auth.service'
import { errorCatch } from './error'

const options: CreateAxiosDefaults = {
	baseURL: process.env.BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const assessToken = getAccessToken()

	if (config?.headers && assessToken) {
		config.headers.Authorization = `Bearer ${assessToken}`
	}

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	},
)

export { axiosClassic, axiosWithAuth }

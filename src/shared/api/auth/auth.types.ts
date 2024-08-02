import { IUser } from '@/entities/user/user.types'

export interface IAuthForm {
	email: string
	name: string
	password: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}

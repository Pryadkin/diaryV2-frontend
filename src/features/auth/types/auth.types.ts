export interface IAuthForm {
	email: string
	name: string
	password: string
}

export interface IUser {
	id: string
	name: string
	email?: string

	workInterval?: number
	breakInterval?: number
	intervalsCount?: number
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}

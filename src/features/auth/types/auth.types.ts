export interface IAuthForm {
	email: string
	firstName: string
	lastName: string
	password: string
	games: []
}

export interface IUser {
	firstName?: string
	lastName?: string
	email?: string
	password?: string
}

export interface IUserGame {
	name: string
	description: string
	genres: any[]
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}

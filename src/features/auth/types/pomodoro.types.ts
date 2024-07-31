import { IBase } from './root.types'

export interface IPomodoroRoundResponse extends IBase {
	totalSecontds: number
	isCompleted?: boolean
}

export interface IPomodoroSessionResponse extends IBase {
	rounds: IPomodoroRoundResponse[]
	isCompleted?: boolean
}

export type TypePomodoroSessionState = Partial<
	Omit<IPomodoroSessionResponse, 'id' | 'createAt' | 'updatedAt'>
>

export type TypePomodoroRoundState = Partial<
	Omit<IPomodoroRoundResponse, 'id' | 'createAt' | 'updatedAt'>
>

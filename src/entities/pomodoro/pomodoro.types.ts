import { IBase } from '../../shared/types/root.types'

export interface IPomodoroRoundResponse extends IBase {
	totalSecontds: number
	isCompleted?: boolean
}

export interface IPomodoroSessionResponse extends IBase {
	rounds: IPomodoroRoundResponse[]
	isCompleted?: boolean
}

export type TypePomodoroSessionFromState = Partial<
	Omit<IPomodoroSessionResponse, 'id' | 'createAt' | 'updatedAt'>
>

export type TypePomodoroRoundFromState = Partial<
	Omit<IPomodoroRoundResponse, 'id' | 'createAt' | 'updatedAt'>
>

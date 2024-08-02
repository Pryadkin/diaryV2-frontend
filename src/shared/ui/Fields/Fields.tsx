import { KeyboardEventHandler, forwardRef } from 'react'

import styles from './Fields.module.scss'

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, id, extra, type, placeholder, state, disabled, isNumber, ...rest },
		ref,
	) => {
		const handleKeyDown = (e: any) => {
			if (
				isNumber &&
				!/[0-9]/.test(e.key) &&
				e.key !== 'Backspace' &&
				e.key !== 'Tab' &&
				e.key !== 'Enter' &&
				e.key !== 'ArrowLeft' &&
				e.key !== 'ArrowRight'
			) {
				e.preventDefault()
			}
		}
		return (
			<div className={extra}>
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className={styles.input}
					onKeyDown={handleKeyDown}
				/>
			</div>
		)
	},
)

Field.displayName = 'Field'

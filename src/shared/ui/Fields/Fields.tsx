import cn from 'clsx'
import { KeyboardEventHandler, forwardRef } from 'react'

import styles from './Fields.module.scss'

interface Props {
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

// :TODO fix Field styles
export const Field = forwardRef<HTMLInputElement, Props>(
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
			<div className={cn(styles.formItem, extra)}>
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
				<input
					ref={ref}
					className={styles.input}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					onKeyDown={handleKeyDown}
					{...rest}
				/>
			</div>
		)
	},
)

Field.displayName = 'Field'

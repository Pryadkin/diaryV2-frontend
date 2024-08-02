import cn from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) => {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	)
}

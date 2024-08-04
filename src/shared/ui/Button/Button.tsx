import cn from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

// :TODO fix Button styles
export const Button = ({
	children,
	className,
	// type = 'primary',
	// size = 'large',
	...rest
}: PropsWithChildren<TypeButton>) => {
	// const {type = 'primary', size = 'large', children, className} = props

	// const sizeStyles = size === 'large' ? styles.largeSize : styles.smallSize
	// const typeStyles = type === 'secondary' ? styles.secondary : styles.primary

	return (
		<button className={cn(styles.btn, styles.largeSize)} {...rest}>
			{children}
		</button>
	)
}

import cn from 'clsx'

import styles from './Checkbox.module.scss'

export const Checkbox = (props: {
	id?: string
	extra?: string
	color?: 'red' | 'blue' | 'green'
	[x: string]: any
}) => {
	const { extra, color, id, ...rest } = props

	return (
		<input
			id={id}
			type="checkbox"
			className={cn(styles.checkbox, extra)}
			name="weekly"
			{...rest}
		/>
	)
}

Checkbox.displayName = 'Checkbox'

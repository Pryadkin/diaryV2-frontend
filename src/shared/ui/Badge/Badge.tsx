import cn from 'clsx'
import type { CSSProperties, PropsWithChildren } from 'react'

import styles from './Badge.module.scss'

interface IBadge {
	className?: string
	variant?: 'low' | 'medium' | 'high'
	style?: CSSProperties
}

export const Badge = ({
	children,
	className,
	variant,
	style,
}: PropsWithChildren<IBadge>) => {
	//:TODO add variant styles
	console.log('variant', variant)
	return (
		<span className={cn(styles.badge, className)} style={style}>
			{children}
		</span>
	)
}

import Link from 'next/link'

import styles from './MenuItem.module.scss'
import { IMenuItem } from './menu.type'

export const MenuItem = ({ item }: { item: IMenuItem }) => {
	return (
		<Link href={item.link} className={styles.link}>
			<item.icon />
			<span>{item.name}</span>
		</Link>
	)
}

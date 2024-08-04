import styles from './Heading.module.scss'

interface IHeading {
	title: string
}

export const Heading = ({ title }: IHeading) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.line} />
		</div>
	)
}

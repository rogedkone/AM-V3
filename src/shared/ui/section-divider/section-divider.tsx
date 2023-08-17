import styles from './section-divider.module.css';

export const SectionDivider = ({ title }: { title: string }) => {
	return (
		<div className={styles['section-divider']}>
			<div className={styles.text}>
				{title}
			</div>
		</div>
	);
};

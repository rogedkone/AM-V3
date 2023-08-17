import { useTranslation } from 'react-i18next';
import styles from './about.module.css';

export const About = () => {
	const [i18n] = useTranslation('about');
	return (
		<div className={styles.about}>
			{i18n('about')}
		</div>
	);
};

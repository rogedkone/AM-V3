import { useTranslation } from 'react-i18next';
import Avatar from '@shared/assets/png/avatar.png';
import styles from './personal.module.css';

export const Personal = () => {
	const [i18n] = useTranslation('about');
	return (
		<div className={styles.personal}>
			<div className={styles.bio}>{i18n('bio')}</div>
			<div className={styles.job}>{i18n('job')}</div>
			<img alt='Фото моего лица' src={Avatar} className={styles.avatar} />
		</div>
	);
};
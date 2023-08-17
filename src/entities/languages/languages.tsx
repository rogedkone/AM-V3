import { useTranslation } from 'react-i18next';
import { SoftSkill } from '@shared/ui';
import styles from './languages.module.css';

export const Languages = () => {
	const [i18n] = useTranslation('languages');
	const languages = [['Russian', i18n('russian')], ['English', i18n('english')], ['Czech', i18n('czech')]];
	return (
		<div className={styles.languages}>
			{languages.map(([lang, desc], idx) => <SoftSkill key={idx + '-' + lang} first={lang} second={desc} />)}
		</div>
	);
};

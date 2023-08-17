import { useTranslation } from 'react-i18next';
import styles from './navigation.module.css';

export const Navigation = () => {
	const [i18next] = useTranslation('navigation');
	return (
		<div className={styles.navigation}>
			<a href='#skills'>{i18next('skills')}</a>
			<a href='#hobbies'>{i18next('hobbies')}</a>
			<a href='#softskills'>{i18next('softskills')}</a>
			<a href='#interests'>{i18next('interests')}</a>
			<a href='#education'>{i18next('education')}</a>
			<a href='#experience'>{i18next('experience')}</a>
			<a href='#languages'>{i18next('languages')}</a>
			<a href='#contacts'>{i18next('contacts')}</a>
		</div>
	);
};

import { useTranslation } from 'react-i18next';
import { SoftSkill } from '@shared/ui';
import styles from './soft-skills.module.css';

export const SoftSkills = () => {
	const [i18n] = useTranslation('softskills');
	const softskills = [[i18n('think'), i18n('later')], [i18n('understand'), i18n('find')], [i18n('ideal'), i18n('enemy')],
		[i18n('read'), i18n('speed')], [i18n('dont'), i18n('asq')], [i18n('not'), i18n('accur')], [i18n('bad'), i18n('lie')], [i18n('disput'), i18n('true')]];
	return (
		<div className={styles['soft-skills']}>
			{softskills.map(([first, second], idx) => <SoftSkill key={idx + '-' + first} first={first}
																																																								second={second} />)}
		</div>
	);
};

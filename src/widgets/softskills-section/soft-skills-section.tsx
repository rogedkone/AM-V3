import { useTranslation } from 'react-i18next';
import { SoftSkills } from '@entities';
import { section } from '@shared/styles';
import { SectionDivider } from '@shared/ui';

export const SoftSkillsSection = () => {
	const [i18n] = useTranslation('navigation');
	return (
		<div className={section.section}>
			<a id='softskills' />
			<SectionDivider title={i18n('softskills')} />
			<SoftSkills />
		</div>
	);
};

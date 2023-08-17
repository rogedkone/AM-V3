import { useTranslation } from 'react-i18next';
import { Skills } from '@features';
import { section } from '@shared/styles';
import { SectionDivider } from '@shared/ui';

export const SkillsSection = () => {
	const [i18n] = useTranslation('navigation');
	return (
		<div className={section.section}>
			<a id='skills' />
			<SectionDivider title={i18n('skills')} />
			<Skills />
		</div>
	);
};

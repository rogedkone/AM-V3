import { useTranslation } from 'react-i18next';
import { Experience } from '@features';
import { section } from '@shared/styles';
import { SectionDivider } from '@shared/ui';

export const ExperienceSection = () => {
	const [i18n] = useTranslation('navigation');
	return (
		<div className={section.section}>
			<a id='experience' />
			<SectionDivider title={i18n('experience')} />
			<Experience />
		</div>
	);
};

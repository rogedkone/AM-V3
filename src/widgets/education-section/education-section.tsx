import { useTranslation } from 'react-i18next';
import { Education } from '@features';
import { section } from '@shared/styles';
import { SectionDivider } from '@shared/ui';

export const EducationSection = () => {
	const [i18n] = useTranslation('navigation');
	return (
		<div className={section.section}>
			<a id='education' />
			<SectionDivider title={i18n('education')} />
			<Education />
		</div>
	);
};

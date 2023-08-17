import { useTranslation } from 'react-i18next';
import { Interests } from '@features';
import { section } from '@shared/styles';
import { SectionDivider } from '@shared/ui';

export const InterestsSection = () => {
	const [i18n] = useTranslation('navigation');
	return (
		<div className={section.section}>
			<a id='interests' />
			<SectionDivider title={i18n('interests')} />
			<Interests />
		</div>
	);
};

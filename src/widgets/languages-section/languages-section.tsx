import { useTranslation } from 'react-i18next';
import { Languages } from '@entities';
import { section } from '@shared/styles';
import { SectionDivider } from '@shared/ui';

export const LanguagesSection = () => {
	const [i18n] = useTranslation('navigation');
	return (
		<div className={section.section}>
			<a id='languages' />
			<SectionDivider title={i18n('languages')} />
			<Languages />
		</div>
	);
};

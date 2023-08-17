import { useTranslation } from 'react-i18next';
import { Hobbies } from '@features';
import { section } from '@shared/styles';
import { SectionDivider } from '@shared/ui';

export const HobbiesSection = () => {
	const [i18n] = useTranslation('navigation');
	return (
		<div className={section.section}>
			<a id='hobbies' />
			<SectionDivider title={i18n('hobbies')} />
			<Hobbies />
		</div>
	);
};

import { useTranslation } from 'react-i18next';
import { Contacts } from '@features';
import { section } from '@shared/styles';
import { SectionDivider } from '@shared/ui';

export const ContactsSection = () => {
	const [i18n] = useTranslation('navigation');
	return (
		<div className={section.section}>
			<a id='contacts' />
			<SectionDivider title={i18n('contacts')} />
			<Contacts />
		</div>
	);
};

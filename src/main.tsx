import i18next from 'i18next';
import ReactDOM from 'react-dom/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { china, en, india, ru } from '@locales';
import App from '@app';

document.body.classList.add(
	'theme',
	window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
);

i18next
	.use(initReactI18next)
	.init({
		resources: {
			en,
			ru,
			china,
			india
		},
		lng: 'ru',
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false
		}
	});

console.log(ru);

i18next.languages = ['en', 'ru', 'china', 'india'];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<I18nextProvider i18n={i18next}>
		<App />
	</I18nextProvider>
);

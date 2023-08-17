import { changeLanguage } from 'i18next';
import { ReactComponent as Report } from '@shared/assets/svg/controls/bug.svg';
import { ReactComponent as China } from '@shared/assets/svg/controls/china.svg';
import { ReactComponent as ColorizedOff } from '@shared/assets/svg/controls/colorized-off.svg';
import { ReactComponent as ColorizedOn } from '@shared/assets/svg/controls/colorized-on.svg';
import { ReactComponent as Eng } from '@shared/assets/svg/controls/eng.svg';
import { ReactComponent as India } from '@shared/assets/svg/controls/indian.svg';
import { ReactComponent as Moon } from '@shared/assets/svg/controls/moon.svg';
import { ReactComponent as Rus } from '@shared/assets/svg/controls/rus.svg';
import { ReactComponent as Sun } from '@shared/assets/svg/controls/sun.svg';
import { changeTheme, getStore, updateStore } from '@shared/store';
import styles from './controls.module.css';

export const Controls = () => {
	const { theme, colorized } = getStore('app').useState();
	return (
		<div className={styles.controls}>
			<Rus onClick={() => changeLanguage('ru')} />
			<Eng onClick={() => changeLanguage('en')} />
			<India onClick={() => changeLanguage('india')} />
			<China onClick={() => changeLanguage('china')} />
			{theme === 'dark' ? <Sun onClick={() => changeTheme()} /> : <Moon onClick={() => changeTheme()} />}
			{colorized ? <ColorizedOff onClick={() => updateStore('app', { colorized: !colorized })} /> :
				<ColorizedOn onClick={() => updateStore('app', { colorized: !colorized })} />}
			<Report />
		</div>
	);
};

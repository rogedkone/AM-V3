import { useTranslation } from 'react-i18next';
import styles from './education.module.css';

export const Education = () => {
	const [i18n] = useTranslation('education');
	return (
		<div className={styles.education}>
			<table>
				<thead>
				<tr className={styles.active}>
					<th>{i18n('start')}</th>
					<th>{i18n('end')}</th>
					<th>{i18n('place')}</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>2013.09</td>
					<td>&nbsp;2016.09</td>
					<td>{i18n('mytischy')}&nbsp;</td>
				</tr>
				<tr className={styles.active}>
					<td>&nbsp;2021.01</td>
					<td>&nbsp;2021.07</td>
					<td>{i18n('stepik')}&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;2021.09</td>
					<td>&nbsp;2022.04</td>
					<td>&nbsp;{i18n('javascript')}</td>
				</tr>
				<tr className={styles.active}>
					<td>&nbsp;2022.05</td>
					<td>&nbsp;2022.10</td>
					<td>&nbsp;{i18n('hexlet')}</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
};

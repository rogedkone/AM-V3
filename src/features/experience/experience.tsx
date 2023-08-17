import { useTranslation } from 'react-i18next';
import styles from './experience.module.css';

export const Experience = () => {
	const [i18n] = useTranslation('experience');
	return (
		<div className={styles.experience}>
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
					<td>&nbsp;2016.10</td>
					<td>2017.10</td>
					<td>{i18n('gaster')}</td>
				</tr>
				<tr className={styles.active}>
					<td><span>2018.01</span></td>
					<td><span>2018.10</span><br /></td>
					<td><span>{i18n('call')}</span><br /></td>
				</tr>
				<tr>
					<td>&nbsp;2019.01<br /></td>
					<td>&nbsp;2020.03</td>
					<td><span>{i18n('delivery')}&nbsp;</span><br /></td>
				</tr>
				<tr className={styles.active}>
					<td>&nbsp;2023.02</td>
					<td><span>&nbsp;-</span>&nbsp;</td>
					<td>&nbsp;{i18n('abt')}<span>&nbsp;</span></td>
				</tr>
				</tbody>
			</table>
		</div>
	);
};

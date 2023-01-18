import { ThemeSwitcher } from 'components/ThemeSwitcher';
import s from './Header.module.scss';

export const Header = () => {
	
	return (
		<header className={s.header}>
			<p className={s.logo}>DevFinder</p>
			<ThemeSwitcher />
		</header>
	);
};

import { useEffect, useState } from 'react';
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import s from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
	const [isDark, setDark] = useState(false);
	const themeText = isDark ? 'Light' : 'Dark';
	const ThemeIcon = isDark ? SunIcon : MoonIcon;
	
	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
	}, [isDark]);
	
	return (
		<div className={s.switcher} onClick={() => setDark(!isDark)}>
			<span>{themeText}</span>
			<ThemeIcon className={s.icon} />
		</div>
	);
};

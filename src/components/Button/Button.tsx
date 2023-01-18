import React from 'react';
import s from './Button.module.scss';

interface ButtonProps {
	children: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
	
	return (
		<button className={s.button} onClick={onClick}>
			{children}
		</button>
	);
};

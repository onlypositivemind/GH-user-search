import React from 'react';
import { Button } from 'components/Button';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import s from './Search.module.scss';

interface SearchProps {
	hasError: boolean;
	onSubmit: (text: string) => void;
}

type FormFields = {
	username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
	
	const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
		e.preventDefault();
		const text = e.currentTarget.username.value;
		
		if (text.trim()) {
			onSubmit(text);
			e.currentTarget.reset();
		}
	};
	
	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div className={s.search}>
				<label htmlFor="search" className={s.label}>
					<SearchIcon />
				</label>
				<input
					type="text"
					className={s.textField}
					id="search"
					name="username"
					placeholder="Search GitHub username..."
				/>
				{hasError && <div className={s.error}>No result</div>}
				<Button>Search</Button>
			</div>
		</form>
	);
};

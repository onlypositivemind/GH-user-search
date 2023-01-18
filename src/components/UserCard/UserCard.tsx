import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';
import { LocalGithubUser } from 'types';
import s from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser {
}

export const UserCard = (props: UserCardProps) => {
	
	return (
		<div className={s.userCard}>
			<img src={props.avatar} alt={props.login} className={s.avatar} />
			<UserTitle
				login={props.login}
				name={props.name}
				created={props.created}
			/>
			<p className={`${s.bio}${props.bio ? '' : ` ${s.empty}`}`}>
				{props.bio || 'This profile has no bio'}
			</p>
			<UserStat
				repos={props.repos}
				following={props.following}
				followers={props.followers}
			/>
			<UserInfo
				blog={props.blog}
				location={props.location}
				twitter={props.twitter}
				company={props.company}
			/>
		</div>
	);
};

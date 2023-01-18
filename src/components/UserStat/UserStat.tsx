import s from './UserStat.module.scss';
import { LocalGithubUser } from 'types';

export interface UserStatProps extends Pick<LocalGithubUser,
	'repos' | 'following' | 'followers'> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => {
	
	return (
		<div className={s.userStat}>
			<div className={s.info}>
				<p className={s.infoTitle}>Repos</p>
				<p className={s.infoNumber}>{repos}</p>
			</div>
			<div className={s.info}>
				<p className={s.infoTitle}>Following</p>
				<p className={s.infoNumber}>{following}</p>
			</div>
			<div className={s.info}>
				<p className={s.infoTitle}>Followers</p>
				<p className={s.infoNumber}>{followers}</p>
			</div>
		</div>
	);
};

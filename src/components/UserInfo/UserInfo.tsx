import { InfoItem, InfoItemProps } from 'components/InfoItem';
import { LocalGithubUser } from 'types';
import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';
import s from './UserInfo.module.scss';

interface UserInfoProps extends Pick<LocalGithubUser,
	'blog' | 'company' | 'location' | 'twitter'> {
}

export const UserInfo = ({ blog, location, company, twitter }: UserInfoProps) => {
	const items: InfoItemProps[] = [
		{
			icon: <LocationIcon />,
			text: location,
		},
		{
			icon: <BlogIcon />,
			text: blog,
			isLink: true,
		},
		{
			icon: <TwitterIcon />,
			text: twitter,
		},
		{
			icon: <CompanyIcon />,
			text: company,
		},
	];
	
	return (
		<div className={s.userInfo}>
			{items.map((item, _i) => <InfoItem key={_i} {...item} />)}
		</div>
	);
};

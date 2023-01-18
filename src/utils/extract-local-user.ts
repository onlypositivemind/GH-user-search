import { GithubUser, LocalGithubUser } from '../types';

export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
	id: user.id,
	login: user.login,
	name: user.name,
	blog: user.blog,
	followers: user.followers,
	following: user.following,
	location: user.location,
	bio: user.bio,
	company: user.company,
	avatar: user.avatar_url,
	twitter: user.twitter_username,
	created: user.created_at,
	repos: user.public_repos,
});
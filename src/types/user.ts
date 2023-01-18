export type LocalGithubUser = {
	id: number;
	login: string;
	name: string;
	avatar: string;
	blog: string;
	repos: number;
	followers: number;
	following: number;
	created: string;
	location: string | null;
	bio: string | null;
	twitter: string | null;
	company: string | null;
}

export type GithubUser = {
	id: number;
	login: string;
	name: string;
	avatar_url: string;
	blog: string;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
	location: string | null;
	company: string | null;
	bio: string | null;
	twitter_username: string | null;
}

export type GithubError = {
	message: string;
	documentation_url: string;
}
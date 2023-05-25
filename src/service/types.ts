import { IArticle, IUser } from 'types';

export interface FetchArticlesArg {
	tag?: string;
	author?: string;
	favorited?: string;
	limit?: number;
	offset?: number;
}
export interface FetchArticlesResponseType {
	articles: IArticle[];
	articlesCount: number;
}

export interface FetchArticleByIdResponseType {
	article: IArticle;
}

export interface FetchArticleByIdArgs {
	slug: string;
}

export interface UserResponse {
	user: IUser;
}

export interface UserArgsWithImage {
	image: string;
}
export interface UserArgsWithEmail {
	email: string;
}
export interface UserArgsWithPassword {
	password: string;
}
export interface UserArgsWithUsername {
	username: string;
}
export interface UserArgsWithBio {
	bio: string;
}

export type SignInUserArgs = UserArgsWithEmail & UserArgsWithPassword;
export type SignUpUserArgs = UserArgsWithEmail & UserArgsWithPassword & UserArgsWithEmail;
export type UpdateUserArgs =
	| UserArgsWithEmail
	| UserArgsWithPassword
	| UserArgsWithEmail
	| UserArgsWithImage
	| UserArgsWithBio;

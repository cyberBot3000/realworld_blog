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

export interface ArticleResponseType {
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

export interface ArticleWithDescription {
	description: string;
}
export interface ArticleWithTitle {
	title: string;
}
export interface ArticleWithBody {
	body: string;
}
export interface ArticleWithTagList {
	tagList: string[];
}

export type NewArticleArgs = {
	article: ArticleWithTitle & ArticleWithDescription & ArticleWithBody & ArticleWithTagList;
};
export type UpdateArticleArgs = {
	article: ArticleWithTitle | ArticleWithDescription | ArticleWithBody;
};

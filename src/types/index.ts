export interface IUser {
	email: string;
	token: string;
	username: string;
	bio: string;
	image: string;
}

export interface IArticle {
	slug: string;
	title: string;
	description: string;
	body: string;
	tagList: string[];
	createdAt: string;
	updatedAt: string;
	favorited: true;
	favoritesCount: 0;
	author: {
		username: string;
		bio: string;
		image: string;
		following: true;
	};
}

export interface FormStatusCodeErrorData {
	errors:
		| {
				[where: string]: string;
		  }
		| undefined;
}

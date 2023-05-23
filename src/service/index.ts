import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticle } from 'types';

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

export const realWorldApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api' }),
	endpoints: build => ({
		fetchArticles: build.query<FetchArticlesResponseType, FetchArticlesArg>({
			query: params => ({
				url: '/articles',
				params,
			}),
		}),
		fetchArticleById: build.query<FetchArticleByIdResponseType, FetchArticleByIdArgs>({
			query: ({ slug }) => `/articles/${slug}`,
		}),
	}),
});

export const { useFetchArticlesQuery, useFetchArticleByIdQuery } = realWorldApi;
export const realWorldApiReducer = realWorldApi.reducer;

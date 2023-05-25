import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	FetchArticleByIdArgs,
	FetchArticleByIdResponseType,
	FetchArticlesArg,
	FetchArticlesResponseType,
	SignInUserArgs,
	UserResponse,
} from './types';
import { getCookie, setCookie } from 'utils/helpers';
import { AUTHORIZATION } from 'utils/const';

export const realWorldApi = createApi({
	tagTypes: ['Article', 'User'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://blog.kata.academy/api',
		prepareHeaders(headers) {
			headers.set(AUTHORIZATION, getCookie(AUTHORIZATION));
		},
	}),
	endpoints: build => ({
		fetchArticles: build.query<FetchArticlesResponseType, FetchArticlesArg>({
			query: params => ({
				url: '/articles',
				params,
			}),
			providesTags: result =>
				result
					? [...result.articles.map(({ slug }) => ({ type: 'Article' as const, id: slug })), 'Article']
					: ['Article'],
		}),
		fetchArticleById: build.query<FetchArticleByIdResponseType, FetchArticleByIdArgs>({
			query: ({ slug }) => `/articles/${slug}`,
			providesTags: result =>
				result ? [{ type: 'Article' as const, id: result.article.slug }, 'Article'] : ['Article'],
		}),

		fetchCurrentUser: build.query<UserResponse, undefined>({
			query: () => ({
				url: '/user',
			}),
			providesTags: result => (result ? [{ type: 'User' as const, id: result.user.token }, 'User'] : ['User']),
		}),
		sendSignIn: build.mutation<UserResponse, SignInUserArgs>({
			query: args => ({
				url: '/users/login',
				body: { user: args },
				method: 'POST',
			}),
			transformResponse(baseQueryReturnValue: UserResponse) {
				setCookie(AUTHORIZATION, `Bearer ${baseQueryReturnValue.user.token}`, {
					expires: 3600,
				});
				return baseQueryReturnValue;
			},
			invalidatesTags: ['User'],
		}),
	}),
});

export const { useFetchArticlesQuery, useFetchArticleByIdQuery, useFetchCurrentUserQuery, useSendSignInMutation } =
	realWorldApi;
export const realWorldApiReducer = realWorldApi.reducer;

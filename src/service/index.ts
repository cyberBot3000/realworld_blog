import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	FetchArticleByIdArgs,
	ArticleResponseType,
	FetchArticlesArg,
	FetchArticlesResponseType,
	SignInUserArgs,
	SignUpUserArgs,
	UpdateUserArgs,
	UserResponse,
	NewArticleArgs,
} from './types';
import { getCookie, setCookie } from 'utils/helpers';
import { AUTHORIZATION } from 'utils/const';
import { IArticle } from 'types';

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
		fetchArticleById: build.query<ArticleResponseType, FetchArticleByIdArgs>({
			query: ({ slug }) => `/articles/${slug}`,
			providesTags: result =>
				result ? [{ type: 'Article' as const, id: result.article.slug }, 'Article'] : ['Article'],
		}),
		sendNewArticle: build.mutation<ArticleResponseType, NewArticleArgs>({
			query: args => ({
				url: '/articles',
				method: 'POST',
				body: args,
			}),
			invalidatesTags: ['Article'],
		}),

		fetchCurrentUser: build.query<UserResponse, undefined>({
			query: () => ({
				url: '/user',
			}),
			providesTags: result =>
				result ? [{ type: 'User' as const, id: JSON.stringify(result.user) }, 'User'] : ['User'],
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
		sendSignUp: build.mutation<UserResponse, SignUpUserArgs>({
			query: args => ({
				url: '/users',
				body: { user: args },
				method: 'POST',
			}),
		}),
		sendUpdateUser: build.mutation<UserResponse, UpdateUserArgs>({
			query: args => ({
				url: '/user',
				body: { user: args },
				method: 'PUT',
			}),
			invalidatesTags: ['User'],
		}),

		sendFavoriteArticle: build.mutation<IArticle, string>({
			query: args => ({
				url: `/articles/${args}/favorite`,
				method: 'POST',
			}),
			invalidatesTags: ['Article'],
		}),
		sendUnfavoriteArticle: build.mutation<IArticle, string>({
			query: args => ({
				url: `/articles/${args}/favorite`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Article'],
		}),
	}),
});

export const {
	useFetchArticlesQuery,
	useFetchArticleByIdQuery,
	useFetchCurrentUserQuery,
	useSendSignInMutation,
	useSendSignUpMutation,
	useSendUpdateUserMutation,
	useSendFavoriteArticleMutation,
	useSendUnfavoriteArticleMutation,
	useSendNewArticleMutation,
} = realWorldApi;
export const realWorldApiReducer = realWorldApi.reducer;

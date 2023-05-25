import { configureStore } from '@reduxjs/toolkit';
import { realWorldApi } from 'service';
import { articlesListPaginationSlice } from './slices/articlesListPagination';
import { authTokenSlice } from './slices';

export const store = configureStore({
	reducer: {
		[realWorldApi.reducerPath]: realWorldApi.reducer,
		articlesPaginationChanger: articlesListPaginationSlice.reducer,
		authToken: authTokenSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(realWorldApi.middleware),
});

export * from './slices';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

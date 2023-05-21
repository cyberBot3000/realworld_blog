import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IArticlesListPagination {
	currPage: number;
}

const initialState: IArticlesListPagination = {
	currPage: 1,
};

export const articlesListPaginationSlice = createSlice({
	name: 'articlesListPagination',
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<number>) => {
			state.currPage = action.payload;
		},
	},
});

export const { changePage } = articlesListPaginationSlice.actions;

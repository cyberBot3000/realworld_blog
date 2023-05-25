import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthTokenState {
	value: string | null;
}
const initialState: AuthTokenState = {
	value: null,
};

export const authTokenSlice = createSlice({
	initialState,
	name: 'authToken',
	reducers: {
		setToken(state, action: PayloadAction<string>) {
			state.value = action.payload;
		},
		clearToken(state) {
			state.value = null;
		},
	},
});

export const { clearToken, setToken } = authTokenSlice.actions;

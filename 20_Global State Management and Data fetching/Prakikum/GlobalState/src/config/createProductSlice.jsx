import { createSlice } from "@reduxjs/toolkit";

//#region INITIAL STATE
const initialState = {
	createProduct: [
		{
			id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
			name: "John",
			category: "Doe",
			image: "Doe",
			freshness: "Doe",
			description: "Doe",
			price: "Doe",
		},
	],
};
//#endregion

const createProductSlice = createSlice({
	name: "create",
	initialState: initialState,
	reducers: {
		add: (state, action) => {
			return {
				...state,
				createProduct: action.payload,
			};
		},
		delete: (state, action) => {
			return {
				...state,
				createProduct: action.payload,
			};
		},
		edit: (state, action) => {
			return {
				...state,
				createProduct: action.payload,
			};
		},
		update: (state, action) => {
			return {
				...state,
				createProduct: action.payload,
			};
		},
	},
});

export const { actions: createAction, reducer: createReducer } =
	createProductSlice;

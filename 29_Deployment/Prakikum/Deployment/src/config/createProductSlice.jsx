import { createSlice } from "@reduxjs/toolkit";
import {
	retrieveProducts,
	createProducts,
	deleteProducts,
	updateProducts,
} from "./productThunk";

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
	type: "",
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

	//RETRIEVE
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(retrieveProducts.pending, (state, action) => {
	// 			return {
	// 				...state,
	// 				retrieveProductsLoading: true,
	// 				retrieveProductsError: undefined,
	// 			};
	// 		})
	// 		.addCase(retrieveProducts.fulfilled, (state, action) => {
	// 			return {
	// 				...state,
	// 				createProduct: action.payload,
	// 				retrieveProductsLoading: false,
	// 				retrieveProductsError: undefined,
	// 			};
	// 		})
	// 		.addCase(retrieveProducts.rejected, (state, action) => {
	// 			return {
	// 				...state,
	// 				retrieveProductsLoading: false,
	// 				retrieveProductsError: action.payload,
	// 			};
	// 		});
	// },

	//RETRIEVE, CREATE, DELETE
	extraReducers: (builder) => {
		builder.addCase(retrieveProducts.fulfilled, (state, action) => {
			return {
				...state,
				createProduct: action.payload,
				type: action.type,
			};
		});
		builder.addCase(createProducts.fulfilled, (state, action) => {
			return {
				...state,
				createProduct: [action.payload],
				type: action.type,
			};
		});
		builder.addCase(deleteProducts.fulfilled, (state, action) => {
			return {
				...state,
				createProduct: [action.payload],
				type: action.type,
			};
		});
		builder.addCase(updateProducts.fulfilled, (state, action) => {
			return {
				...state,
				createProduct: [action.payload],
				type: action.type,
			};
		});
		// builder.addCase(updateProducts.fulfilled, (state, action) => {
		// 	return {
		// 		...state,
		// 		createProduct: [action.payload],
		// 		type: action.type,
		// 	};
		// });
	},
});

export const { actions: createAction } = createProductSlice;
// export const { actions: createAction, reducer: createReducer } =
// 	createProductSlice;

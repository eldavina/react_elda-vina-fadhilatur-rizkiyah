import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const retrieveProducts = createAsyncThunk(
	"products/retrieveProducts",
	async () => {
		const res = await axios.get(
			"https://642e6b762b883abc640d4322.mockapi.io/products"
		);
		return res.data;
	}
);
export const createProducts = createAsyncThunk(
	"products/createProducts",
	async (param) => {
		const res = await axios.post(
			"https://642e6b762b883abc640d4322.mockapi.io/products",
			param
		);
		return res.data;
	}
);
export const deleteProducts = createAsyncThunk(
	"products/deleteProducts",
	async (no) => {
		const res = await axios.delete(
			`https://642e6b762b883abc640d4322.mockapi.io/products/${no}`,
			no
		);
		return res.data;
	}
);
export const updateProducts = createAsyncThunk(
	"products/updateProducts",
	async (param) => {
		const res = await axios.put(
			`https://642e6b762b883abc640d4322.mockapi.io/products/${param.no}`,
			param
		);
		return res.data;
	}
);

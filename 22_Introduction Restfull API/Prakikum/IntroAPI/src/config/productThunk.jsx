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

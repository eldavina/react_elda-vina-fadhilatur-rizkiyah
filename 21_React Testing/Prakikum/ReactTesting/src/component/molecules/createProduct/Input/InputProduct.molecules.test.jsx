import { describe, expect, vi } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter, Routes } from "react-router-dom";
import DetailProduct from "./views/detailProduct/DetailProduct.view";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/store";
import { Route } from "react-router-dom";

import InputProduct from "./InputProduct.molecules.view";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe("InputProduct.molecules.jsx", () => {
	it("Should render correctly", () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<Provider store={store}>
						<PersistGate loading={null} persistor={persiststore}>
							<InputProduct />
						</PersistGate>
					</Provider>
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

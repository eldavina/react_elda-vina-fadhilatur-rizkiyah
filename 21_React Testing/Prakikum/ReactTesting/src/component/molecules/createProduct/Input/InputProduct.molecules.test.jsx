import { describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "../../../../config/store";

import InputProduct from "./InputProduct.molecules";
import renderer from "react-test-renderer";

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
	it("Product Name Required", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persiststore}>
						<InputProduct />
					</PersistGate>
				</Provider>
			</BrowserRouter>
		);
		const productName = screen.getByTestId("inputname-input");
		const newProductName = "NewProductElda";
		fireEvent.change(productName, { target: { value: newProductName } });
		expect(screen.getByTestId("inputname-input").value).toBe(newProductName);
		const productNameDisplay = screen.getByTestId("inputname-input");
		expect(productNameDisplay).toBeInTheDocument();
	});
	it("Product Name Must Not Contain Symbol", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persiststore}>
						<InputProduct />
					</PersistGate>
				</Provider>
			</BrowserRouter>
		);
		const productName = screen.getByTestId("inputname-input");
		fireEvent.change(productName, { target: { value: "@/#{}" } });
		const btn = screen.getByTestId("btnSubmit");
		fireEvent.submit(btn);
		expect(screen.getByTestId("inputname-error").textContent).toBe(
			"Name must have up to 5 characters, must not exceed 25 characters, and must not contain symbol."
		);
	});
	it("Product Name Must Not Exceed 25 Characters", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persiststore}>
						<InputProduct />
					</PersistGate>
				</Provider>
			</BrowserRouter>
		);
		const productName = screen.getByTestId("inputname-input");
		const btn = screen.getByTestId("btnSubmit");
		fireEvent.change(productName, {
			target: { value: "Elda Vina Fadhilatur Rizkiyah" },
		});
		fireEvent.submit(btn);
		expect(screen.getByTestId("inputname-error").textContent).toBe(
			"Name must have up to 5 characters, must not exceed 25 characters, and must not contain symbol."
		);
	});
});

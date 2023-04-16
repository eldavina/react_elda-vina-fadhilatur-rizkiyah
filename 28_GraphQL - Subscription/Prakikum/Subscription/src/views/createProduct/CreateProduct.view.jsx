import React, { useState, useEffect } from "react";
import Header from "../../component/molecules/createProduct/Header/Header.molecules";
import InputProduct from "../../component/molecules/createProduct/Input/InputProduct.molecules";
import ListItem from "../../component/molecules/createProduct/ListItem/ListItem.molecules";
import Navbar from "../../component/organism/Navbar.organism";
import Article from "../../Article";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createAction } from "../../config/CreateProductSlice";
import {
	useCreateProductSelector,
	useTypeProductSelector,
} from "../../config/createProductSelector";
import { useDispatch } from "react-redux";
import {
	createProducts,
	deleteProducts,
	retrieveProducts,
} from "../../config/productThunk";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {
	deleteProductsByIdMutation,
	getProductsQuery,
} from "../../config/apollo/products";

const CreateProduct = () => {
	const { data: products } = useSubscription(getProductsQuery);
	// console.log("hasusra product", products);

	const [deleteProducts, { loading: loadingdelete }] = useMutation(
		deleteProductsByIdMutation
	);

	// const createProduct = useCreateProductSelector();

	// const dispatch = useDispatch();

	const handleDelete = (no) => {
		if (window.confirm("Do you want to delete this data?")) {
			// dispatch(deleteProducts(no));
			deleteProducts({
				variables: {
					no,
				},
			});
		}
	};

	const type = useTypeProductSelector();
	// useEffect(() => {
	// 	dispatch(retrieveProducts());
	// 	if (type === "deleteProducts.fulfilled") {
	// 		dispatch(retrieveProducts());
	// 	}
	// }, [type]);

	const [indonesia, setIndonesia] = useState(false);
	const handleLang = () => {
		setIndonesia(!indonesia);
	};

	// useEffect(() => {
	// 	alert("Welcome");
	// }, []);

	// useEffect(() => {
	// 	dispatch(retrieveProducts());
	// }, []);
	return (
		<div>
			<main>
				<div>
					<Navbar />
					<Header article={Article} language={indonesia} changeLang={handleLang} />
					<div className="container">
						<div className="row">
							<InputProduct />

							<ListItem
								createproducts={products}
								// handleDelete={handleDelete}
								handleDelete={handleDelete}
								// handleEdit={handleEdit}
								no="ID"
								name="Product Name"
								category="Product Category"
								image="Product Image"
								freshness="Product Freshness"
								description="Additional Description"
								price="Product Price"
								action="Action"
							/>
							{/* </div> */}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default CreateProduct;

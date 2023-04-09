import React, { useState, useEffect } from "react";
import Header from "../../component/molecules/createProduct/Header/Header.molecules";
import InputProduct from "../../component/molecules/createProduct/Input/InputProduct.molecules";
import ListItem from "../../component/molecules/createProduct/ListItem/ListItem.molecules";
import Navbar from "../../component/organism/Navbar.organism";
import Article from "../../Article";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createAction } from "../../config/CreateProductSlice";
import useCreateProductSelector from "../../config/createProductSelector";
import { useDispatch } from "react-redux";
import { retrieveProducts } from "../../config/productThunk";

const CreateProduct = () => {
	// const [createproducts, setCreateProducts] = useState([]);

	const createProduct = useCreateProductSelector();

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		if (window.confirm("Apakah kalian ingin menghapus")) {
			const newCreateProducts = createProduct.filter(
				(createproduct) => createproduct.id !== id
			);
			console.log("delete", newCreateProducts);
			dispatch(createAction.delete([...newCreateProducts]));
		}
	};

	const handleEdit = (id) => {
		const EditProducts = createProduct.filter(
			(createproduct) => createproduct.id !== id
		);
		EditProducts.splice(id, 1, ...createProduct);
		// useFormik(initialValues);
		dispatch(createAction.update([...EditProducts]));
		// dispatch(createAction.edit([...createProduct]));
	};

	const [indonesia, setIndonesia] = useState(false);
	const handleLang = () => {
		setIndonesia(!indonesia);
	};

	useEffect(() => {
		alert("Welcome");
	}, []);

	const handleCreate = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		dispatch(retrieveProducts());
	}, []);
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
								createproducts={createProduct}
								// handleDelete={handleDelete}
								handleDelete={handleDelete}
								handleEdit={handleEdit}
								no="No"
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

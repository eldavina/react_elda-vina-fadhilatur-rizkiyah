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

const CreateProduct = () => {
	// const [createproducts, setCreateProducts] = useState([]);

	const regex = /[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
	// /^[^\s][\w\s]*[^\s\W]$/;

	const schema = Yup.object().shape({
		name: Yup.string()
			.required()
			.matches(regex, "Product Name Must Not Contain Symbol")
			.min(5, "Product Name Too Short!")
			.max(25, "Product Name Must Not Exceed 25 Characters"),
		category: Yup.string().required(),
		image: Yup.string().required(),
		freshness: Yup.string().required(),
		description: Yup.string(),
		price: Yup.number().positive().integer().required(),
	});

	const createProduct = useCreateProductSelector();

	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			// id: "",
			name: "",
			category: "",
			image: "",
			freshness: "",
			description: "",
			price: "",
		},
		validationSchema: schema,
		onSubmit: (values) => {
			console.log("cek values", values);
			dispatch(
				createAction.add([...createProduct, { ...values, id: crypto.randomUUID() }])
			);
		},
		// onEdit: (values) => {
		// 	const editProduk = createProduct.slice();
		// 	editProduk.splice(id, 1, { id: createProduct.id, ...values });
		// },
		// onEdit: (values) => {
		// 	handleEdit(values);
		// },
		// onEdit: (values) => {
		// 	dispatch(createAction.edit([...createProduct, { ...values }]));
		// },
	});

	console.log("error", formik.errors);

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

	return (
		<div>
			<main>
				<div>
					<Navbar />
					<Header article={Article} language={indonesia} changeLang={handleLang} />
					<div className="container">
						<div className="row">
							<InputProduct formik={formik} />

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

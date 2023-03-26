import React, { useState, useEffect } from "react";
import Header from "../../component/molecules/createProduct/Header/Header.molecules";
import InputProduct from "../../component/molecules/createProduct/Input/InputProduct.molecules";
import ListItem from "../../component/molecules/createProduct/ListItem/ListItem.molecules";
import ListHeader from "../../component/molecules/createProduct/ListHeader/ListHeader.molecules";
import Navbar from "../../component/organism/Navbar.organism";
import Article from "../../Article";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateProduct = () => {
	const [createproducts, setCreateProducts] = useState([]);

	const regex = /^[^\s][\w\s]*[^\s\W]$/;

	const schema = Yup.object().shape({
		name: Yup.string()
			.required()
			.matches(regex, "Product Name Must Not Contain Symbol"),
		category: Yup.string().required(),
		image: Yup.string().required(),
		freshness: Yup.string().required(),
		description: Yup.string(),
		price: Yup.number().positive().integer().required(),
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			category: "A",
			image: "",
			freshness: "",
			description: "",
			price: "",
		},
		validationSchema: schema,
		onSubmit: (values) => {
			console.log("cek values", values);
			setCreateProducts([
				...createproducts,
				{ ...values, id: Math.floor(Math.random() * 10000000000) },
			]);
		},
	});

	console.log("error", formik.errors);

	// const handleNumber = (e) => {
	//   e.preventDefault();
	//   console.log(Math.floor(Math.random() * 100));
	// };

	// const handleName = (e) => {
	//   if (e.target.value.length > 10){
	//     alert ("Product Name tidak boleh melebihi 10 karakter");
	//     e.target.value = "";
	//   }
	// };

	// const [name, setName] = useState("");
	// const [category, setCategory] = useState();
	// const [freshness, setFreshness] = useState();
	// const [price, setPrice] = useState();
	// // const [detailproducts, setDetailProducts] = useState([]);
	// const [formCreate, setFormCreate] = useState({
	//   id:"",
	//   name:"",
	//   category:"",
	//   freshness:"",
	//   price:"",
	// });

	// const handleChangeCreateProduct = (e) => {
	//   setName(e.target.value);
	//   setCategory(e.target.value);
	//   setFreshness(e.target.value);
	//   setPrice(e.target.value);
	// };

	// const handlePrice = (e) => setPrice(e.target.value);

	// const handleSubmit = (e) => {
	//   e.preventDefault();
	//   setCreateProducts([...createproducts, {...formCreate, id: Math.floor(Math.random() * 10000000000)}]);
	//   setFormCreate({
	//     id:"",
	//     name:"",
	//     category:"",
	//     image:"",
	//     freshness:"",
	//     description:"",
	//     price:"",
	//   })
	// };
	const handleDelete = (id) => {
		if (window.confirm("Apakah kalian ingin menghapus")) {
			const newCreateProducts = createproducts.filter((item) => item.id !== id);
			setCreateProducts(newCreateProducts);
		}
	};

	const [indonesia, setIndonesia] = useState(false);
	const handleLang = () => {
		setIndonesia(!indonesia);
	};

	useEffect(() => {
		alert("Welcome");
	}, []);

	// useEffect(()=> {
	//   localStorage.setItem("createproducts", JSON.stringify(createproducts))
	// },[createproducts]);

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
							{/* <Header article={Article} language={indonesia} changeLang={handleLang} /> */}
							{/* <Header/> */}

							<InputProduct
								formik={formik}

								//  name={name}
								//  category={category}
								//  freshness={freshness}
								//  price={price}
								//  handlePrice={handlePrice}
								//  handleSubmit={handleSubmit}
								//  formCreate={formCreate}
								//  setName={(e) =>
								//   setFormCreate({...formCreate, name:e.target.value})}
								//   setCategory={(e) =>
								//     setFormCreate({...formCreate, category:e.target.value})}
								//     setFreshness={(e) =>
								//       setFormCreate({...formCreate, freshness:e.target.value})}
								//       setPrice={(e) =>
								//         setFormCreate({...formCreate, price:e.target.value})}
								// number={handleNumber} nameProduct={handleInputName}
							/>

							{/* <ListHeader
								no="No"
								name="Product Name"
								category="Product Category"
								freshness="Product Freshness"
								price="Product Price"
								action="Action"
							/> */}

							<ListItem
								createproducts={createproducts}
								handleDelete={handleDelete}
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

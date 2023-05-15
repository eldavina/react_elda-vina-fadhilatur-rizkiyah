import { useFormik, Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
// import { Col } from "react-bootstrap";
// import { DatePicker } from "react-bootstrap-datetimepicker";
// import "react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css";

const AdminEditList = () => {
	// const { id } = useParams();
	// const createproducts = useCreateProductSelector();
	// const createproduct = createproducts.find(
	// 	(productData) => productData.id == id
	// );
	// console.log("anu", createproduct);
	// const regex = /[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
	// const dispatch = useDispatch();
	// const navigate = useNavigate();

	// const schema = Yup.object().shape({
	// 	name: Yup.string()
	// 		.required()
	// 		.matches(regex, "Product Name Must Not Contain Symbol")
	// 		.min(5, "Product Name Too Short!")
	// 		.max(25, "Product Name Must Not Exceed 25 Characters"),
	// 	category: Yup.string().required(),
	// 	image: Yup.string().required(),
	// 	freshness: Yup.string().required(),
	// 	description: Yup.string(),
	// 	price: Yup.number().positive().integer().required(),
	// });
	// const formik = useFormik({
	// 	initialValues: {
	// 		id: createproduct.id,
	// 		name: createproduct.name,
	// 		category: createproduct.category,
	// 		image: createproduct.image,
	// 		freshness: createproduct.freshness,
	// 		description: createproduct.description,
	// 		price: createproduct.price,
	// 	},
	// 	validationSchema: schema,
	// 	onSubmit: (values) => {
	// 		console.log("cek values", values);
	// 		dispatch(updateProducts({ no: createproduct.no, ...values }));
	// 		if (
	// 			window.confirm(
	// 				"Your data successfully edited. The page will redirect to the create product page"
	// 			)
	// 		) {
	// 			navigate("/createproduct");
	// 		}
	// 	},
	// });
	const [dateLahir, setDateLahir] = useState("");
	const [dateWafat, setDateWafat] = useState("");

	const handleDateLahirChange = (e) => {
		setDateLahir(e.target.value);
	};
	const handleDateWafatChange = (e) => {
		setDateWafat(e.target.value);
	};

	return (
		<div>
			<div className="edit-tipe">
				<div className="container">
					<div className="row">
						<div className="row justify-content-center">
							<div className="col-5">
								<div className="col">
									<form
										className="justify-content-end needs-validation"
										id="form"
										noValidate=""
										// onSubmit={formik.handleSubmit}
									>
										<h2 style={{ fontSize: 23 }}>Edit Data Ahli Kubur</h2>
										<div className="mb-3 col-8">
											<label htmlFor="tipeno" className="form-label">
												ID Data{""}
											</label>
											<input
												className={`form-control`}
												type="text"
												id="iddata"
												name="iddata"
												readOnly
												disabled
												// defaultValue={list.id}
												// value={list.id}
											/>
										</div>
										{/* Nama */}
										<div className="mb-3 col-6">
											<label htmlFor="nama" className="form-label">
												Nama Ahli Kubur{" "}
											</label>
											{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
											<input
												// className={`form-control ${formik.errors.name && `is-invalid`}`}
												className={`form-control `}
												type="text"
												id="nama"
												name="nama"
												required=""
												// defaultValue={list.nama}
												// value={formik.values.nama}
												// onChange={formik.handleChange}
												// onEdit={handleEdit}
												// onChange={nameProduct}
												data-testid="inputname-input"
											/>
											<div className="invalid-feedback" data-testid="inputname-error">
												Name must not contain symbol.
											</div>
										</div>
										{/* Tipe/No */}
										<div className="mb-3 col-5">
											<label htmlFor="tipeno" className="form-label">
												Tipe/No{" "}
											</label>
											<br />
											{/* <div>{formik.errors.category && alert(`Product Category Harus Di Isi!`)}</div> */}
											<select
												// className={`form-select ${formik.errors.tipeno && `is-invalid`}`}
												className={`form-select`}
												aria-label="tipeno"
												placeholder="Choose...."
												id="tipeno"
												name="tipeno"
												// required=""
												// defaultValue={list.tipeno}
												// value={formik.values.tipeno}
												// onChange={formik.handleChange}

												// onEdit={handleEdit}
											>
												<option value={""}>Tipe/No ....</option>
												<option value={"A-1"}>A-1</option>
												<option value={"A-2"}>A-2</option>
												<option value={"A-3"}>A-3</option>
												<option value={"A-4"}>A-4</option>
												<option value={"A-5"}>A-5</option>
												<option value={"A-6"}>A-6</option>
												<option value={"A-7"}>A-7</option>
												<option value={"A-8"}>A-8</option>
												<option value={"A-9"}>A-9</option>
												<option value={"A-10"}>A-10</option>
												<option value={"A-11"}>A-11</option>
												<option value={"A-12"}>A-12</option>
												<option value={"A-13"}>A-13</option>
												<option value={"A-14"}>A-14</option>
												<option value={"A-15"}>A-15</option>
												<option value={"A-16"}>A-16</option>
												<option value={"A-17"}>A-17</option>
												<option value={"A-18"}>A-18</option>
												<option value={"A-19"}>A-19</option>
												<option value={"A-20"}>A-20</option>
												<option value={"B-1a"}>B-1a</option>
												<option value={"B-1b"}>B-1b</option>
												<option value={"B-2a"}>B-2a</option>
												<option value={"B-2b"}>B-2b</option>
												<option value={"B-3a"}>B-3a</option>
												<option value={"B-3b"}>B-3b</option>
												<option value={"B-4a"}>B-4a</option>
												<option value={"B-4b"}>B-4b</option>
												<option value={"B-5a"}>B-5a</option>
												<option value={"B-5b"}>B-5b</option>
												<option value={"B-6a"}>B-6a</option>
												<option value={"B-6b"}>B-6b</option>
												<option value={"B-7a"}>B-7a</option>
												<option value={"B-7b"}>B-7b</option>
												<option value={"B-8a"}>B-8a</option>
												<option value={"B-8b"}>B-8b</option>
												<option value={"B-9a"}>B-9a</option>
												<option value={"B-9b"}>B-9b</option>
												<option value={"B-10a"}>B-10a</option>
												<option value={"B-10b"}>B-10b</option>
												<option value={"B-11a"}>B-111</option>
												<option value={"B-11b"}>B-11b</option>
												<option value={"B-12a"}>B-12a</option>
												<option value={"B-12b"}>B-12b</option>
												<option value={"C-1a"}>C-1a</option>
												<option value={"C-1b"}>C-1b</option>
												<option value={"C-1c"}>C-1c</option>
												<option value={"C-1d"}>C-1d</option>
												<option value={"C-2a"}>C-2a</option>
												<option value={"C-2b"}>C-2b</option>
												<option value={"C-2c"}>C-2c</option>
												<option value={"C-2d"}>C-2d</option>
												<option value={"C-3a"}>C-3a</option>
												<option value={"C-3b"}>C-3b</option>
												<option value={"C-3c"}>C-3c</option>
												<option value={"C-3d"}>C-3d</option>
												<option value={"C-4a"}>C-4a</option>
												<option value={"C-4b"}>C-4b</option>
												<option value={"C-4c"}>C-4c</option>
												<option value={"C-4d"}>C-4d</option>
												<option value={"C-5a"}>C-5a</option>
												<option value={"C-5b"}>C-5b</option>
												<option value={"C-5c"}>C-5c</option>
												<option value={"C-5d"}>C-5d</option>
												<option value={"C-6a"}>C-6a</option>
												<option value={"C-6b"}>C-6b</option>
												<option value={"C-6c"}>C-6c</option>
												<option value={"C-6d"}>C-6d</option>
												<option value={"C-7a"}>C-7a</option>
												<option value={"C-7b"}>C-7b</option>
												<option value={"C-7c"}>C-7c</option>
												<option value={"C-7d"}>C-7d</option>
												<option value={"C-8a"}>C-8a</option>
												<option value={"C-8b"}>C-8b</option>
												<option value={"C-8c"}>C-8c</option>
												<option value={"C-8d"}>C-8d</option>
											</select>
											{/* <div className="invalid-feedback">{formik.errors.category}</div> */}
										</div>

										{/* Lahir */}
										<div className="mb-3 col-6">
											<label htmlFor="lahir" className="form-label">
												Lahir{" "}
											</label>
											<br />
											<input
												className={`form-control `}
												type="date"
												id="lahir-input"
												name="lahir"
												value={dateLahir}
												onChange={handleDateLahirChange}
											/>
										</div>
										{/* Wafat */}
										<div className="mb-3 col-6">
											<label htmlFor="wafat" className="form-label">
												Wafat{" "}
											</label>
											<br />
											<input
												className={`form-control `}
												type="date"
												id="wafat-input"
												name="wafat"
												value={dateWafat}
												onChange={handleDateWafatChange}
											/>
										</div>
										{/* Submit */}
										<div className="col-auto">
											<button
												type="submit"
												// onClick={formik.handleSubmit}
												className="btn btn-primary w-100"
												data-bs-toggle="modal"
												data-bs-target="#submit"
												id="button-add"
												data-testid="btnSubmit">
												Edit
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminEditList;

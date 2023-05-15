import React from "react";

export const AdminEditTipe = () => {
	// const regex = /[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
	// const dispatch = useDispatch();

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
	// 		// id: "",
	// 		name: "",
	// 		category: "",
	// 		image: "",
	// 		freshness: "",
	// 		description: "",
	// 		price: "",
	// 	},
	// 	validationSchema: schema,
	// 	onSubmit: (values) => {
	// 		console.log("cek values", values);
	// 		dispatch(createProducts({ ...values, id: crypto.randomUUID() }));
	// 		if (window.confirm("Data created successfully"));
	// 	},
	// });
	return (
		<div className="input-tipe">
			<div className="container">
				<div className="row">
					<div className="row justify-content-center">
						<div className="col-5">
							<div className="col">
								<form
									className="justify-content-end needs-validation"
									id="form"
									noValidate=""
									// onSubmit={handleSubmit}
								>
									<h2 style={{ fontSize: 23 }}>Add Tipe Pemakaman</h2>
									{/* Tipe Pemakaman */}
									<div className="mb-3 col-6">
										<label htmlFor="tipe" className="form-label">
											Tipe Pemakaman{" "}
										</label>
										{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
										<input
											// className={`form-control ${formik.errors.name && `is-invalid`}`}
											className={`form-control`}
											type="text"
											id="tipe"
											name="tipe"
											required=""
											// value={formik.values.name}
											// onChange={formik.handleChange}
											// onEdit={formik.values.name}
											// onEdit={handleEdit}
											// onChange={nameProduct}
											data-testid="inputtipe-input"
										/>
										<div className="invalid-feedback" data-testid="inputtipe-error">
											Name must have up to 5 characters, must not exceed 25 characters, and
											must not contain symbol.
										</div>
									</div>

									{/* Luas */}
									<div className="mb-3 col-6">
										<label htmlFor="luas" className="form-label">
											Luas m2
										</label>
										{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
										<input
											// className={`form-control ${formik.errors.name && `is-invalid`}`}
											className={`form-control`}
											type="text"
											id="luas"
											name="luas"
											required=""
											// value={formik.values.name}
											// onChange={formik.handleChange}
											// onEdit={formik.values.name}
											// onEdit={handleEdit}
											// onChange={nameProduct}
											data-testid="inputluas-input"
										/>
										<div className="invalid-feedback" data-testid="inputluas-error">
											Name must have up to 5 characters, must not exceed 25 characters, and
											must not contain symbol.
										</div>
									</div>

									{/* Kapasitas */}
									<div className="mb-3 col-5">
										<label htmlFor="kapasitas" className="form-label">
											Kapasitas{" "}
										</label>
										{/* <div>{formik.errors.category && alert(`Product Category Harus Di Isi!`)}</div> */}
										<select
											// className={`form-select ${formik.errors.name && `is-invalid`}`}
											className={`form-select`}
											aria-label="kapasitas"
											placeholder="Choose...."
											id="kapasitas"
											name="kapasitas"
											required=""
											// value={formik.values.kapasitas}
											// onChange={formik.handleChange}
											// onEdit={formik.values.kapasitas}
											// onEdit={handleEdit}
										>
											<option value={""}>Choose....</option>
											<option value={"1"}>1</option>
											<option value={"2"}>2</option>
											<option value={"3"}>3</option>
											<option value={"4"}>4</option>
											<option value={"5"}>5</option>
											<option value={"6"}>6</option>
											<option value={"7"}>7</option>
											<option value={"8"}>8</option>
										</select>
										{/* <div className="invalid-feedback">{formik.errors.kapasitas}</div> */}
									</div>

									{/* Gambar Pemakaman */}
									<div className="mb-3">
										<label htmlFor="image" className="form-label">
											Gambar Pemakaman
										</label>
										<div className="col-6">
											<input
												// className={`form-control btn btn-primary ${
												// 	formik.errors.image && `is-invalid`
												// }`}
												className={`form-control`}
												type="file"
												id="image"
												name="image"
												required=""
												// value={formik.values.image}
												// onChange={formik.handleChange}
												// onEdit={formik.values.image}
												// onEdit={handleEdit}
											/>
										</div>
										{/* <div className="invalid-feedback">{formik.errors.image}</div> */}
									</div>

									{/* Deskripsi*/}
									<label htmlFor="description" className="form-label">
										Deskripsi
									</label>
									<div className="input-group">
										<textarea
											className="form-control"
											aria-label="With textarea"
											id="description"
											name="description"
											required=""
											// value={formik.values.description}
											// onChange={formik.handleChange}
											// onEdit={formik.values.description}
											// onEdit={handleEdit}
										/>
										<div className="invalid-feedback">Please fill out this field</div>
									</div>

									{/* Harga */}
									<label htmlFor="productprice" className="form-label">
										Harga{" "}
									</label>
									{/* <div>{formik.errors.price && alert(`Product Price Harus Di Isi!`)}</div> */}
									<div className="mb-3">
										<div className="col-2">
											<input
												type="number"
												// className={`form-control ${formik.errors.price && `is-invalid`}`}
												className={`form-control`}
												placeholder="Rp. ......."
												id="price"
												name="price"
												required=""
												// value={formik.values.price}
												// onChange={formik.handleChange}
												// onEdit={formik.values.price}
												// onEdit={handleEdit}
											/>
										</div>
										{/* <div className="invalid-feedback">{formik.errors.price}</div> */}
									</div>
									{/* Submit */}
									<div className="col-auto">
										<button
											type="submit"
											// onClick={formik.handleSubmit}
											className="btn btn-info w-100"
											data-bs-toggle="modal"
											data-bs-target="#submit"
											id="button-add"
											data-testid="btnSubmit"
											//value={onSubmit}
											// onClick={onSubmit}
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

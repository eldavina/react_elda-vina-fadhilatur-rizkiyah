import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { authAction } from "../../../config/authSlice";

export const SignIn = () => {
	const userUsername = "admin";
	const userPassword = "admin";

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const schema = Yup.object().shape({
		username: Yup.string()
			.required()
			.min(4, "Password should more than 4 characters"),
		password: Yup.string()
			.required()
			.min(4, "Password should more than 4 characters"),
	});
	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: schema,
		onSubmit: (values) => {
			console.log("cek values", values.username);
			if (values.username === userUsername && values.password === userPassword) {
				dispatch(authAction.auth(true));
				return navigate("/");
				// navigate("/");
				// return <Navigate to="/" />;
			} else {
				alert("Username or password incorrect");
			}
			formik.resetForm();
		},
	});
	return (
		<div>
			<section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-8 col-lg-6 col-xl-5">
							<div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
								<div className="card-body p-5 text-center">
									<h3 className="mb-5">Sign in</h3>
									<form>
										<div className="form-outline mb-4">
											<input
												type="text"
												id="username"
												className="form-control form-control-lg"
												placeholder="Username"
												name="username"
												required=""
												value={formik.values.username}
												onChange={formik.handleChange}
											/>
										</div>
										<div className="form-outline mb-4">
											<input
												type="password"
												id="password"
												className="form-control form-control-lg"
												placeholder="Password"
												name="password"
												required=""
												value={formik.values.password}
												onChange={formik.handleChange}
											/>
										</div>

										<button
											className="btn btn-primary btn-lg btn-block"
											type="submit"
											onClick={formik.handleSubmit}>
											Login
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

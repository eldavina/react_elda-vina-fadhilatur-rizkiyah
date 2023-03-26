import React from "react";
import "../ContactUs/ContactUs.style.css";

const ContactUs = ({ formik }) => {
	return (
		<div>
			<div id="contact-us">
				<div className="row align-items-center" style={{ padding: "5%" }}>
					<div className="col-md-6" id="contact-us-text">
						<div className="d-flex justify-content-center">
							<div>
								<h1> Contact Us </h1>
								<p>
									{" "}
									Ingin terhubung lebih dekat dengan kami? <br />
									Silahkan isi formulir di samping dengan benar, ya! <br />
									Check email secara berkala. Kami akan segera menghubungimu!
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="d-flex justify-content-center">
							<form style={{ lineHeight: 1 }} id="form">
								<div className="d-flex justify-content-center">
									<div>
										<label htmlFor="first-name" className="form-label">
											Nama Depan
										</label>
										<input
											className={`form-control ${formik.errors.fname && `is-invalid`}`}
											type="text"
											name="fname"
											id="fname"
											required=""
											value={formik.values.fname}
											onChange={formik.handleChange}
										/>
										<div className="invalid-feedback">Masukkan Nama dengan Benar!</div>
									</div>

									<div>
										<label htmlFor="last-name" className="form-label">
											Nama Belakang{" "}
										</label>
										<input
											className="form-control"
											type="text"
											name="lname"
											id="lname"
											required=""
											value={formik.values.lname}
											onChange={formik.handleChange}
										/>
									</div>
								</div>
								<div style={{ marginTop: 10 }}>
									<label htmlFor="email" className="form-label">
										Email
									</label>
									<input
										className={`form-control ${formik.errors.email && `is-invalid`}`}
										type="email"
										id="email"
										name="email"
										required=""
										value={formik.values.email}
										onChange={formik.handleChange}
									/>
									<div className="invalid-feedback">Masukkan Email dengan Benar!</div>
								</div>
								<div style={{ marginTop: 10 }}>
									<label htmlFor="bantuan" className="form-label">
										Apa yang kamu butuhkan?
									</label>
									<textarea
										className={`form-control ${formik.errors.help && `is-invalid`}`}
										id="help"
										name="help"
										required=""
										value={formik.values.help}
										onChange={formik.handleChange}
									/>
									<div className="invalid-feedback">
										Masukkan Kendala Kamu dengan Benar!
									</div>
								</div>
								<br />
								<div>
									<button
										type="submit"
										onClick={formik.handleSubmit}
										className="btn btn-primary"
										id="btn-submit">
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;

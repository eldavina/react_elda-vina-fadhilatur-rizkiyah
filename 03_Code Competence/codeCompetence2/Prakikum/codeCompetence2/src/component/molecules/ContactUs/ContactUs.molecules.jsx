import React from "react";

const ContactUs = () => {
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
							<form style={{ lineHeight: 30 }} id="form">
								<div className="d-flex justify-content-center">
									<div>
										<label htmlFor="first-name" className="form-label">
											Nama Depan
										</label>
										<input
											type="text"
											name="first name"
											id="first-name"
											className="form-control"
											required=""
										/>
									</div>
									<div>
										<label htmlFor="last-name" className="form-label">
											Nama Belakang{" "}
										</label>
										<input
											type="text"
											name="last name"
											id="last-name"
											className="form-control"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="email" className="form-label">
										Email
									</label>
									<input type="email" className="form-control" id="email" required="" />
								</div>
								<div>
									<label htmlFor="bantuan" className="form-label">
										Apa yang kamu butuhkan?
									</label>
									<textarea className="form-control" id="bantuan" defaultValue={""} />
								</div>
								<br />
								<div>
									<button type="submit" className="btn btn-primary" id="btn-submit">
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

import React from "react";
import aboutus from "../../../assets/aboutus.png";

const AboutUs = () => {
	return (
		<div>
			<div id="about-us">
				<div className="row align-items-center">
					<div className="col-md-6" id="contact-us-image" style={{ marginLeft: 0 }}>
						<div className="d-flex justify-content-left">
							<div>
								<img src={aboutus} style={{ height: 600 }}></img>
							</div>
						</div>
					</div>
					<div className="col-md-6" id="contact-us-text">
						<div className="d-flex">
							<div>
								<h1> About Us </h1>
								<p>
									{" "}
									Kami adalah website yang akan mengajak kamu untuk mengelilingi luar
									angkasa. <br />
									Ada banyak benda langit menakjubkan yang menunggu untuk kamu lihat!{" "}
									<br />
									Pada website ini, kamu bisa mempelajari planet, asteroid, bintang, dan
									lain sebagainya.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;

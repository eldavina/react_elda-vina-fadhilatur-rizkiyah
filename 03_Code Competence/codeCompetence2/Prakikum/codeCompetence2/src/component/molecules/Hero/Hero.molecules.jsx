import React from "react";

const Hero = () => {
	return (
		<div>
			<div id="banner">
				<div className="banner">
					<img src="homebanner.jpg" className="d-block w-100" alt="..." />
					<div className="position-absolute top-50 w-50" id="banner-text">
						<h1 className="fw-bold fs-1 lh-lg">Go Space</h1>
						<p className="fw-light">
							Mari menjelahi luar angkasa bersama kami! <br />
							Ada banyak benda luar angkasa menarik yang dapat kita pelajari. <br />
						</p>
						<a href="#">
							<button className="btn btn-primary" style={{ color: "white" }}>
								Mulai Menjelajah
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

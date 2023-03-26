import React from "react";

const Navbar = () => {
	return (
		<div>
			<header>
				{/* <div class="container"> */}
				{/* <nav class="navbar navbar-expand-lg bg-light" id="navbar"> */}
				<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
					<div className="container-fluid">
						<div className="nav-items-left">
							<a className="navbar-brand" href="#">
								<img src="logo.png" width={30} />
								<span className="go-space">Go Space</span>
							</a>
						</div>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div id="nav-items-right">
							<a href="#" className="text-decoration-none mx-1">
								Home
							</a>
							<a href="#" className="btn btn-primary mx-1">
								Mulai Menjelajah
							</a>
							<a href="#" className="text-decoration-none mx-1">
								About
							</a>
							<a href="#contact-us" className="text-decoration-none mx-1">
								Contact Us
							</a>
						</div>
					</div>
				</nav>
				{/* </div> */}
			</header>
		</div>
	);
};

export default Navbar;

import React from "react";
import Navbar from "../../component/organism/Navbar.organism";
import "./LandingPage.style.css";
import Banner from "../../component/molecules/landingPage/Banner/Banner.molecules";
import Join from "../../component/molecules/landingPage/Join/Join.molecules";
import Footer from "../../component/molecules/landingPage/Footer/Footer.molecules";
import List from "../../component/molecules/landingPage/List/List.molecules";

const LandingPage = () => {
	return (
		<div>
			{/* <title>Landing Page</title> */}
			<Navbar />
			<Banner />
			<Join />
			<List />
			<Footer />
		</div>
	);
};

export default LandingPage;

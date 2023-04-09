import React from "react";
import "../Footer/Footer.style.css";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="footer-atas">
					<div className="arsha">
						<p id="arsha">ARSHA</p>
						<p className="adam">
							A108 Adam Street <br />
							&nbsp; New York, NY 535022 <br />
							&nbsp; United States <br />
							<br />
							<b>Phone: </b> +1 5589 55488 55 <br />
							<b>Email: </b> info@example.com
						</p>
					</div>
					<div className="menu-footer">
						<p id="judul-footer">Usefull Links</p>
						<a href="#"> Home </a> <br />
						<a href="#"> About Us </a> <br />
						<a href="#"> Services </a> <br />
						<a href="#"> Terms of service </a> <br />
						<a href="#"> Privacy policy </a> <br />
					</div>
					<div className="menu-footer">
						<p id="judul-footer">Our Services</p>
						<a href="#"> Web Design </a> <br />
						<a href="#"> Web Development </a> <br />
						<a href="#"> Product Management </a> <br />
						<a href="#"> Marketing </a> <br />
						<a href="#"> Graphic Design </a> <br />
					</div>
					<div className="our-social">
						<p id="judul-footer">Our Social Network</p>
						<p id="cras-fermentum">
							{" "}
							Cras fermentum odio eu feugiat lide par <br />
							naso tierra videa magna derita valies
						</p>
						<div className="social-account">
							<a href="#" />
							<a href="#" />
							<a href="#" />
							<a href="#" />
							<a href="#" />
						</div>
					</div>
				</div>
				<div className="footer-bawah">
					<div id="copyright">
						© Copyright <span>Arsha</span>. All Rights Reserved
					</div>
					<div id="designed">
						Designed by <span>BootstrapMade</span>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

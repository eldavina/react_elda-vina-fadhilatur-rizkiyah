import React from "react";
import "../Footer/Footer.style.css";
import fb from "../../../assets/fb.png";
import ig from "../../../assets/ig.png";
import twt from "../../../assets/twt.png";
import yt from "../../../assets/yt.png";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="footer-atas">
					<div className="go-space">
						<p id="go-space">GO SPACE</p>
						<p className="address">
							Blitar, Indonesia <br />
							{/* &nbsp; New York, NY 535022 <br/>
                  &nbsp; United States <br/><br/> */}
							<b>Phone: </b> +62 88-1334-xxxx <br />
							<b>Email: </b> gospace@info.com
						</p>
					</div>
					<div className="menu-footer">
						<p id="judul-footer">Benda Langit</p>
						<a href="#"> Matahari </a> <br />
						<a href="#"> Planet Kecil </a> <br />
						<a href="#"> Asteroid </a> <br />
						<a href="#"> Komet </a> <br />
						<a href="#"> Bulan </a> <br />
						<a href="#"> Satelit </a> <br />
						<a href="#"> Meteor </a> <br />
					</div>
					<div className="menu-footer">
						<p id="judul-footer">Planet</p>
						<a href="#"> Merkurius </a> <br />
						<a href="#"> Venus </a> <br />
						<a href="#"> Bumi </a> <br />
						<a href="#"> Mars </a> <br />
						<a href="#"> Jupiter </a> <br />
						<a href="#"> Saturnus </a> <br />
						<a href="#"> Uranus </a> <br />
						<a href="#"> Neptunus </a> <br />
					</div>
					<div className="our-social">
						<p id="judul-footer">Kami Juga Ada di Sini</p>
						<p id="keterangan-medsos">
							Yuk menjelajah bersama kami <br />
							di platform lain
						</p>
						<div className="social-account">
							<a href="#">
								<img src={fb} href="#" />
							</a>
							<a href="#">
								<img src={ig} href="#" />
							</a>
							<a href="#">
								<img src={twt} href="#" />
							</a>
							<a href="#">
								<img src={yt} href="#" />
							</a>
						</div>
					</div>
				</div>
				<div className="footer-bawah">
					<div id="copyright">
						© Copyright <span>Go Space</span>. All Rights Reserved
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

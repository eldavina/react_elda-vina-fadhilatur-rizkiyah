import React from 'react'
import Navbar from '../../component/organism/Navbar.organism';
import "./LandingPage.style.css"
import heroimg from '../landingPage/heroimg.png'

const LandingPage = () => {
  return (
    <div>
        {/* <title>Landing Page</title> */}
        <Navbar />
        <main>
          <div className="container-banner">
            <div className="banner-kiri">
              <h1 className="better-solution">
                Better Solution For Your <br /> Business
              </h1>
              <p className="we-are">
                We are team of talented designers making websites with
                <br />
                Bootstrap
                <br />
              </p>
              <br />
              <div className="banner-kiri-button">
                <div>
                  <a href="#" className="get-started">
                    Get Started
                  </a>
                </div>
                <div>
                  <a href="#" className="watch-video">
                    Watch Video
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <div className="banner-kanan">
              <img src={heroimg} id="gambar-banner-kanan" />
              <br />
            </div>
          </div>
          <div className="container-join">
            <h3 className="join-our">Join Our Newsletter</h3>
            <br />
            <p className="tamem">
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna
            </p>
            <br />
            <div className="formwrap">
              <form>
                <input type="text" id="input" name="#" required="" />
                <button type="submit" id="subscribe">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </main>
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
  )
}

export default LandingPage;

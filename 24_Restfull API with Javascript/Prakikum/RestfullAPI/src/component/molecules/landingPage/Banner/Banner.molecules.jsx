import React from 'react'
import heroimg from '../../../../assets/LandingPage/heroimg.png'
import "../Banner/Banner.style.css"

const Banner = () => {
  return (
    <div>
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
    </div>
  )
}

export default Banner;

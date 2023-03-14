import React from 'react'
function Navbar() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Simple Header
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div id="nav-items-right">
              <a href="#" className="btn btn-primary mx-1">
                Home
              </a>
              <a href="#" className="text-decoration-none mx-1">
                Features
              </a>
              <a href="#" className="text-decoration-none mx-1">
                Pricing
              </a>
              <a href="#" className="text-decoration-none mx-1">
                FAQs
              </a>
              <a href="#" className="text-decoration-none mx-1">
                About
              </a>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Navbar;
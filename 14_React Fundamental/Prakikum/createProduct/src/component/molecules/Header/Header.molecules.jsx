import React from 'react'

function Header(){
  return (
    <div className="col-lg-8 mx-auto p-5">
      <div className="text-center">
        <img
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          width="71.53px"
        />
        <h1 className="text-center" style={{ fontSize: 31 }}>
          {" "}
          Create Product
        </h1>
        <span className="text-center text-dark">
          Below is an example form built entirely with Bootstrap's form
          controls. Each required form group has a validation state that can
          be triggered by attempting to submit the form without completing
          it. <br />
        </span>
      </div>
    </div>
  )
}

export default Header
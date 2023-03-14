import React from 'react'

function Header({language, article, changeLang}){

  return (
    <div className="col-lg-8 mx-auto p-5">
      <div className="text-center">
        <img
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          width="71.53px"
          
        />
        <h1 className="text-center" style={{ fontSize: 31 }}>
          {language ? article.title.id : article.title.en}
        </h1>
        <span className="text-center text-dark">
          {language ? article.description.id : article.description.en}
        </span>
        <br/>
        {/* <button className="btn btn-info" onClick={changeLang} style={{margin:20}}>
          {language ? "Ganti Bahasa" : "Change Language"}
        </button> */}
      </div>
    </div>
  )
}

export default Header;
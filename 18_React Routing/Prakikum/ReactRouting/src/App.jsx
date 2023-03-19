import React, { useEffect, useState } from 'react'
import CreateProduct from './views/createProduct/CreateProduct.view'
import Header from './component/molecules/Header/Header.molecules';
// import InputProduct from './component/molecules/Input/InputProduct.molecules';
import Navbar from './component/organism/Navbar.organism';
// import ListItem from './component/molecules/ListItem/ListItem.molecules';
import LandingPage from './views/landingPage/LandingPage.view';
import Article from './Article'
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import DetailProduct from './views/detailProduct/DetailProduct.view';

const App = () =>{


  return  (
    <div>
      
      {/* <CreateProduct />; */}
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/detailproduct/:id" element={<DetailProduct/>} />
			</Routes>
		</BrowserRouter>
    </div>
  )
}

export default App;

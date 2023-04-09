import React, { useEffect, useState } from "react";
import CreateProduct from "./views/createProduct/CreateProduct.view";
import Header from "./component/molecules/createProduct/Header/Header.molecules";
// import InputProduct from './component/molecules/Input/InputProduct.molecules';
import Navbar from "./component/organism/Navbar.organism";
// import ListItem from './component/molecules/ListItem/ListItem.molecules';
import LandingPage from "./views/landingPage/LandingPage.view";
import Article from "./Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/store";
import EditProduct from "./component/molecules/createProduct/EditProduct/EditProduct";

const App = () => {
	return (
		<div>
			{/* <CreateProduct />; */}
			<Provider store={store}>
				<PersistGate loading={null} persistor={persiststore}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<LandingPage />} />
							<Route path="/createproduct" element={<CreateProduct />} />
							<Route path="/editproduct/:id" element={<EditProduct />} />
						</Routes>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</div>
	);
};

export default App;

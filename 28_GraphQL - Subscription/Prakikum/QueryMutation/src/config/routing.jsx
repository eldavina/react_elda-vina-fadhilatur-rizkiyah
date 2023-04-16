import React from "react";
import EditProduct from "../component/molecules/createProduct/EditProduct/EditProduct";
import { SignIn } from "../component/molecules/loginPage/SignIn.molecule";
import CreateProduct from "../views/createProduct/CreateProduct.view";
import LandingPage from "../views/landingPage/LandingPage.view";

export const Routing = [
	{
		path: "/",
		element: <LandingPage />,
		isPrivate: true,
	},
	{
		path: "/createproduct",
		element: <CreateProduct />,
		isPrivate: true,
	},
	{
		path: "/editproduct/:id",
		element: <EditProduct />,
		isPrivate: true,
	},
	{
		path: "/signin",
		element: <SignIn />,
		isPrivate: false,
	},
];

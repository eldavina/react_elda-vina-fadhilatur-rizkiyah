import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../component/organism/PrivateRoute.organisn";
import { useAuthSelector } from "./authSelector";
import { Routing } from "./routing";

const RootRouting = () => {
	const isAuth = useAuthSelector();
	return (
		<BrowserRouter>
			<Routes>
				{Routing.map((route, idx) => {
					if (route.isPrivate) {
						return (
							<Route
								key={idx}
								path={route.path}
								element={
									<PrivateRoute authentication={isAuth}> {route.element}</PrivateRoute>
								}
							/>
						);
					}
					return <Route key={idx} path={route.path} element={route.element} />;
				})}
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouting;

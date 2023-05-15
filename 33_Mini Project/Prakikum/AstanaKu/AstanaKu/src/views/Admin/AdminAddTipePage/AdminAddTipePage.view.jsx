import React from "react";
import { AdminAddTipe } from "../../../component/molecules/Admin/AdminAddTipe/AdminAddTipe.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";

export const AdminAddTipePage = () => {
	return (
		<div>
			<AdminNavbar />
			<AdminAddTipe />
		</div>
	);
};

import React from "react";
import AdminList from "../../../component/molecules/Admin/AdminList/AdminList.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";

export const AdminListPage = () => {
	return (
		<div>
			<AdminNavbar />
			<AdminList />
		</div>
	);
};

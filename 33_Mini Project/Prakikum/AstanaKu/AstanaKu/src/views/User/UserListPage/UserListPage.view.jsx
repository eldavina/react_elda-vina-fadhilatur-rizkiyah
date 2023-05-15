import React from "react";
import UserList from "../../../component/molecules/User/UserList/UserList.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";

export const UserListPage = () => {
	return (
		<div>
			<UserNavbar />
			<UserList />
		</div>
	);
};

import React from "react";
import { Link } from "react-router-dom";

// const ListItem = ({ createproducts, handleDelete,  }) => {
const UserList = ({ lists, handleDelete }) => {
	return (
		<div className="pt-3">
			<h2 style={{ textAlign: "center" }}>List Ahli Kubur</h2>
			<div className="justify-content-center">
				<div className="input-group">
					<div className="form-outline w-25" style={{ alignItems: "center" }}>
						<input type="search" id="form1" className="form-control" />
					</div>
					<button type="button" className="btn btn-info">
						{/* <i className="fas fa-search" /> */}
						<label className="form-label" htmlFor="form1">
							Search
						</label>
					</button>
				</div>
			</div>
			<div className="table-responsive p-5">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th className="header_nama">Nama Ahli Kubur</th>
							<th className="header_tipeno">Tipe/No</th>
							<th className="header_lahir">Lahir</th>
							<th className="header_wafat">Wafat</th>
							{/* <th className="header_action">Action</th> */}
						</tr>
					</thead>

					{/* <tbody>
						{lists.map((list, idx) => (
							<tr key={idx}>
							<td className="list_nama">{list.nama}</td>
							<td className="list_tipeno">{list.tipeno}</td>
								<td className="list_lahir">{list.lahir}</td>
								<td className="list_wafat">{list.wafat}</td> */}
					{/* <td className="list_action">
									<button
										className="btn btn-danger"
										// onClick={() => handleDelete(createproduct.id)}>
										onClick={() => handleDelete(createproduct.no)}>
										Delete
									</button>
									<button className="btn btn-warning">
										<Link className="text-white" to={`/editproduct/${createproduct.id}`}>
											Edit
										</Link>
									</button>
								</td> */}
					{/* </tr>
						))}
					</tbody> */}
					{/* <tbody id="datatable"></tbody> */}
				</table>
				{/* Akhir Tabel Data */}
			</div>
		</div>
	);
};

export default UserList;

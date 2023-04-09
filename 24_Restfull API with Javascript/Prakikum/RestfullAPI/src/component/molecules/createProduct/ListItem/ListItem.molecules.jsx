import React from "react";
import InputProduct from "../Input/InputProduct.molecules";
import ListHeader from "../ListHeader/ListHeader.molecules";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const ListItem = ({ createproducts, handleDelete, handleEdit }) => {
	return (
		<div>
			<hr />
			<h2 style={{ textAlign: "center" }}>List Product</h2>
			<div className="table-responsive">
				<table className="table table-striped">
					<tr>
						<th className="header_number">No</th>
						<th className="header_name">Product Name</th>
						<th className="header_category">Product Category</th>
						<th className="header_category">Product Image</th>
						<th className="header_freshness">Product Freshness</th>
						<th className="header_freshness">Additional Description</th>
						<th className="header_price">Product Price</th>
						<th className="header_action">Action</th>
					</tr>

					<tbody>
						{createproducts.map((createproduct, idx) => (
							<tr key={idx}>
								<td className="list_no">
									<Link to={`/detailproduct/${createproduct.id}`}>
										{createproduct.id}
									</Link>
								</td>
								<td className="list_name">{createproduct.name}</td>
								<td className="list_category">{createproduct.category}</td>
								<td className="list_category">{createproduct.image}</td>
								<td className="list_freshness">{createproduct.freshness}</td>
								<td className="list_freshness">{createproduct.description}</td>
								<td className="list_price">{createproduct.price}</td>
								<td className="list_action">
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
								</td>
							</tr>
						))}
					</tbody>
					{/* <tbody id="datatable"></tbody> */}
				</table>
				{/* Akhir Tabel Data */}
			</div>
		</div>
	);
};

export default ListItem;

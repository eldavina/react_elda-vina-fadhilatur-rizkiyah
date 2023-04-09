import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../component/organism/Navbar.organism";
import ListItem from "../../component/molecules/createProduct/ListItem/ListItem.molecules";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DetailProduct = () => {
	const { id } = useParams();
	const [createproducts, setCreateProducts] = useState([]);

	useEffect(() => {
		setCreateProducts(JSON.parse(localStorage.getItem("createproducts")));
	}, []);

	return (
		<div>
			<Navbar />
			<div className="detail-product" style={{ margin: 0, padding: 0 }}>
				<div className="container">
					<div className="row">
						<div className="row justify-content-center">
							<div className="col-5">
								<div className="col">
									<h1 className="text-center" style={{ fontSize: 31 }}>
										{/* {language ? article.title.id : article.title.en} */}
										Detail Product
									</h1>
									{createproducts.map((createproduct) => (
										<div className="container text-center " key={createproduct.id}>
											{createproduct.id == id && (
												<div className="row justify-content-md-center">
													<div className="row">
														<div className="col p-3 mb-2 bg-info-subtle text-emphasis-info">
															No
														</div>
														<div className="col">{createproduct.id}</div>
													</div>
													<div className="row">
														<div className="col p-3 mb-2 bg-info-subtle text-emphasis-info">
															Product Name
														</div>
														<div className="col">{createproduct.name}</div>
													</div>
													<div className="row">
														<div className="col p-3 mb-2 bg-info-subtle text-emphasis-info">
															Product Category
														</div>
														<div className="col">{createproduct.category}</div>
													</div>
													<div className="row">
														<div className="col p-3 mb-2 bg-info-subtle text-emphasis-info">
															Product Freshness
														</div>
														<div className="col">{createproduct.freshness}</div>
													</div>
													<div className="row">
														<div className="col p-3 mb-2 bg-info-subtle text-emphasis-info">
															Product Price
														</div>
														<div className="col">{createproduct.price}</div>
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailProduct;

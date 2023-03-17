import React, { useState } from 'react'

const InputProduct = ({formCreate, name, A,B,C, brandnew, secondhand, refurbished, price,  onSubmit, onChange, handleSubmit,
setName, setCategory, setFreshness, setPrice}) => {
  // const[category, setCategory]=useState("");
  // const handleChange = (e) => {
  //   setCategory(e.target.value)
  
  return (
    <div className="inpuut-product">
        <div className="container">
          <div className="row">
            <div className="row justify-content-center">
              <div className="col-5">
                <div className="col">
                  
                  <form
                    className="justify-content-end needs-validation"
                    id="form"
                    noValidate=""
                    onSubmit={handleSubmit}
                  >
                    <h2 style={{ fontSize: 23 }}>Detail Product</h2>
                    {/* Product Name */}
                    <div className="mb-3 col-6">
                      <label htmlFor="name" className="form-label">
                        Product Name{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        required=""
                        value={formCreate.name}
                        onChange={setName}
                        // onChange={nameProduct}
                        
                      />
                      <div className="invalid-feedback">
                        Please fill out this field
                      </div>
                    </div>

                    {/* Product Category */}
                    <div className="mb-3 col-5">
                      <label htmlFor="category" className="form-label">
                        Product Category{" "}
                      </label>
                      <select
                        className="form-select"
                        aria-label="productcategory"
                        aria-placeholder="Choose...."
                        id="category"
                        required=""
                        value={formCreate.category}
                        onChange={setCategory}
                      >
                        <option value={A}>A</option>
                        <option value={B}>B</option>
                        <option value={C}>C</option>
                      </select>
                      <div className="invalid-feedback">
                        Please choose a Product Category
                      </div>
                    </div>
                
                    {/* Product Freshness */}
                    <div className="mb-3">
                      <label htmlFor="freshness" className="form-label">
                        Product Freshness{" "}
                      </label>
                      <div id="form-check has-validation">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="freshness"
                            id="freshness"
                            defaultValue="Brand New"
                            checked={formCreate.freshness === "Brand New"}
                            onChange={setFreshness}
                          
                          />
                          <label
                            className="form-check-label"
                            htmlFor="brandnew"
                          >
                            Brand New
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="freshness"
                            id="freshness"
                            checked={formCreate.freshness === "Second Hand"}
                            onChange={setFreshness}
                            defaultValue="Second Hand"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="secondhand"
                          >
                            Second Hand
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="freshness"
                            id="freshness"
                            checked={formCreate.freshness === "Refurbished"}
                            onChange={setFreshness}
                            defaultValue="Refurbished"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Refurbished"
                          >
                            Refurbished
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Produk Price */}
                    <label htmlFor="productprice" className="form-label">
                      Product Price{" "}
                    </label>
                    <div className="mb-3">
                      <div className="col-2">
                        <input
                          type="number"
                          className="form-control"
                          id="price"
                          placeholder="$ 100"
                          required=""
                          value={formCreate.price}
                          onChange={setPrice}
                        />
                      </div>
                      <div className="invalid-feedback">
                        Please fill out this field
                      </div>
                    </div>
                    {/* Submit */}
                    <div className="col-auto">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#submit"
                        id="button-add"
                        //value={onSubmit}
                        // onClick={onSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default InputProduct;

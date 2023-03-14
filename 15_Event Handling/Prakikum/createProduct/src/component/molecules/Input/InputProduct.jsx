import React from 'react'

function InputProduct({name, nameProduct , A,B,C, image, description, Brand_New, Second_Hand, Refurbished, price,  onSubmit, number}){
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
                        value={name}
                        onChange={nameProduct}
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
                      >
                        <option value={A}>A</option>
                        <option value={B}>B</option>
                        <option value={C}>C</option>
                      </select>
                      <div className="invalid-feedback">
                        Please choose a Product Category
                      </div>
                    </div>
                    {/* Image of Product */}
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        Image of Product
                      </label>
                      <div className="col-6">
                        <input
                          className="form-control btn btn-primary "
                          type="file"
                          id="image"
                          required=""
                          value={image}
                        />
                      </div>
                      <div className="invalid-feedback">
                        Please choose an Image
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
                            value={Brand_New}
                            defaultChecked=""
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
                            value={Second_Hand}
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
                            value={Refurbished}
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
                    {/* Additional Description*/}
                    <label htmlFor="description" className="form-label">
                      Additional Description
                    </label>
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                        id="description"
                        required=""
                        defaultValue={" "}
                        value={description}
                      />
                      <div className="invalid-feedback">
                        Please fill out this field
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
                          value={price}
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
                        value={onSubmit}
                        onClick={number}
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

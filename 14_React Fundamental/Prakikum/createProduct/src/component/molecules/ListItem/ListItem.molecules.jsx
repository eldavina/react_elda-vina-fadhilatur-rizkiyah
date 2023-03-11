import React from 'react'

function ListItem() {
  return (
    <div style={{ padding: 20 }}>
          <hr />
          <h2 style={{ textAlign: "center" }}>List Product</h2>
          {/* Form Search & Delete */}
          <div
            className="d-flex justify-content-center"
            style={{ padding: 20 }}
          >
            <form className="d-flex" role="search" id="form-search">
              <input
                className="form-control"
                type="search"
                placeholder="Search by Product Name"
                aria-label="Search"
                id="search"
              />
              <button className="btn btn-outline-primary" id="button-search">
                Search
              </button>
              <button className="btn btn-danger" id="button-delete">
                Delete
              </button>
            </form>
          </div>
          {/* Akhir Form Search & Delete */}
          {/* Tabel Data */}
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Product Category</th>
                  <th>Image of Product</th>
                  <th>Product Freshness</th>
                  <th>Additional Description</th>
                  <th>Product Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="datatable">{/* Data yang diinput */}</tbody>
            </table>
          </div>
          {/* Akhir Tabel Data */}
        </div>
  )
}

export default ListItem

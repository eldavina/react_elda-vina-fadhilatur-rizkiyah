import React from 'react'
import ListItem from '../ListItem/ListItem.molecules';


const ListHeader = ({no, name, category, freshness, price, action}) => {
  return (
    <div>
        <hr />
        <h2 style={{ textAlign: "center" }}>List Product</h2>
        <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className='header_number'>{no}</th>
                  <th className='header_name'>{name}</th>
                  <th className='header_category'>{category}</th>
                  <th className='header_freshness'>{freshness}</th>
                  <th className='header_price'>{price}</th>
                  <th className='header_action'>{action}</th>
                </tr>
              </thead>
              <tbody>
              
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default ListHeader;

import React from 'react'
import { Navbar } from '../component/organism/Navbar.organism'
import { Header } from '../component/molecules/Header/Header.molecules'
import {InputProduct} from '../component/molecules/Input/InputProduct'
import { ListItem } from '../component/molecules/ListItem/ListItem.molecules'

export const createProduct = () => {
  return (
    <main>
      <div>
        <Navbar/>
    <div className="container">
      <div className="row">
        <Header />
        <InputProduct />
        <ListItem />
      </div>
    </div>
    </div>
  </main>
  )
}

// export default createProduct;

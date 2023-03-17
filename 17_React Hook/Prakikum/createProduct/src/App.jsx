import React, { useEffect, useState } from 'react'
import CreateProduct from './views/CreateProduct.view'
import Header from './component/molecules/Header/Header.molecules';
// import InputProduct from './component/molecules/Input/InputProduct.molecules';
import Navbar from './component/organism/Navbar.organism';
// import ListItem from './component/molecules/ListItem/ListItem.molecules';
import Article from './Article'

function App(){
  useEffect(() => {
    alert('Welcome')
  },[]);

  
  const [indonesia, setIndonesia] = useState(false);
  const handleLang = () => {
    setIndonesia(!indonesia);
  };

  return  (
    <div>
      <Navbar />
      <Header article={Article} language={indonesia} changeLang={handleLang} />
      <CreateProduct />;
    </div>
  )
}

export default App;

import React, { useState } from 'react'
import Header from './component/molecules/Header/Header.molecules';
import InputProduct from './component/molecules/Input/InputProduct';
import Navbar from './component/organism/Navbar.organism';
import ListItem from './component/molecules/ListItem/ListItem.molecules';
import Article from './Article';

function App(){
  const handleNumber = (e) => {
    e.preventDefault();
    console.log(Math.floor(Math.random() * 100));
  };

  const [indonesia, setIndonesia] = useState(false);
  const handleLang = () => {
    setIndonesia(!indonesia);
  };

  const handleInputName = (e) => {
    if (e.target.value.length > 10){
      alert ("Product Name tidak boleh melebihi 10 karakter");
      e.target.value = "";
    }
  };
    // const handleSubmit = (e) =>{
    //   e.preventDefault();
    //   if (this.validateValues()){
    //     this.setState({validated : true})
    //   }
    //   else{
    //     this.setState({validated:false})
    //   }
    // };

  return (
  <div>
    <Navbar />
    <Header article={Article} language={indonesia} changeLang={handleLang}/>
    <InputProduct number={handleNumber} nameProduct={handleInputName} />
    <ListItem />
  </div>
  )
}

export default App;

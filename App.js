//import logo from './logo.svg';
import './App.css';
import Car from "./Components/Third";
import { useState, useEffect } from "react";
import vehicleList from "./Components/Vehicle.json";

import Card from './Card';
function App() {

  const [displayCars, setDisplayCars] = useState([]);

  let cars = [];

  function returnlist() {
    for (let i = 0; i < vehicleList.length; i++) {
      cars.push(<Card obj = {vehicleList[i]}/>)
    }

    setDisplayCars(cars);
  }


  return (
    <>
    <img className='wheel' src='wheel.png'></img>
      <div >
        
      <button className='but1' onClick={returnlist}>Display</button>
      </div>
      <div>
      {displayCars}
      </div>
      <div className='cartadd'>
        <h1 id='cadd'>Cart</h1>

      </div>
    </>
    
      
      
  );
}

export default App;

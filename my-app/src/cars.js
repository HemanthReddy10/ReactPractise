import { useState } from "react";
export default function Cars() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button onClick={()=>setCar({...car,color:'blue'})}> set blue color car</button>
      
      </>
    )
  }
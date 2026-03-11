import React, { useState } from "react";

export default function Object(){
const [car,setCar] = useState({
    name:"Swift",
    model:2025,
    color:"Black",
    price:1000000
});

const changedata = () =>{
    setCar(previousdata =>{
return {...previousdata, model:2024,color:"white"}    
    });
}
    return(
        <>
        <p>My car name is {car.name} and its year {car.model}. </p>
        <p>The car color is {car.color} and price {car.price}</p>
        <button onClick={changedata}>Change</button>
        
        </>
    )
}
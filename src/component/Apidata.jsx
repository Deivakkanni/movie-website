import React, { useState } from "react";

export default function Apidata(){

    const [data,setdata] = useState([]);

    const api = async () =>{
   let fetchdata = await fetch("https://jsonplaceholder.typicode.com/todos");
   let apidata = await fetchdata.json();

setdata(apidata);

//console.log(apidata);

    }

    return(
        <>
        <h1>Fetch Api Datas </h1>
        <button onClick={api}>API DATA</button>

        {
            data.map((de,index)=>(
<div>
    
    <h2>{index+1} {de.title}</h2>
</div>
            ))
        }
        
        </>
    )
}
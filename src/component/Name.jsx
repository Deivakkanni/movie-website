import React, { useState } from "react";

export default function Name(){

    const [name,setname] = useState("DEVA")
    const [age,setAge] = useState(26)
    
    function namechan(){
        if(name==="DEVA"){
            setname("PRABA");
            setAge(32);
        } 
        else{
            setname("DEVA");
            setAge(26);
        } 

    }

    return(
        <div>
            <h1>My name is : {name}</h1>
            <p>Age is: {age}</p>
            <button onClick={namechan}>Change name</button>
        </div>
    )
}


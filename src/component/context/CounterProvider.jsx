import React, { useContext, useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({children}) =>{ //its a globaly provide data (counterprovider)

    const[count,setCount]=useState(0)
     const handleadd = () =>{
        setCount(count+1)
     }
    return(
<CounterContext.Provider value={{count,handleadd}}> 
{children}
</CounterContext.Provider>
    )
}
import React, { createContext, useContext } from "react";
import { CounterContext } from "./context/CounterContext";

export default function CompAcontextApi(){
const {count,handleadd}=useContext(CounterContext)
    return(
<div>
    <h1>Count - {count}</h1>
    <button onClick={handleadd}>Add</button>
</div>
    )

}
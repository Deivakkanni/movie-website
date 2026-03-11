import React, { useState } from "react";

function Count(){

const[count,setCount] = useState(1);

function changecountinc(operation){
    if(operation == 'inc') {
        setCount(count+1);
    } else {
        setCount(count-1);
    }
    
    //console.log(3);
    
}
// const[dec,x]= useState(0);
// function changecountdec(){
//     x(dec-1);
// }
    return(
        <>
        <h1>Today class - Count</h1>
        <h2>I want to increase my count : {count}</h2>
        <button onClick={() => changecountinc('inc')}>Increase Count</button>
       {/* <h2>I want to decrease my count : {dec}</h2> */}
        <button onClick={() => changecountinc()}>Decrease Count</button>

        </>
    )
}
export default Count


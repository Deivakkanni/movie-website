import React from "react";
import CompB from "./CompB";

// export default function CompA(props){ // here we can give any name (parameter)
//     return(
//         <div>
//             <h1>Comp A - {props.name} {props.age}</h1>
//         </div>
//     )
// }

// export default function CompA({nm,age,count}){ // the above method is too long so we can destructing the code
//     return(
//         <div>
//             <h1>Comp A - {nm} {age}</h1>

//             <h1>Count - {count} </h1>
//         </div>
//     )
// }

export default function CompA({count, handleadd }) { // for count function
    return (
        <div>
            <h1>Comp A - {count} </h1>
            <button onClick={handleadd}>Add</button>
            {/* <button onClick={() => handleadd("Array Data")}>Add</button>  Can we send data from child to parent? we cant but, we have a simple trick like we can send the funt to paramets. */}
        <CompB count={count} />
        </div>
    )
}
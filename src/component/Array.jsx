import React, { useState } from 'react'

export default function Array() {

    // const [array, setarray] = useState(["Deva", "Velu", "Anjalai", "Prabu", 20]);

    const [arryobj, setarryobj] = useState([
        {
            name:"Deva",
            age:26
        },
        {
            name:"Praba",
            age:20
        },
        {
            name:"Nisha",
            age:12
        }
    ]);

    return (
        <div>
            <h1>Array with map method</h1>
            {/* {
                array.map((ary,index) => (
                    <div>
                        <h2>{index=index+1} {ary}</h2>
                    </div>
                ))
            } */}

            {
                arryobj.map((aob)=>(
<div>
    <h1>Name: {aob.name}</h1>
    <h2>Age: {aob.age}</h2>
</div>
                ))
            }

        </div>
    )
}

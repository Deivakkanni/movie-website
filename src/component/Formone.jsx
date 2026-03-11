import React, { useState } from "react";
export default function Formone() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const handlename = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }
    const handleage = (e) => {
        setAge(e.target.value)
    }
    return (
        <div>
            <form>
                <label>Name:</label>
                <input onChange={handlename} placeholder="Enter your name" /><br /><br />
                <label>Age:</label>
                <input onChange={handleage} placeholder="Enter your age" /><br /><br />
                <button>Submit</button>
                <br />
                <h3>Output</h3>
                Name: {name} <br />
                Age:{age}</form>
        </div>
    )
}
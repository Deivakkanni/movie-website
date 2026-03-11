import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export default function Userefrence() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const handledata = (data) => {
        console.log(data);
    }
    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return (
        <div>
            <form>
                <label>Name:</label>
                <input ref={inputRef} placeholder="Name" />
                <br />
                <label>Age:</label>
                <input placeholder="age" />
                <br />
                
                {/* <button onClick={handleSubmit(handledata)}>Submit</button> */}
            </form>
        </div>
    )
}

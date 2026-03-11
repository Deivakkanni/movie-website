import React, { useEffect } from "react";

export default function UsEffect() {
    const handlefn = () => {
        console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIII");
    }
    useEffect(() => {
        handlefn(); //Mounting stage

        return () => { //UnMounting stage
            console.log("Session out");
        }
    })

    return (
        <h1>Use Effect</h1>
    )
}
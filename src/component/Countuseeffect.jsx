import React, { useEffect, useState } from "react";

export default function Countuseeffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Mounting stage");
        const interval = setInterval(() => setCount(prevCount => prevCount + 1), 1000);

        return () => {
            console.log("UnMounting stage");
            clearInterval(interval);
        }
    }, [])

    return (
        <>
            <h1>Count: {count}</h1>
        </>
    )
}
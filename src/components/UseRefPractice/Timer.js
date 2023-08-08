import React, { useEffect, useRef, useState } from "react";

export default function Timer() {
    const [timer, setTimer] = useState(0)

    const refInterval = useRef()

    useEffect(()=>{
        refInterval.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return ()=>{
            clearInterval(refInterval.current)
        }
    }, [])

    return(
        <div>
            <h2> timer is: {timer} </h2>
            <button onClick={()=> clearInterval(refInterval.current)}>Clear Timer</button>
        </div>
    )
}
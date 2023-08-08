import React, { useMemo, useState } from "react";

export default function MyMemoCounter() {
    const [counterA, setConterA] = useState(0)
    const [counterB, setConterB] = useState(0)

    const incrementA = () => {
        setConterA(counterA + 1)
    }

    const incrementB = () => {
        setConterB(counterB + 2)
    }

    const evenNumber = useMemo((res) =>{
        let i = 0
        while( i < 200000000) i++
        res = counterA % 2 === 0
        return res
    }, [counterA])

    return(
        <div>
            <div>
            <p> Counter A is: {counterA} and it's: { evenNumber ? "even" : "odd"} </p>
            <button onClick={incrementA} >Increment A</button>
            </div>
            <div>
            <p> Counter B is: {counterB} </p>
            <button onClick={incrementB} >Increment B</button>
            </div>
        </div>
    )
}
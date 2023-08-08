import React, {useState, useEffect} from "react";

export default function EffectExample2() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(()=>{
        document.title = `you clicked: ${count} times`
        console.log('useEffect called')
        console.log([count])
    }, [count])

    return (
        <div>
            {count}
            <button onClick={()=>setCount(count + 1)}>+</button>
            <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>
    )
}
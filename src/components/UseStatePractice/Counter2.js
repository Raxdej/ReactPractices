import React,{useState} from "react";

export default function Counter2() {
    const [count, setCount] = useState(0);

    const increment = () => {
        for (let i = 0; i < 3; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return(
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={increment}>Upper!</button>
            <button onClick={()=>setCount(count - 1)}>Down!</button>
            <div>
                <button onClick={()=>setCount(0)}>Reset!</button>
            </div>
        </div>
    )
}
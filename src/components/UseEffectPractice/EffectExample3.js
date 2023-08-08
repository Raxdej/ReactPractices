import React, {useEffect, useState} from "react";


export default function EffectExample3() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition=(e)=>{
        console.log('This is a mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('UseEffect is Called')
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
            window.removeEventListener('mousemove', logMousePosition)
            console.log('Clearing console')
        }
    }, [])


    return(
        <div>
            <p>Mouse position</p>
            coordinate X,Y - {x}, {y}
        </div>
    )
}
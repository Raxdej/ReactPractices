import React, { useEffect, useRef } from "react";

export default function FocusInput() {
    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const inputRef = useRef(null)

    return(
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    )
}
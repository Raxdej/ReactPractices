import React, { useState } from "react";
import EffectExample3 from "./EffectExample3";


export default function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return(
        <div>
            <button
            onClick={()=>setDisplay(!display)}
            >Toggle Dispplay</button>
            {display && <EffectExample3/>}
        </div>
    )
}
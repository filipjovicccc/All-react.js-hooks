import React, {useLayoutEffect, useEffect, useRef} from "react";


function EffectLayout(){
    const inputRef = useRef(null)
    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    }, [])

    useEffect(() => {
         inputRef.current.value = "Hello"
    }, [])

    return <div>
     
        Hello from EffectLayouts
        <input ref={inputRef}  type="text" placeholder="Ex..."/>
    </div>
}

export default EffectLayout
import React , {useRef}from "react"

function Ref(){
    const inputRef = useRef(null)

    const onClick = () => {
         inputRef.current.value = ""
    }
 //cistimo input sa input refovima
return (
    <div>
        <h1>Filip</h1>
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
    </div>
)

}

export default Ref
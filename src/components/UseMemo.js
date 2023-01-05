import { useMemo, useEffect, useState} from "react";
import axios from "axios"


const Memo = () => {
   const [data, setData] = useState(null)
   const [toggle, setToggle] = useState(false)

   
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=> {
         setData(response.data)
         console.log("API WAS CALLED")
    })
  },[]) 

  const findLongName = (comments) => {
    if(!comments) return null;

    let longestName = "";

    for(let i = 0; i < comments.length; i++){
        let currName = comments[i].name;
        if(currName.length > longestName.length){
             
             longestName = currName
        }
    }
  

  console.log("THIS WAS COMPUTED")
  return longestName

}
const getLongestName = useMemo(() => findLongName(data), [data])

//ako se data se ponavlja stavi se u ovakvoj funkciji


    return <div>
    <div>

    {getLongestName}

    </div>
       <button onClick={()=> {
        setToggle(!toggle)
       }}>

        Toggle
       </button>
       {toggle && <h1> toggle </h1>}
    
    </div> 
}

export default Memo;
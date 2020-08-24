import React,{useState} from 'react'

let Hooks=()=>{
    let [count,setCount]=useState(0) 
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Increase</button>
            <button onClick={()=>{setCount(count-1)}}>Decrease</button>
        </div>
    )
}

export default Hooks;
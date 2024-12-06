import React, { useState } from 'react'

function State() {
    const [total, setTotal]=useState(0);
  return (
    <div>
        <button onClick={()=>{setTotal(total+1)}}
        >Bhadhta Hua</button>
        <button onClick={()=>{setTotal(total-1)}}
        >Ghata hua</button>
        <h2>{total}</h2>
        </div>
  )
}

export default State
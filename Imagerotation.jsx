import React, { useState } from 'react'

export const Imagerotation = () => {
    const[image,setImage]=useState("img");
  return (
    <div>
        <img src="harshit.jpg" alt="" />
        <button onClick={()=>{setImage("img")}}
        >Rotate</button>
        
    </div>
  )
}

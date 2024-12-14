import React from 'react'
import { Outlet } from 'react-router-dom'
import './Mainlayout.css'

function Mainlayout() {
  return (
    <div>
        <h2>Welcome to the home page</h2>
        <nav>
        <ul className='aa'>
            <li><a href='/login'>LOGIN</a></li>
            <li><a href='/registration'>REGISTRATION</a></li>
        </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Mainlayout
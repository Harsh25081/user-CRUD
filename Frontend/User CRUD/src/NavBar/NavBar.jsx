import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    let navigate = useNavigate();
  return (
    <main>
        <div className='a'></div>
        <p onClick={()=>{navigate("/createuser")}}>Create New User</p>
        <p onClick={()=>{navigate("/getuser")}}>Get Users</p>
        <p >Delete User </p>
    </main>
  )
}

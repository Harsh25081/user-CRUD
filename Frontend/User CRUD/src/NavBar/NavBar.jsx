import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    let navigate = useNavigate();
  return (
    <main>
        <div className='a'></div>
        <p onClick={()=>{navigate("/createuser")}}>Create New User</p>
        <p onClick={()=>{navigate("/getuser")}}>Get All Users</p>
        <p onClick={()=>{navigate("/getuser")}}>Get User </p>
        <p onClick={()=>{navigate("/updateuser")}}>Edit User </p>
        <p onClick={()=>{navigate("/deleteuser")}}>Delete User </p>
    </main>
  )
}

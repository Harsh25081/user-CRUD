import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './getUser.css'
import { useNavigate } from 'react-router-dom'

function GetUser() {
    let [users, setUser] = useState([])

    const navigate = useNavigate()

    const getAllUsers = () => {
        axios.get("http://localhost:3001/getuser")
            .then((res) => { setUser(res.data.message); console.log(res.data.message) })
            .catch((err) => { console.log(err.message) })
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const editUser = (user) => {
        navigate(
            "/updateuser",
            {
                state:{
                    data:JSON.stringify(user)
                }
            }
        )
    }

    const deleteUser = (_id) => {
        axios.delete(`http://localhost:3001/deleteuser/${_id}`)
            .then((res) => { console.log(res.data) })
            .catch((err) => console.log(err.message))
            getAllUsers()
    }


    // const specificUser = (_id)=>{
    //     axios.get(`http://localhost:3001/getuserbyid/${_id}`)
    //     .then((res)=>{console.log(res.data)})
    //     .catch((err)=>console.log(err.message))
    // }

    return (
        <div className='container'>
            {users.map((user, index) => {
                let { fname, lname, age, gender, email, profilepic, _id } = user
                return (
                    <div key={index} className='outer'>
                        <img src={`${profilepic}`}></img>
                        <p>{fname} {lname}</p>
                        <p>{age}</p>
                        <p>{gender}</p>
                        <p>{email}</p>
                        <button id='edit' onClick={() => {editUser(user) }}>Edit</button>
                        <button id='delete' onClick={()=>{deleteUser(_id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default GetUser
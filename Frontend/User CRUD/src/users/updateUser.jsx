import React, { useState } from 'react'
import axios from 'axios'
import './createUser.css'
import { useLocation } from 'react-router-dom'

export default function UpdateUser() {

    let location = useLocation()
    let {_id,fname,lname,age,gender,email,profilepic} = JSON.parse(location.state.data)

    // let infname = user.fname
    // let inlname = user.lname
    // let inage = user.age
    // let ingender = user.gender
    // let inemail = user.email

  const [data, setData] = useState({
    fname: fname,
    lname: lname,
    age: age,
    gender: gender,
    email: email,
    files: profilepic
  })

  // const [state,dispatch] = useReducer(usersReducer,getInitialState)
  // const {fname , lname , age , gender , email , files} = state.user

  const HandleChange = (event) => {
    let { name, value } = event.target
    setData({ ...data, [name]: value })
  }

  const HandleSubmit = (event,_id) => {
    event.preventDefault();
    let formdata = new FormData()
    formdata.append("fname", data.fname)
    formdata.append("lname", data.lname)
    formdata.append("age", data.age)
    formdata.append("gender", data.gender)
    formdata.append("email", data.email)
    formdata.append("files", data.files)
    axios.patch(`http://localhost:3001/updateuser/${_id}`, formdata, { headers: { "content-type": "multipart/form-data" } })
      .then((response) => { console.log("response", response) })
      .catch((err) => { console.log(err.message) })
  }

  return (
    <div>
      <div>
        <form className="form" onSubmit={(event)=>{HandleSubmit(event,_id)}}>
          <input type='text' name='fname' value={data.fname} onChange={HandleChange}></input>
          <input type='text' name='lname' value={data.lname} onChange={HandleChange}></input>
          <input type='Number' name='age' value={data.age} onChange={HandleChange}></input>
          {/* <input type='radio' value="male"></input> */}
          <input type='text' name='gender' value={data.gender} onChange={HandleChange}></input>
          <input type='email' name='email' value={data.email} onChange={HandleChange}></input>
          <div>
            <label>ProfilePic</label>
            <input type='file' name='profilepic' onChange={(e) => { setData({ ...data, files: e.target.files[0] }); console.log(e.target.files[0]) }}></input>
          </div>
          <button >Submit</button>
        </form>
      </div>
    </div>
  )
}

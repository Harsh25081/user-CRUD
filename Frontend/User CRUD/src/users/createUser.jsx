import React, { useState } from 'react'
import axios from 'axios'
import './createUser.css'

export default function CreateUser() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    age: 0,
    gender: "",
    email: "",
    files: null
  })

  // const [state,dispatch] = useReducer(usersReducer,getInitialState)
  // const {fname , lname , age , gender , email , files} = state.user

  const HandleChange = (event) => {
    let { name, value } = event.target
    setData({ ...data, [name]: value })
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    let formdata = new FormData()
    formdata.append("fname", data.fname)
    formdata.append("lname", data.lname)
    formdata.append("age", data.age)
    formdata.append("gender", data.gender)
    formdata.append("email", data.email)
    formdata.append("files", data.files)
    axios.post("http://localhost:3001/createuser", formdata, { headers: { "content-type": "multipart/form-data" } })
      .then((response) => { console.log("response", response) })
      .catch((err) => { console.log(err.message) })
  }

  return (
    <div>
      <div>
        <form className="form" onSubmit={HandleSubmit}>
          <input type='text' name='fname' placeholder='Fname' onChange={HandleChange}></input>
          <input type='text' name='lname' placeholder='Lname' onChange={HandleChange}></input>
          <input type='Number' name='age' placeholder='Age' onChange={HandleChange}></input>
          {/* <input type='radio' value="male"></input> */}
          <input type='text' name='gender' placeholder='Gender' onChange={HandleChange}></input>
          <input type='email' name='email' placeholder='email' onChange={HandleChange}></input>
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

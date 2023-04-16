import React, { useReducer } from 'react'
import axios from 'axios'
import './createUser.css'
import { useLocation } from 'react-router-dom'
import UserForm from './userForm'

let getInitialState = {
  user: {
    fname: "",
    lname: "",
    age: 0,
    gender: "",
    email: "",
    files: null
  }
}

function updateuserReducer(state, action) {
  let newState = { ...state }
  let newuser = ({ ...newState.user })
  newuser = action.payload
  newState.user = newuser
  return newState
}

export default function UpdateUser() {

  const [state, dispatch] = useReducer(updateuserReducer, getInitialState)
  const { fname, lname, age, gender, email, files } = state.user


  let location = useLocation()
  var data = location.state.data

  const HandleSubmit = (user) => {
    let { _id } = JSON.parse(data)
    console.log("Dispatching payload....")
    dispatch({
      type: "create-user",
      payload: user
    })
    let formdata = new FormData()
    formdata.append("fname", user.fname)
    formdata.append("lname", user.lname)
    formdata.append("age", user.age)
    formdata.append("gender", user.gender)
    formdata.append("email", user.email)
    formdata.append("files", files)
    axios.patch(`http://localhost:3001/updateuser/${_id}`, formdata, { headers: { "content-type": "multipart/form-data" } })
      .then((response) => { console.log("response", response.data.message) })
      .catch((err) => { console.log(err.message) })
  }

  return (
    <div>
      <div>
        <UserForm onSubmit={HandleSubmit} Userdata={data} />
      </div>
    </div>
  )
}

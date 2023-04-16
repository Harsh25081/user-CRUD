import React, { useReducer } from 'react'
import axios from 'axios'
import './createUser.css'
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

function usersReducer(state, action) {
  console.log({ state, action })
  return { user: action.payload }
}

export default function CreateUser() {

  const [state, dispatch] = useReducer(usersReducer, getInitialState)
  const { fname, lname, age, gender, email, files } = state.user


  const HandleSubmit = (user) => {
    console.log("Dispatching payload....")
    dispatch({
      type: "create-user",
      payload: user
    })
    let formdata = new FormData()
    formdata.append("fname", fname)
    formdata.append("lname", lname)
    formdata.append("age", age)
    formdata.append("gender", gender)
    formdata.append("email", email)
    formdata.append("files", files)
    axios.post("http://localhost:3001/createuser", formdata, { headers: { "content-type": "multipart/form-data" } })
      .then((response) => { console.log("response", response) })
      .catch((err) => { console.log(err.message) })
  }

  return (
    <div>
      <div>
        <UserForm onSubmit={HandleSubmit} />
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export default function UserForm({ Userdata, onSubmit }) {

    let { fname, lname, age, gender, email, files } = Userdata == undefined ? {
        fname: "",
        lname: "",
        age: 0,
        gender: "",
        email: "",
        files: null
    } : JSON.parse(Userdata)

    let [create, setCreate] = useState(true)

    useEffect(() => {
        if (Userdata !== undefined)
            setCreate(false)
    }, [])

    const [data, setData] = useState({
        fname: fname,
        lname: lname,
        age: age,
        gender: gender,
        email: email,
        files: null
    })



    const HandleChange = (event) => {
        let { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        onSubmit(data)
    }


    return (
        <div>

            {/* <p>{JSON.stringify(Userdata)}</p> */}
            <div>
                <form className="form" onSubmit={HandleSubmit}>
                    <input type='text' name='fname' placeholder='Fname' defaultValue={fname} onChange={HandleChange}></input>
                    <input type='text' name='lname' placeholder='Lname' defaultValue={lname} onChange={HandleChange}></input>
                    <input type='Number' name='age' placeholder='Age' defaultValue={age} onChange={HandleChange}></input>
                    {/* <input type='radio' value="male"></input> */}
                    <input type='text' name='gender' placeholder='Gender' defaultValue={gender} onChange={HandleChange}></input>
                    <input type='email' name='email' placeholder='email' defaultValue={email} onChange={HandleChange}></input>
                    <div>
                        <label>ProfilePic</label>
                        <input type='file' name='profilepic' onChange={(e) => { setData({ ...data, files: e.target.files[0] }); console.log(e.target.files[0]) }}></input>
                    </div>
                    <button >{create == true ? "Submit" : "Update"}</button>
                </form>
            </div>
        </div>
    )
}

// import React from 'react'

// export default function UserForm() {

//     const [data, setData] = useState({
//         fname: "",
//         lname: "",
//         age: 0,
//         gender: "",
//         email: "",
//         files: null
//     })

//     const HandleChange = (event) => {
//         let { name, value } = event.target
//         setData({ ...data, [name]: value })
//     }

//     return (
//         <div>
//             <div>
//                 <form className="form" onSubmit={HandleSubmit}>
//                     <input type='text' name='fname' placeholder='Fname' onChange={HandleChange}></input>
//                     <input type='text' name='lname' placeholder='Lname' onChange={HandleChange}></input>
//                     <input type='Number' name='age' placeholder='Age' onChange={HandleChange}></input>
//                     {/* <input type='radio' value="male"></input> */}
//                     <input type='text' name='gender' placeholder='Gender' onChange={HandleChange}></input>
//                     <input type='email' name='email' placeholder='email' onChange={HandleChange}></input>
//                     <div>
//                         <label>ProfilePic</label>
//                         <input type='file' name='profilepic' onChange={(e) => { setData({ ...data, files: e.target.files[0] }); console.log(e.target.files[0]) }}></input>
//                     </div>
//                     <button >Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

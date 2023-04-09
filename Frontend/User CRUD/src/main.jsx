import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from './users/createUser';
import GetUser from './users/getUser';
import UpdateUser from './users/updateUser';
import DeleteUser from './users/deleteUser';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/createuser' element={<CreateUser />}/>
      <Route path='/getuser' element={<GetUser />}/>
      <Route path='/updateuser' element={<UpdateUser />}/>
      <Route path='/deleteuser' element={<DeleteUser />}/>
    </Routes>
  </BrowserRouter>
)

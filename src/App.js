import { BrowserRouter, Redirect, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './App.css';
import HomePage from './components/homePage/homePage';
import Login from './components/loginAndRegestration/login/login';
import Regestration from './components/loginAndRegestration/regestration/regestration';
import Workspace from './components/workspace/workspace';
import Dashboard from './components/workspace/dashboard/dashboard';
import Shop from './components/workspace/shop/shop';
import Purchase from './components/workspace/purchase/purchase';
import axios from "axios";
import {toast} from "react-toastify";

const isAuth = localStorage.getItem("access_token");


function App() {


  useEffect(() => {
    async function fetchShift() {
      await axios({
        method: 'get',
        url: `http://185.94.164.62/newapi/shift/`,
      }).then(response => {
        localStorage.setItem('shift', JSON.stringify(response.data))
      })
    }
      if(localStorage.getItem('access_token') !== null) {
         fetchShift()
      }
    },[]);
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={isAuth ? <Dashboard /> : <HomePage />} />
          <Route path='/regestration' element={<Regestration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/work' element={<Workspace />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/purchase' element={<Purchase />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

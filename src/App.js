import {BrowserRouter, Redirect, Route, Routes, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './App.css';
import HomePage from './components/homePage/homePage';
import Login from './components/loginAndRegestration/login/login';
import Regestration from './components/loginAndRegestration/regestration/regestration';
import Workspace from './components/workspace/workspace';

const isAuth = localStorage.getItem("access_token");


function App() {


  // useEffect(() => {
  //     if(localStorage.getItem('access_token') == null) {
  //         navigate('/workspace');
  //     }else {
  //       navigate('/regestration');
  //
  //     }
  //   },[]);
    return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ isAuth ? <Workspace/> : <HomePage />} />
          <Route path='/regestration' element={<Regestration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/work' element={<Workspace />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

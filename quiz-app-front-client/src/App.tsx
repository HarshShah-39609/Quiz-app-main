import React, { useState } from 'react';
import logo from './logo.svg';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from  './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Home from './Pages/Home';
import LoadingScreen from './Components/Loading';

function App() {

  const [loading,setloading] = useState(false);

  const Logout = () => {
    setloading(true);
    console.log("logging out");
    sessionStorage.clear();
    window.location.href = "/Login";
    setloading(false);
  return(
    <>
      {loading && <LoadingScreen/>}
    </>
  )
  }


  return (
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Navigate to="/Login" replace />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Logout' element={<Logout/>} />
      </Routes>
    </div>
  );
}

export default App;

import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./screens/Profile";
import UserProfile from "./components/UserProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
    
          <Navbar  />
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/user/:userid" element={<UserProfile />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
          <ToastContainer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;

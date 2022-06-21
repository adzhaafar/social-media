import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import SignUp from "./pages/SignUp.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile:username" element={<Profile/>} />
        {/* feed, alert, create post, edit post, login, profile, profileItem, search, signuplogin */}
        
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;


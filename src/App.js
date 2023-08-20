import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Login from "./login/login";
import Signup from "./signup/signup";
import { useAuthContext } from "./hooks/useAuthContext";


import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  const { user } = useAuthContext();
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
      <Route path="/project" element={!user ? <Navigate to="/login" /> : <Project />} />
      <Route path="/about" element={!user ? <Navigate to="/login" /> : <About />} />
      <Route path="/contact" element={!user ? <Navigate to="/login" /> : <Contact />} />


        {/* <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;

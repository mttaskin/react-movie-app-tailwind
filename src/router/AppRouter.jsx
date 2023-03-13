import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import MovieDetail from "../pages/MovieDetail";


const AppRouter = () => {
  
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/details/:id" element={<MovieDetail/>}/>
  </Routes>
  </BrowserRouter>
};

export default AppRouter;

import React, { useState } from 'react'
import './App.css';
import Head from './Components/Header/Header';
import Foot from './Components/Footer/Footer';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Course from "./Components/course/Course";
import Home from "./Components/Home/Home";
import Study from "./Components/Study/Study";
import Student from "./Components/Student/Student";
import About from "./Components/About/About";

export default function App() {
  const [StudDetails, setStudDetails] = useState([])

  return (
    <>
      <BrowserRouter>
        <Head setstuddetails={setStudDetails} studdetails={StudDetails} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/study" element={<Study />} />
          <Route path="/student" element={<Student setstuddetails={setStudDetails} studdetails={StudDetails} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </>
  );
}


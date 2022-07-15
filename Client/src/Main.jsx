import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "../layout/Header"
import Access from './pages/Access'
import Features from './pages/Features'
import Home from './pages/Home'
import "./Main.css"
import { useSelector } from "react-redux";

function Main() {
  const darkMode = useSelector((state)=>state.darkMode.value);

  return (
    <div style={{minHeight:"100vh"}} className={darkMode?'bg-dark text-light':'bg-light text-dark'}>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/access' element={<Access/>}/>
                <Route path='/features' element={<Features/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Main

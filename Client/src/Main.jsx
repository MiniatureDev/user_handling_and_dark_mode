import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "../layout/Header"
import Home from './pages/Home'

function Main() {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Main

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "../layout/Header"

function Main() {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route/>
            </Routes>
        </Router>
    </div>
  )
}

export default Main

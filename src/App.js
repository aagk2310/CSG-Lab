import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Publications from './Publications'
import Projects from './Projects'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="auth-wrapper">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
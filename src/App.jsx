import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import "./styles/App.scss"
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
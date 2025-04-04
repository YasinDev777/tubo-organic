import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Login from './pages/Login'
import Courses from './pages/Courses'
import "./styles/App.scss"
import FullCourse from './pages/FullCourse'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<FullCourse />} />
      </Routes>
    </div>
  )
}

export default App
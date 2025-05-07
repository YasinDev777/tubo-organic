import React, { useEffect, useMemo } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from '../components/Main'
import Login from '../pages/Login'
import Courses from '../pages/Courses'
import FullCourse from '../pages/FullCourse'
import LogedInMain from '../pages/LogedInMain'
import "../styles/App.scss"
import CoursesPage from '../pages/LogedInMain/CoursesPage'

const AppRoutes = () => {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.getItem('userData')
  }, [navigate])

  const isLogedIn = localStorage.getItem('userData')
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={isLogedIn ? <LogedInMain /> : <Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<FullCourse />} />
        <Route path='/course/:id' element={<CoursesPage />} />
      </Routes>
    </div>
  )
}

export default AppRoutes

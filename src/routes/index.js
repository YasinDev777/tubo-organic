import React, { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from '../pages/Login'
import Courses from '../pages/Courses'
import FullCourse from '../pages/FullCourse'
import LogedInMain from '../pages/LogedInMain'
import "../styles/App.scss"
import CoursesPage from '../pages/LogedInMain/CoursesPage'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import NotFound from '../pages/NotFound'
const Main = lazy(() => import('../components/Main'));

const AppRoutes = () => {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    localStorage.getItem('userData')
  }, [navigate])

  const isLogedIn = localStorage.getItem('userData')
  return (
    <div className='app'>
        {
          (location.pathname !== '/login' && isLogedIn && location.pathname !== '*') || (location.pathname !== '/login' && !isLogedIn && location.pathname !== '/' && location.pathname !== '*') ?
          <Navbar /> : null
        }
      <Routes>
        <Route path='/' element={isLogedIn ? <LogedInMain /> : <Suspense fallback={<Loader />}><Main /></Suspense>} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<FullCourse />} />
        <Route path='/course/:id' element={<CoursesPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRoutes

import React, { useEffect } from 'react'
import CoverCourse from '../assets/coverBigCourse.webp'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses } from '../redux/slices/coursesSlice'

const Courses = () => {
  const dispatch = useDispatch()
  const { data: courses, status: coursesStatus, error: coursesError } = useSelector(state => state.courses)
  
  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch, courses.length])

  return (
    <div className='courses-div'>
      {
        courses.map((item, index) => (
          <div className="div-courses" key={item.course_id}>
            <div className="main-course-img">
              <Link to={`/courses/${item.course_id}`}>
                <img src={item.image_url} alt={item.name} loading='lazy' />
              </Link>
            </div>
            <h1>{item.course_name}</h1>
            <div className="main-course-info">
              <div className="price">
                <p className='method-pay'>Kurs narxi</p>
                <p>{item.price} so'm</p>
              </div>
              <div className="half-price">
                <p className='method-pay'>Muddatli to'lov</p>
                <p>{item.half_price} so'm/oy</p>
              </div>
            </div>
            <Link to={`/courses/${item.course_id}`}>
              <button>Batafsil</button>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Courses
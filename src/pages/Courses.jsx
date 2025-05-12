import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses } from '../redux/slices/coursesSlice'
import Loader from '../components/Loader' 

const Courses = () => {
  const dispatch = useDispatch()
  const { data: courses, status: coursesStatus, error: coursesError } = useSelector(state => state.courses)
  const [filteredCourses, setFilteredCourses] = useState([])
  
  useEffect(() => {
    dispatch(fetchCourses())

    if (coursesStatus === 'success'){
      const filter = courses.filter(item => item.status !== 'progress')
      setFilteredCourses(filter)
    }
  }, [dispatch, courses.length])

  return (
    <>
      {
        coursesStatus === 'idle' ? <Loader /> :
        <div className='courses-div'>
          {
            filteredCourses.map((item) => (
              <div className="div-courses" key={item.id}>
                <div className="main-course-img">
                  <Link to={`/courses/${item.id}`}>
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
                    <p>{`${item.half_price} ${item.half_price === 'mavjut emas' ? '' : "so'm/oy"}`}</p>
                  </div>
                </div>
                <Link to={`/courses/${item.id}`}>
                  <button>Batafsil</button>
                </Link>
              </div>
            ))
          }
        </div>
      }
    </>
  )
}

export default Courses
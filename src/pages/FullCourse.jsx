import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchCourses } from '../redux/slices/coursesSlice'
import useGetUserCourses from '../functions/firebaseCourse/FirebaseCourses'
import Loader from '../components/Loader'
const FullCourse = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = localStorage.getItem('userData')
  const { allCourses, loading } = useGetUserCourses()
  const [isUserHave, setIsUserHave] = useState(null)
  const { data: courses = [], status: coursesStatus, error: coursesError } = useSelector(state => state.courses)
  const [currentCourse, setCurrentCourse] = useState([])

    useEffect(() => {
      if (coursesStatus === 'idle' || coursesStatus === 'error') {
        dispatch(fetchCourses())
      }
    }, [dispatch, coursesStatus, user])    
    

  useEffect(() => {
    if (!loading && user && allCourses) {
      const course = allCourses.find(course => course.course_id === id)
      setIsUserHave(!!course)
    }
  }, [loading, id, user, allCourses])

  useEffect(() => {
    if (coursesStatus === 'success' && courses.length > 0 && id) {
      const found = courses.find(c => c.id === id);
      setCurrentCourse(found || null);
      console.log(currentCourse)
    }
  }, [coursesStatus, courses, id]);

  return (
    <div className='header__fullCourse'>
      {coursesStatus === 'idle' ? <Loader /> : coursesStatus === 'success' && !currentCourse ? <p>Course Not Found</p> :
      <>
        <div className="header__header">
          <div className="header__text">
            <h1>{currentCourse?.course_name}</h1>
            <p>{currentCourse?.course_name}ni «<span>Tubo Organic</span>» platformasida Ko'p yillik tajribaga ega mutahassisdan o'rganing</p>
            {
              isUserHave ? (
                <Link to={`/course/${id}`}>
                  <button>
                    Ko'rish
                  </button>
                </Link>
              ) : (
                <button>Sotib olish</button>
              )
            }
          </div>
          <div className="header__image">
            {
              currentCourse && currentCourse?.image_url ?
              <img src={currentCourse?.image_url || ''} alt={currentCourse?.course_name} loading='lazy' /> :
              null
            }
          </div>
        </div>
        <div className="header__about__course">
          <ul>
            {/* {!currentCourse?.why_this_course ? null :
              currentCourse?.why_this_course.map((item, index) => (
                <li key={index} className='notHave'>{item}</li>
              ))
            } */}
          </ul>
        </div>
      </>
    }
    </div>
  )
}

export default FullCourse

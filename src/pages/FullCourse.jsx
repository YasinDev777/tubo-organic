import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchCourses } from '../redux/slices/coursesSlice'
import useGetUserCourses from '../functions/firebaseCourse/FirebaseCourses'

const FullCourse = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = localStorage.getItem('userData')
  const { allCourses, loading } = useGetUserCourses()
  const [isUserHave, setIsUserHave] = useState(null)
  const { data: courses = [], status: coursesStatus, error: coursesError } = useSelector(state => state.courses)
  const currentCourseData = coursesStatus === 'success'
    ? courses.find(item => item.course_name === id)
    : null

  useEffect(() => {
    if (user && coursesStatus === 'idle') {
      dispatch(fetchCourses())
    }
  }, [dispatch, user, coursesStatus])
    

  useEffect(() => {
    if (!loading && allCourses) {
      const course = allCourses.find(course => course.course_name === id)
      setIsUserHave(!!course)
    }
  }, [allCourses, coursesStatus, id])

  console.log(coursesStatus)
  return (
    <div className='header__fullCourse'>
      <div className="header__header">
        <div className="header__text">
          <h1>{id}</h1>
          <p>{id}ni «<span>Tubo Organic</span>» platformasida Ko'p yillik tajribaga ega mutahassisdan o'rganing</p>
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
            currentCourseData && currentCourseData.image_url ?
            <img src={currentCourseData?.image_url || ''} alt={id} /> :
            null
          }
        </div>
      </div>
      <div className="header__about__course">
        <div className="about__course__title">
          <h1>Nima uchun <span>{id}</span> kursni tanlash kerak</h1>
        </div>
        <div className="about__course__info">
          {
            currentCourseData?.why_this_course ?
            <ul>
              {
                currentCourseData?.why_this_course.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul> : ''
          }
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
      </div>
      <div className="header__buy__course">
        <h1></h1>
        <div className="buy__course"></div>
        <div className="buy__course__buttons"></div>
      </div>
    </div>
  )
}

export default FullCourse

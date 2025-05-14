import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchCourses } from '../redux/slices/coursesSlice'
import useGetUserCourses from '../functions/firebaseCourse/FirebaseCourses'
import Loader from '../components/Loader'
import BuyPopUp from '../components/BuyPopUp'
import NotFound from './NotFound'
import { IoMdArrowRoundBack } from "react-icons/io";
const FullCourse = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = localStorage.getItem('userData')
  const { allCourses, loading } = useGetUserCourses()
  const [isUserHave, setIsUserHave] = useState(null)
  const { data: courses = [], status: coursesStatus, error: coursesError } = useSelector(state => state.courses)
  const [currentCourse, setCurrentCourse] = useState([])
  const [isPopUpActive, setIsPopUpActive] = useState(false)
  const navigate = useNavigate()
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

  if (coursesStatus === 'idle') return <Loader />;
  else if (coursesStatus === 'success' && !currentCourse) return <NotFound />;

  return (
    <div className='header__fullCourse'>
      <BuyPopUp active={isPopUpActive} setIsActive={setIsPopUpActive} />
      {
        <>
          <div className="header__header">
            <div className='fullCOurse__backIcon' onClick={() => navigate(-1)}>
              <IoMdArrowRoundBack />
            </div>
            <div className="header__text">
              <h1>{currentCourse?.course_name}</h1>
              <p><strong>{currentCourse?.course_name}</strong> online kursini «<span>Tubo Organic</span>» platformasida Ko'p yillik tajribaga ega mutahassisdan o'rganing</p>
              {
                isUserHave ? (
                  <Link to={`/course/${id}`}>
                    <button>
                      Ko'rish
                    </button>
                  </Link>
                ) : (
                  <button onClick={() => setIsPopUpActive(!isPopUpActive)}>Sotib olish</button>
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
            {Array.isArray(currentCourse?.why_this_course) && currentCourse.why_this_course.map((item, index) => (
              <div className="about__course__card" key={index}>
                <h5>{item.modul_name}</h5>
                <ul>
                  {item.techniques.map((itemI, index2) => (
                    <li className={itemI.have ? 'have' : 'notHave'} key={index2}>
                      {itemI.technique}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </>
      }
    </div>
  )
}

export default FullCourse
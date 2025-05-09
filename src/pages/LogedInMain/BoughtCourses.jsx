import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCourses } from '../../redux/slices/coursesSlice'
import useGetUserCourses from '../../functions/firebaseCourse/FirebaseCourses'
import Loader from '../../components/Loader'
import { getDate } from '../../utils/GetDate'
import { FindLastCourse } from '../../utils/FindLastCourse'
const BoughtCourses = () => {
  const { allCourses, loading, error } = useGetUserCourses()
  const dispatch = useDispatch()
  const [currentCourse, setCurrentCourse] = useState('')
  const storageCourse = localStorage.getItem('currentCourse')
  useEffect(() => {
    if (allCourses.length > 0) {
      setCurrentCourse(storageCourse || allCourses[0]?.course_id)
    }
  }, [allCourses, storageCourse])

  const FindedCourse = FindLastCourse(allCourses, currentCourse)

  useEffect(() => {
    dispatch(fetchCourses())
    console.log(FindedCourse)
  }, [dispatch])

  return (
    <div className="bought-courses">
      <div className="course__info">
        <div className="course__info-img">
          <Link to={`/course/${FindedCourse?.course_id}`}>
            <img src={FindedCourse?.image_url} alt={FindedCourse?.id} />
          </Link>
        </div>
        <div className="course__info-info">
          <div className="spec">
            <p>Kurs:</p>
            <div className="dots"></div>
            <p>{FindedCourse?.course_name}</p>
          </div>

          <div className="spec">
            <p>Modul:</p>
            <div className="dots"></div>
            <p>Pchini pishirish uchun Start</p>
          </div>

          <div className="spec">
            <p>Mavzu:</p>
            <div className="dots"></div>
            <p>Hamir qorish</p>
          </div>

          <div className="spec">
            <p>Videolar soni</p>
            <div className="dots"></div>
            <p>40 yuzta</p>
          </div>

          <div className="spec">
            <p>Kurs muddati</p>
            <div className="dots"></div>
            <p>{getDate(FindedCourse?.due_date)}</p>
          </div>

          <div className="progress__info">
            <p>50% videolar yakunlangan</p>
            <div className="progress">
              <div className="progress__progress"></div>
            </div>
          </div>

        </div>
      </div>

      <div className="bought__courses">
        <h1>Mening Kurslarim</h1>

        {loading ? (
          <Loader />
        ) : (
          <div className="bought__courses-courses">
            {allCourses.map((item) => (
              <div className='bought__courses-div' key={item.course_id}>
                <div className="bought__courses-img">
                  <Link to={`/course/${item.course_id}`} onClick={() => setCurrentCourse(item.course_id)}>
                    <img src={item.image_url} alt={item.course_name} />
                  </Link>
                </div>
                <div className="bought__courses__container">
                  <h3>{item.course_name}</h3>
                  <div className='bought__courses-info'>
                    <div className="bought__due-date">
                      <p>Kurs muddati</p>
                      <p>{getDate(item.due_date)}</p>
                    </div>
                    <div className="bought__courses-videos">
                      <p>Videolar soni</p>
                      <p>40-yuzta</p>
                    </div>
                  </div>
                  <div className="progress__info">
                    <p>50%</p>
                    <div className="progress">
                      <div className="progress__progress"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default BoughtCourses
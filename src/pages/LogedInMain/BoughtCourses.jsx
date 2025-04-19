import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCourses } from '../../redux/slices/coursesSlice'
import { GetUserCourses } from '../../functions/firebaseCourse/FirebaseCourses'
const BoughtCourses = () => {
  const dispatch = useDispatch()
  const { allCourses, error } = GetUserCourses()

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch, allCourses.length])
  
  const getDate = (due_date) => {
    const now = Date.now()
    const diff = due_date - now

    if (diff <= 0) return 'Срок истёк'

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)

    return days ? `${days}kun` : hours ? `${hours} soat` : `${minutes} daqiqa`
  }

  return (
    <div className="bought-courses">
      <div className="course__info">
        <div className="course__info-img">
          <Link to='#'>
            <img src="https://i.pinimg.com/736x/e6/81/98/e681983c75adf1a8fb1eedced9cf7e35.jpg" alt="pchini" />
          </Link>
        </div>
        <div className="course__info-info">
          <div className="spec">
            <p>Kurs:</p>
            <div className="dots"></div>
            <p>Organic pchini cooking</p>
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
            <p>Ko'ngilga siqquncha</p>
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

        {!allCourses ? <p>Loading...</p> :
          <div className="bough__courses-courses">
            {allCourses.map((item) => (
              <div className='bough__courses-div' key={item.course_id}>
                <div className="bought__courses-img">
                  <img src={item.image_url} alt={item.course_name} />
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
          </div>}
      </div>
    </div>
  )
}

export default BoughtCourses
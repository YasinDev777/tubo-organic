import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCourses } from '../../redux/slices/coursesSlice'
import useGetUserCourses from '../../functions/firebaseCourse/FirebaseCourses'
import Loader from '../../components/Loader'
import { getDate } from '../../utils/GetDate'
import { FindLastCourse } from '../../utils/FindLastCourse'
import { getVideoCourse } from '../../functions/VideoCourseLogic/VideoCourseGet'
import { updateUserProgress } from '../../utils/CalculateProgress'
import DueDateDisplay from '../../components/DueDate'
const BoughtCourses = () => {
  const { allCourses, loading, error } = useGetUserCourses()
  const dispatch = useDispatch()
  const [currentCourse, setCurrentCourse] = useState('')
  const storageCourse = localStorage.getItem('currentCourse')
  const FindedCourse = allCourses.length > 0
  ? FindLastCourse(allCourses, currentCourse) || allCourses[0]
  : null;
  const [coursesVideo, setCoursesVideo] = useState([])
  const [totalVideo, setTotalVideo] = useState(0)
  const viewed = FindedCourse?.user_progress?.length || 0
  const [videosCount, setVideosCount] = useState({})
  const [dueDateText, setDueDateText] = useState('');
  
  useEffect(() => {
  const total = coursesVideo[0]?.moduls?.reduce((acc, mod) => acc + (mod.modul_lessons?.length || 0), 0)

  const updateProgress = async () => {
    if (FindedCourse && total > 0) {
      updateUserProgress(FindedCourse.id, viewed, total)
      setTotalVideo(total)
    }
  }

  updateProgress()
}, [FindedCourse, viewed, coursesVideo])

useEffect(() => {
  if (allCourses.length > 0) {
    const courseExists = allCourses.some(c => c.course_id === currentCourse);
    setCurrentCourse(courseExists ? storageCourse || currentCourse : allCourses[0]?.course_id);
  }
}, [allCourses, storageCourse, currentCourse]);

useEffect(() => {
  const fetchData = async () => {
    if (!FindedCourse?.course_id) return;

    const data = await getVideoCourse();
    const courseData = data.find(item => item.course_id === FindedCourse.course_id);
    if (courseData) {
      setCoursesVideo([courseData]);
      const total = courseData.moduls?.reduce((acc, mod) => acc + (mod.modul_lessons?.length || 0), 0);
      if (total > 0) {
        setTotalVideo(total);
        updateUserProgress(FindedCourse.id, viewed, total);
      }
    }
  };

  fetchData();
}, [FindedCourse]);

useEffect(() => {
  const fetchAllVideos = async () => {
    const data = await getVideoCourse();
    const counts = {};

    allCourses.forEach(course => {
      const courseData = data.find(item => item.course_id === course.course_id);
      if (courseData) {
        const total = courseData.moduls?.reduce((acc, mod) => acc + (mod.modul_lessons?.length || 0), 0);
        counts[course.course_id] = total;
      }
    });

    setVideosCount(counts);
  };

  if (allCourses.length > 0) {
    fetchAllVideos();
  }
}, [allCourses]);


useEffect(() => {
    dispatch(fetchCourses())
}, [dispatch])

useEffect(() => {
  const fetchDueDate = async () => {
    try {
      const result = await getDate(FindedCourse?.due_date, FindedCourse?.id);
      setDueDateText(result);
    } catch (err) {
      console.error('Error fetching date:', err);
      setDueDateText('Muddati kutilmoqda');
    }
  };

  if (FindedCourse?.due_date && FindedCourse?.id) {
    fetchDueDate();
  }
}, [FindedCourse?.due_date, FindedCourse?.id]);

if (!FindedCourse) return <h1>Kurslar Mavjud emas</h1>

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
            <p>
              {
                Array.isArray(FindedCourse?.user_progress) && FindedCourse.user_progress.length > 0
                  ? FindedCourse.user_progress[FindedCourse.user_progress.length - 1]?.modul
                  : coursesVideo[0]?.moduls[0]?.modul_name
              }
            </p>

          </div>

          <div className="spec">
            <p>Mavzu:</p>
            <div className="dots"></div>
            <p>
              {
                Array.isArray(FindedCourse?.user_progress) && FindedCourse.user_progress.length > 0
                  ? FindedCourse.user_progress[FindedCourse.user_progress.length - 1]?.lesson
                  : coursesVideo[0]?.moduls[0]?.modul_lessons[0]?.lesson_name
              }
            </p>

          </div>

          <div className="spec">
            <p>Videolar soni</p>
            <div className="dots"></div>
            <p>{totalVideo}-ta</p>
          </div>

          <div className="spec">
            <p>Kurs muddati</p>
            <div className="dots"></div>
            <p>{dueDateText}</p>
          </div>

          <div className="progress__info">
            <p>{FindedCourse?.progress}% videolar yakunlangan</p>
            <div className="progress">
              <div className="progress__progress" style={{width:`${FindedCourse?.progress}%`}}></div>
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
                      <p><DueDateDisplay due_date={item.due_date} id={item.id} /></p>
                    </div>
                    <div className="bought__courses-videos">
                      <p>Videolar soni</p>
                      <p>{videosCount[item.course_id] || 0}-ta</p>
                    </div>
                  </div>
                  <div className="progress__info">
                    <p>{item.progress || 0}%</p>
                    <div className="progress">
                      <div className="progress__progress" style={{width: `${item.progress || 0}%`}}></div>
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
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getVideoCourse } from '../../functions/VideoCourseLogic/VideoCourseGet'
import { RiPlayList2Fill } from "react-icons/ri";
import { FaArrowLeft, FaAngleDown, FaPlay } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { updateUserProgress } from '../../functions/VideoCourseLogic/FindUserCourse';
import useGetUserCourses from '../../functions/firebaseCourse/FirebaseCourses';
import { useDispatch } from 'react-redux';
import { fetchCourses } from '../../redux/slices/coursesSlice'
import Loader from '../../components/Loader';
import NotFound from '../NotFound';

const CoursesPage = () => {
  const { id } = useParams()
  const [coursesVideo, setCoursesVideo] = useState(null)
  const [loadingData, setLoadingData] = useState(true);
  const navigate = useNavigate()
  const [activeOption, setActiveOption] = useState(false)
  const [activeList, setActiveList] = useState(false)
  const { allCourses, loading, error } = useGetUserCourses()
  const currentCourse = allCourses?.find(item => item?.course_id === id)
  const [currentModul, setCurrentModul] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)
  const dispatch = useDispatch()
  const [showNotFound, setShowNotFound] = useState(false);
  const isEnd = Array.isArray(currentCourse?.user_progress)
    ? currentCourse.user_progress.find(item => item?.lessonIndex === currentLesson && item?.modulIndex === currentModul)
    : false;

  const isValidVideoUrl = (url) => {
    return url && !url.includes(window.location.hostname) && url.startsWith('http');
  };

  useEffect(() => {
    const body = document.querySelector('body')
    if (activeList) {
      body.classList.add('activedList')
    }else {
      body.classList.remove('activedList')
    }
  }, [activeList])

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      setLoadingData(true);
      try {
        const data = await getVideoCourse(id);
        const courseData = data.find(item => item.course_id === id);

        if (!courseData) {
          setCoursesVideo(null);
          return;
        }

        const processedData = currentCourse?.course_full === false
          ? { ...courseData, moduls: courseData.moduls.slice(0, Math.floor(courseData.moduls.length / 2)) }
          : courseData;

        setCoursesVideo(processedData);
      } catch (error) {
        console.error("Failed to load course:", error);
        setCoursesVideo(null);
      } finally {
        setLoadingData(false);
      }
    };

    loadData();
  }, [id, currentCourse?.course_full]);

  useEffect(() => {
    dispatch(fetchCourses())
  }, [])

  useEffect(() => {
    if (allCourses && id && coursesVideo?.moduls?.length > 0) {
      const course = allCourses.find(item => item?.course_id === id);

      if (course && Array.isArray(course.user_progress)) {
        const lastProgress = course.user_progress[course.user_progress.length - 1];

        // Используем coursesVideo без [0]
        const modul = coursesVideo.moduls[lastProgress?.modulIndex];
        const lesson = modul?.modul_lessons?.[lastProgress?.lessonIndex];

        if (modul && lesson) {
          setCurrentModul(lastProgress.modulIndex);
          setCurrentLesson(lastProgress.lessonIndex);
        } else {
          setCurrentModul(0);
          setCurrentLesson(0);
        }
      }
    }
  }, [allCourses, id, coursesVideo]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading && !coursesVideo) {
        setShowNotFound(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading, coursesVideo]);

  if (loading || loadingData) {
    return <Loader />;
  }

  if (!coursesVideo || !currentCourse) {
    return <NotFound />;
  }

  if (
    !coursesVideo.moduls?.[currentModul] ||
    !coursesVideo.moduls[currentModul]?.modul_lessons?.[currentLesson]
  ) {
    return;
  }

  return (
    <div className='CoursesPage' onClick={() => setActiveList(false)}>
      <div className="CoursePage__nav">
        <div className="CoursePage__tex">
          <p onClick={() => navigate(-1)}><FaArrowLeft /> {currentCourse?.course_name}</p>
          <h3>{coursesVideo?.moduls[currentModul]?.modul_lessons[currentLesson]?.lesson_name}</h3>
        </div>
        <button onClick={(e) => {setActiveList(!activeList); e.stopPropagation()}}><RiPlayList2Fill /> PlayList</button>
      </div>

      <div className="CoursesPage__videoPLayer">
        <div className="video__player">
          {isValidVideoUrl(coursesVideo?.moduls[currentModul]?.modul_lessons[currentLesson]?.lesson_video) ? (
            <iframe
              src={`${coursesVideo.moduls[currentModul].modul_lessons[currentLesson].lesson_video}?controls=1&rel=0`}
              frameBorder="0"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <div className="video-placeholder">
              <h3>Admin videoni yuklamoqda</h3>
            </div>
          )}
        </div>
        <div className={`play__list ${activeList ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="play__list__nav">
            <div className="play__list__text">
              <h3>{currentCourse?.course_name}</h3>
              <p>Darslar Soni: {coursesVideo?.moduls[currentModul]?.modul_lessons?.length}</p>
            </div>
            <BiX onClick={() => setActiveList(!activeList)} />
          </div>
          <div className="play__list__options">
            <div className={`play__list__options__name ${activeOption ? 'active' : ''}`} onClick={() => setActiveOption(!activeOption)}>
              <p>{coursesVideo?.moduls[currentModul]?.modul_name}</p>
              <FaAngleDown />
            </div>
            <div className={`play__list__options__option ${activeOption ? 'active' : ''}`}>
              {
                coursesVideo?.moduls.map((item, index) => (
                  <div className='play__list__option' key={index} onClick={() => { setActiveOption(!activeOption); setCurrentModul(index); setCurrentLesson(0) }} key={index}>
                    <p>{item?.modul_name}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="play__list__lessons">
            {
              coursesVideo?.moduls[currentModul]?.modul_lessons.map((item, index) => (
                <div className={`lessons ${Array.isArray(currentCourse?.user_progress) && currentCourse?.user_progress.some(item => item.lessonIndex === index && item.modulIndex === currentModul) ? 'watched' : currentLesson === index ? 'active' : ''}`}
                  style={currentLesson === index ? { background: 'var(--border-color)' } : { background: 'var(--bg-color)' }}
                  key={index} onClick={() => setCurrentLesson(index)}>
                  <div className="play__icon">
                    <FaPlay />
                  </div>
                  <p><span>{index + 1}. </span>{item.lesson_name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <button className={`SaveToDb ${isEnd ? 'watched' : ''}`}
        onClick={() => updateUserProgress(
          currentCourse?.id,
          coursesVideo?.moduls[currentModul]?.modul_name,
          coursesVideo?.moduls[currentModul]?.modul_lessons[currentLesson]?.lesson_name,
          currentModul,
          currentLesson
        )}
      >Tugatildi</button>
      <div className="util__info">
        <h1>Ushbu Dars uchun Malumot</h1>
        <div className='util__info__container'>
          {
            coursesVideo?.moduls?.[currentModul]?.modul_lessons?.[currentLesson]?.lesson_info
              ? [...coursesVideo.moduls[currentModul].modul_lessons[currentLesson].lesson_info]
                .sort((a, b) => b.info.length - a.info.length)
                .map((item, index) => (
                  <div className="util__info__card" key={index}>
                    <h5>{item.info_head}</h5>
                    <ul>
                      {item.info.map((itemI, index2) => (
                        <li key={index2}>{itemI}</li>
                      ))}
                    </ul>
                  </div>
                ))
              : <p>Admin Hali Malumotlarni Kiritmadi</p>
          }
        </div>

      </div>
    </div>
  )
}

export default CoursesPage
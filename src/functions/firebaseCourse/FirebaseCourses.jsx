// hooks/useGetUserCourses.js
import { useSelector } from 'react-redux'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { useEffect, useState, useMemo, useCallback } from 'react'
import { db } from '../../firebase/firebase'
import CryptoJS from 'crypto-js'

const useGetUserCourses = () => {
  const secretKey = process.env.REACT_APP_SECRET_KEY
  const userData = JSON.parse(localStorage.getItem('userData')) || undefined
  const decrypt = userData ? CryptoJS.AES.decrypt(userData?.userKey, secretKey).toString(CryptoJS.enc.Utf8) : null

  const { data: userCourses, status: coursesStatus, error: coursesError } = useSelector(state => state.courses)

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCourses = useCallback(() => {
    if (decrypt) {
      const q = query(
        collection(db, 'users_course'),
        where('user_id', '==', parseFloat(decrypt))
      )

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const result = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        
        setCourses(result)
        setLoading(false)
      }, (err) => {
        setError(err.message || 'Unknown error')
        setLoading(false)
      })

      return () => unsubscribe()
    }
  }, [decrypt])

  useEffect(() => {
    const unsubscribe = fetchCourses()
    return unsubscribe
  }, [fetchCourses])

  const allCourses = useMemo(() => {
    return courses.map(({ course_id, due_date, user_progress, id, progress, course_full }) => {
      const match = userCourses?.find(uc => uc.id === course_id)

      return {
        due_date: due_date.toDate().getTime(),
        course_name: match?.course_name || null,
        image_url: match?.image_url,
        course_id,
        user_progress,
        id,
        progress,
        course_full
      }
    })
  }, [courses, userCourses])

  return {
    allCourses,
    loading: loading,
    error: error || coursesError,
  }
}

export default useGetUserCourses
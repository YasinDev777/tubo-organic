// hooks/useGetUserCourses.js
import { useSelector } from 'react-redux'
import { collection, getDocs, query, where } from 'firebase/firestore'
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

  const fetchCourses = useCallback(async () => {
    if (decrypt) {
      try {
        const q = query(
          collection(db, 'users_course'),
          where('user_id', '==', parseFloat(decrypt))
        )
        const querySnapshot = await getDocs(q)
        const result = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        
        setCourses(result)
      } catch (err) {
        setError(err.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }
  }, [decrypt])

  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])

  const allCourses = useMemo(() => {
    return courses.map(({ course_id, due_date }) => {
      const match = userCourses?.find(uc => uc.id === course_id)
      const haveNot = match?.course_folder_name?.includes('/')

      return {
        due_date: due_date.toDate().getTime(),
        course_name: match?.course_name || null,
        course_folder_name: haveNot
          ? match?.course_folder_name
          : `/${match?.course_folder_name}` || null,
        image_url: match?.image_url,
        course_id
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

// hooks/useUserCourses.js
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useEffect, useState, useMemo, useCallback } from 'react'

const GetUsersCourse = (user_id, userCourses) => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCourses = useCallback(async () => {
    try {
      const q = query(
        collection(db, 'users_course'),
        where('user_id', '==', parseFloat(user_id))
      )
      const querySnapshot = await getDocs(q)
      const result = querySnapshot.docs.map(doc => doc.data())
      setCourses(result)
    } catch (err) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [user_id])

  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])


  const allCourses = useMemo(() => {
    return courses.map(({ course_id, due_date }) => {
      const match = userCourses?.find(uc => uc.course_id === course_id)
      const haveNot = match?.course_folder_name?.includes('/')

      return {
        course_id: course_id,
        due_date: due_date.toDate().getTime(),
        course_name: match?.course_name || null,
        course_folder_name: haveNot
          ? match?.course_folder_name
          : `/${match?.course_folder_name}` || null,
        image_url: match?.image_url,
      }
    })
  }, [courses, userCourses])


  return { allCourses, loading, error }
}

export default GetUsersCourse

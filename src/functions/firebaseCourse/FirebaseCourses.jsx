import CryptoJS from 'crypto-js'
import { useSelector } from 'react-redux'
import GetUsersCourse from './GetUsersCourse'

export const GetUserCourses = () => {
    const secretKey = process.env.REACT_APP_SECRET_KEY
    const encrypt = JSON.parse(localStorage.getItem('userData')).userKey
    const decrypt = CryptoJS.AES.decrypt(encrypt, secretKey).toString(CryptoJS.enc.Utf8)
    const { data: courses, status: coursesStatus, error: coursesError } = useSelector(state => state.courses)
    const { allCourses, loading, error } = GetUsersCourse(decrypt, courses)

    return {
        allCourses,
        loading: loading || coursesStatus === 'loading',
        error: error || coursesError,
    }
}
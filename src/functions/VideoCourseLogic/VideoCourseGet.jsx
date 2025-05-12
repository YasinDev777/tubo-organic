import { collection, getDocs, query, } from "firebase/firestore"
import { db } from '../../firebase/firebase'

export const getVideoCourse = async () => {
    const VideoRef = query(collection(db, 'courses_video'))
    const res = await getDocs(VideoRef)
    const data = res.docs.map(doc => ({id: doc.id, ...doc.data()}))
    return data
}
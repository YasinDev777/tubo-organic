import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import CryptoJS from 'crypto-js'

export async function loginUsers(userId) {
    try {
        const q = query(collection(db, 'users'), where('user_id', '==', parseFloat(userId)), limit(1))
        const querySnapshot = await getDocs(q)
        if (querySnapshot.empty) {
            return { success: false, message: `Token noto'g'ri yoki Foydalanuvchi yoq` };
        }
        // user data
        const doc = querySnapshot.docs[0];
        const userData = doc.data();
        const userIdFromDoc = doc.id;
        
        // encrypt
        const secretKey = process.env.REACT_APP_SECRET_KEY
        const encrypt = CryptoJS.AES.encrypt(JSON.stringify(userData.user_id), secretKey).toString()
        
        // save and return
        const saved_data = { name: userData.name, user_id: userIdFromDoc }
        localStorage.setItem('userData', JSON.stringify({ success: true, userKey: encrypt, userData: saved_data }))
        return { success: true, token: userData, user_id: userIdFromDoc, };

    } catch (err) {
        return { success: false, message: 'Kirishda xatolik: ' + err.message };
    }
}
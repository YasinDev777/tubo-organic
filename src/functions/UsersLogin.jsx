import { 
    collection, 
    getDocs, 
    limit, 
    query, 
    where, 
    updateDoc, 
    arrayUnion 
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import CryptoJS from 'crypto-js';
import { browserName, osName, deviceType } from 'react-device-detect';

export async function loginUsers(userId) {
    try {
        // 1. Определяем устройство
        const deviceInfo = `${deviceType === 'mobile' ? '📱' : '💻'} ${browserName} (${osName})`;

        // 2. Ищем пользователя по user_id
        const q = query(
            collection(db, 'users'),
            where('user_id', '==', parseFloat(userId)),
            limit(1)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return { success: false, message: `Token noto'g'ri yoki Foydalanuvchi yo'q` };
        }

        // 3. Получаем документ пользователя
        const doc = querySnapshot.docs[0];
        const userRef = doc.ref;
        const userData = doc.data();

        // 4. Создаем запись входа без даты
        const loginEntry = {
            device: deviceInfo,
            ip: await fetchIP()
        };

        // 5. Добавляем в массив loggedInHistory
        await updateDoc(userRef, {
            loggedInHistory: arrayUnion(loginEntry)
        });

        // 6. Шифруем ID и сохраняем в localStorage
        const secretKey = process.env.REACT_APP_SECRET_KEY;
        const encrypt = CryptoJS.AES.encrypt(
            JSON.stringify(userData.user_id), 
            secretKey
        ).toString();

        localStorage.setItem('userData', JSON.stringify({ 
            success: true, 
            userKey: encrypt, 
            userData: {
                name: userData.name,
                user_id: doc.id
            }
        }));

        return { success: true, token: userData };

    } catch (err) {
        console.error("Login error:", err);
        return { success: false, message: 'Kirishda xatolik: ' + err.message };
    }
}

async function fetchIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        return (await response.json()).ip;
    } catch {
        return 'unknown';
    }
}
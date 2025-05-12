import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getDate = async (due_date, id) => {
    const now = Date.now();
    const diff = due_date - now;

    if (diff <= 0) {
        try {
            await deleteDoc(doc(db, "users_course", id));
            return 'Kurs muddati tugadi';
        } catch (error) {
            console.error("Ошибка при удалении документа: ", error);
            return 'Kurs muddati tugadi';
        }
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return days ? `${days} kun` : hours ? `${hours} soat` : minutes ? `${minutes} daqiqa` : '';
};
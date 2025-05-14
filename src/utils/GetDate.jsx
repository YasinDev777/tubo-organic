import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes } from "date-fns";

export const getDate = async (due_date, id) => {
    const now = new Date();
    const dueDate = new Date(due_date);

    if (dueDate <= now) {
        try {
            await deleteDoc(doc(db, "users_course", id));
            return 'Kurs muddati tugadi';
        } catch (error) {
            console.error("Ошибка при удалении документа: ", error);
            return 'Kurs muddati tugadi';
        }
    }

    // Точный расчёт с date-fns
    const years = differenceInYears(dueDate, now);
    const months = differenceInMonths(dueDate, now) % 12;
    const days = differenceInDays(dueDate, now) % 30;
    const hours = differenceInHours(dueDate, now) % 24;
    const minutes = differenceInMinutes(dueDate, now) % 60;

    // Форматируем строку
    if (years > 0) {
        return `${years} yil${months > 0 ? `, ${months} oy` : ''}`;
    } else if (months > 0) {
        return `${months} oy${days > 0 ? `, ${days} kun` : ''}`;
    } else if (days > 0) {
        return `${days} kun${hours > 0 ? `, ${hours} soat` : ''}`;
    } else if (hours > 0) {
        return `${hours} soat${minutes > 0 ? `, ${minutes} daqiqa` : ''}`;
    } else {
        return `${minutes} daqiqa`;
    }
};
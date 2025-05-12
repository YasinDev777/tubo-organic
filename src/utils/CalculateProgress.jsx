import { doc, updateDoc } from "firebase/firestore"
import { db } from '../firebase/firebase'

function calculateProgress(viewed, total) {
  if (!total || total === 0) return 0;
  return Math.round((viewed / total) * 100);
}

export async function updateUserProgress(courseId, viewed, total) {
  const progress = calculateProgress(viewed, total);

  const userCourseRef = doc(db, "users_course", courseId);

  try {
    await updateDoc(userCourseRef, {
      progress
    });
    console.log("Прогресс обновлён:", progress);
  } catch (error) {
    console.error("Ошибка при обновлении прогресса:", error);
  }
}

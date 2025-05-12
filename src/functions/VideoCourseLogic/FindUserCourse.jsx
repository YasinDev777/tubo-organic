import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from '../../firebase/firebase';

export const updateUserProgress = async (course_id, modulName, lessonName, modulIndex, lessonIndex) => {

  try {
    const docRef = doc(db, 'users_course', course_id);

    await updateDoc(docRef, {
      user_progress: arrayUnion({
        modul: modulName,
        lesson: lessonName,
        modulIndex,
        lessonIndex
      })
    });

  } catch (error) {
    console.error('Ошибка обновления прогресса:', error);
  }
};

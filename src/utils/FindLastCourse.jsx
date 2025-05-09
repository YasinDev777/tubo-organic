export const FindLastCourse = (data, id) => {
    if (!id) return null;
    const result = data.find((item) => item.course_id === id)
    localStorage.setItem('currentCourse', id)
    return result
}
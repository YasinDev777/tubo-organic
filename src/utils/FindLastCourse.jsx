export const FindLastCourse = (data, course_name) => {
    if (!course_name) return null;
    const result = data.find((item) => item.course_name === course_name)
    localStorage.setItem('currentCourse', course_name)
    return result
  }
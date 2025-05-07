import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesPage = () => {
  const { id } = useParams()
  return (
    <div>CoursesPage {id}</div>
  )
}

export default CoursesPage
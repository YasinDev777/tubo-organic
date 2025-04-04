import React from 'react'
import { useParams } from 'react-router-dom'

const FullCourse = () => {
    const { id } = useParams()
  return (
    <div>FullCourse {id}</div>
  )
}

export default FullCourse
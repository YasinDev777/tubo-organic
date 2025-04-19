import React from 'react'
import BoughtCourses from './LogedInMain/BoughtCourses'
import ProgressCourses from './LogedInMain/ProgressCourses'

const LogedInMain = () => {
  return (
    <div className='logedInMain'>
        <BoughtCourses />
        <ProgressCourses />
    </div>
  )
}

export default LogedInMain
import React, { useState } from 'react'
import Header from './main/Header'
import IntroCourse from './main/IntroCourse'
import { handleMouseMove } from '../functions/MouseMove'
import WhyCourses from './main/WhyCourses'
import AboutPov from './main/AboutPov'

const Main = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="main" onMouseMove={(e) => handleMouseMove(e, setPosition)}>
      <Header position={position} />
      <IntroCourse />
      <WhyCourses />
      <AboutPov />
    </div>
  )
}

export default Main
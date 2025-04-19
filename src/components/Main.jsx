import React, { useCallback, useState } from 'react'
import Header from './main/Header'
import IntroCourse from './main/IntroCourse'
import { handleMouseMove } from '../functions/MouseMove'
import WhyCourses from './main/WhyCourses'
import AboutPov from './main/AboutPov'
import FooterM from './main/FooterM'

const Main = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMove = useCallback((e) => {
    handleMouseMove(e, setPosition)
  }, [])
  return (
    <>
      <div className="main" onMouseMove={handleMove}>
        <Header position={position} />
        <IntroCourse />
        <WhyCourses />
        <AboutPov />
      </div>
      <FooterM />
    </>
  )
}

export default Main
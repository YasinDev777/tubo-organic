import { useSelector } from "react-redux";
import React from "react";
import Header from './main/Header'
import WhichOne from './main/WhichOne'
import AboutPov from  './main/AboutPov'
import CoursesTarif from './main/coursesTarif'
import Feedback from './main/Feedback'
import BonusVideo from './main/BonusVideo'
import Footer from './main/Footer'
import PopUp from './main/PopUp'
import Paper from './main/Paper'

const Main = () => {
  const isOpen = useSelector((state) => state.popUp.isOpen)

  return (
    <div className='main'>
        <Header />
        <WhichOne />
        <AboutPov />
        <CoursesTarif />
        <Feedback />
        <BonusVideo />
        <Footer />

      {isOpen ?
        <PopUp /> : null
      }
    </div>
  )
}

export default Main
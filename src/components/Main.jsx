import React from "react";
import Header from './main/Header';
import WhichOne from "./main/WhichOne";
import Paper from "./main/Paper";
import AboutPov from './main/AboutPov';
import CoursesTarif from "./main/coursesTarif";
import Feedback from './main/Feedback';
import BonusVideo from './main/BonusVideo'
import Footer from "./main/Footer";
import PopUp from "./main/PopUp";
import { useSelector } from "react-redux";
const Main = () => {
  const isOpen = useSelector((state) => state.popUp.isOpen)
  return (
    <div className='main'>
      <Header />
      <Paper />
      <WhichOne />
      <AboutPov />
      <CoursesTarif />
      <Feedback />
      <BonusVideo />
      <Footer />
      {isOpen ? <PopUp /> : null }
    </div>
  )
}

export default Main
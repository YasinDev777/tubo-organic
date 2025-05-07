import { useSelector } from "react-redux";
import React, { lazy, Suspense } from "react";
import Loader from "./Loader";

const Main = () => {
  const isOpen = useSelector((state) => state.popUp.isOpen)
  const Header = lazy(() => import('./main/Header'));
  const Paper = lazy(() => import('./main/Paper'));
  const WhichOne = lazy(() => import('./main/WhichOne'));
  const AboutPov = lazy(() => import('./main/AboutPov'));
  const CoursesTarif = lazy(() => import('./main/coursesTarif'));
  const Feedback = lazy(() => import('./main/Feedback'));
  const BonusVideo = lazy(() => import('./main/BonusVideo'));
  const Footer = lazy(() => import('./main/Footer'));
  const PopUp = lazy(() => import('./main/PopUp'));

  return (
    <div className='main'>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>

      <Suspense fallback={''}>
        <Paper />
      </Suspense>

      <Suspense fallback={''}>
        <WhichOne />
      </Suspense>

      <Suspense fallback={''}>
        <AboutPov />
      </Suspense>

      <Suspense fallback={''}>
        <CoursesTarif />
      </Suspense>

      <Suspense fallback={''}>
        <Feedback />
      </Suspense>

      <Suspense fallback={''}>
        <BonusVideo />
      </Suspense>

      <Suspense fallback={''}>
        <Footer />
      </Suspense>

      {isOpen ? <PopUp /> : null}
    </div>
  )
}

export default Main
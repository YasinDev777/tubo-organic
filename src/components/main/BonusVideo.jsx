import React from 'react'
import play from '../../assets/vectors/circle-play.png'
import video from '../../assets/videos/video-rotate.mp4'
import { useDispatch } from 'react-redux'
import { openPopUp } from '../../redux/slices/PopUpSlice'
const BonusVideo = () => {
  const dispatch = useDispatch()
  return (
    <div className='BonusVideo'>
        <div className="BonusVideo__text">
            <h1>Bonus <span>video-dars</span></h1>
            <p>Hali ham shubhangiz bormi!? Bizda natijalar gapiradi!</p>
        </div>
        <div className="BonusVideo__video">
            <p>Siz uchun maxsus video dars!</p>
            <h1>Ko‘ring, <br /> Sinab ko‘ring</h1>
            <button onClick={() => dispatch(openPopUp())}><img src={play} alt='play' /></button>
            <video src={video} muted autoPlay loop></video>
        </div>
    </div>
  )
}

export default BonusVideo
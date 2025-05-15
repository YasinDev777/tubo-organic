import React, { useState } from 'react'
import play from '../../assets/vectors/circle-play.png'
import video from '../../assets/videos/BonusVideo.MP4'
import { useDispatch } from 'react-redux'
import { openPopUp } from '../../redux/slices/PopUpSlice'

const BonusVideo = () => {
  const dispatch = useDispatch()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <div className='BonusVideo'>
      <div className="BonusVideo__text">
        <h1>Bonus <span>video-dars</span></h1>
        <p>Hali ham shubhangiz bormi!? Bizda natijalar gapiradi!</p>
      </div>

      <div className="BonusVideo__video" style={{border: isVideoLoaded ? 'none' : 'calc(var(--index)*0.15) solid var(--text-color)'}}>
        <p style={{color: isVideoLoaded ? 'var(--any-text-color)' : 'var(--text-color)'}}>
          Siz uchun maxsus video dars!
        </p>
        <h1 style={{color: isVideoLoaded ? 'var(--any-text-color)' : 'var(--text-color)'}}>
          Ko‘ring, <br /> Sinab ko‘ring
        </h1>

        <button
          onClick={() => dispatch(openPopUp())}
          style={{
            filter: isVideoLoaded ? 'none' : 'drop-shadow(0 0 5px black)'
          }}
        >
          <img src={play} alt='play' loading='lazy' />
        </button>
        <video
          src={video}
          muted
          autoPlay
          loop
          onCanPlayThrough={() => setIsVideoLoaded(true)}
        />
      </div>
    </div>
  )
}

export default BonusVideo

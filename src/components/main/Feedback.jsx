import React from 'react'
import feedBackImg from '../../assets/backgrounds/feedback.png'
const Feedback = () => {
  return (
    <div className='Feedback'>
        <div className="Feedback__text">
            <h1>O‘QUVCHILARIM <span>FIKRLARI</span></h1>
            <p>Hali ham shubhangiz bormi!? Bizda natijalar gapiradi!</p>
        </div>
        <div className="Feedback__image1">
            <div className="Feedback__image1_img"><img src={feedBackImg} alt="feedBackImg" /></div>
            <div className="Feedback__image1_img"><img src={feedBackImg} alt="feedBackImg" /></div>
            <div className="Feedback__image1_img"><img src={feedBackImg} alt="feedBackImg" /></div>
            <div className="Feedback__image1_img"><img src={feedBackImg} alt="feedBackImg" /></div>
        </div>
        <div className="Feedback__image2">
            <div className="Feedback__image2_img"><img src={feedBackImg} alt="feedBackImg" /></div>
            <div className="Feedback__image2_img"><img src={feedBackImg} alt="feedBackImg" /></div>
            <div className="Feedback__image2_img"><img src={feedBackImg} alt="feedBackImg" /></div>
            <div className="Feedback__image2_img"><img src={feedBackImg} alt="feedBackImg" /></div>
        </div>
    </div>
  )
}

export default Feedback
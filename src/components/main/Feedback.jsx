import React from 'react'
import feedBackImg1 from '../../assets/backgrounds/feedback1jpg.jpg'
import feedBackImg2 from '../../assets/backgrounds/feedback2jpg.jpg'
import feedBackImg3 from '../../assets/backgrounds/feedback3.jpg'
import feedBackImg4 from '../../assets/backgrounds/feedback4.jpg'
import feedBackImg5 from '../../assets/backgrounds/feedback5.jpg'
import feedBackImg6 from '../../assets/backgrounds/feedback6.jpg'
import feedBackImg7 from '../../assets/backgrounds/feedback7.jpg'
import feedBackImg8 from '../../assets/backgrounds/feedback8.jpg'
const Feedback = () => {
  return (
    <div className='Feedback'>
        <div className="Feedback__text">
            <h1>O‘QUVCHILARIM <span>FIKRLARI</span></h1>
            <p>Hali ham shubhangiz bormi!? Bizda natijalar gapiradi!</p>
        </div>
        <div className="Feedback__image1">
            <div className="Feedback__image1_img"><img src={feedBackImg1} alt="feedBackImg" loading='lazy' /></div>
            <div className="Feedback__image1_img"><img src={feedBackImg2} alt="feedBackImg" loading='lazy' /></div>
            <div className="Feedback__image1_img"><img src={feedBackImg3} alt="feedBackImg" loading='lazy' /></div>
            <div className="Feedback__image1_img"><img src={feedBackImg4} alt="feedBackImg" loading='lazy' /></div>
        </div>
        <div className="Feedback__image2">
            <div className="Feedback__image2_img"><img src={feedBackImg5} alt="feedBackImg" loading='lazy' /></div>
            <div className="Feedback__image2_img"><img src={feedBackImg6} alt="feedBackImg" loading='lazy' /></div>
            <div className="Feedback__image2_img"><img src={feedBackImg7} alt="feedBackImg" loading='lazy' /></div>
            <div className="Feedback__image2_img"><img src={feedBackImg8} alt="feedBackImg" loading='lazy' /></div>
        </div>
    </div>
  )
}

export default Feedback
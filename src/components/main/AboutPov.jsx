import React from 'react'
import povImage from '../../assets/backgrounds/povImage.png'
import check from '../../assets/vectors/check-check.png'
const AboutPov = () => {
  return (
    <div className='AboutPov'>
        <div className="about__text">
            <h1>kurs <span>muallifi haqida</span></h1>
            <p>Organik konditer, tabiba</p>
        </div>
        <div className="about__container">
            <div className="about__container2">
                <div className="pov__image">
                    <img src={povImage} alt="povImage" />
                </div>
                <div className="pov__info">
                    <div className="info__title">
                        <i>-Dildora Shukurullayevna</i>
                        <p>Konditer • Tabiba</p>
                    </div>
                    <div className="info__subtitle">
                        <div className="subtitle">
                            <p> <img src={check} alt="check" /> “Tubo Organic” brendi, Tubo Maktabi, Onalar Klubi va bir nechta kurslar asoschisi.</p>
                        </div>
                        <div className="subtitle">
                            <p><img src={check} alt="check" /> Ona va bola salomatligini yaxshilash bo’yicha mutaxassis</p>
                        </div>
                        <div className="subtitle">
                            <p><img src={check} alt="check" /> 17 yillik tajribaga ega konditer hamda tabiba</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPov
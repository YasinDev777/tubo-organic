import React from 'react'
import Qiz1 from '../../assets/backgrounds/qis1.png'
import Qiz2 from '../../assets/backgrounds/qis2.png'
import Qiz3 from '../../assets/backgrounds/qis3.png'
import Paper from './Paper'

const WhichOne = () => {
  return (
    <div className='whichOne'>
        <div className="whichOne__tex">
            <h1>QAYSI BIRI <span>SIZGA MOS?</span></h1>
            <p>Organik, shakarsiz va ozishga yordam beruvchi shirinliklar uchun <span>maxsus dastur</span></p>
        </div>
        <div className="whichOne__cards">
            <div className="red-line"></div>
            <div className="whichOne__cards__container">
                <div className="whichOne__card">
                    <div className="whichOne__card-text">
                        <h1>01</h1>
                        <p>Shirinlikdan voz kechmay, ozishni xohlayman</p>
                    </div>
                    <div className="whichOne__card-textImg">
                        <p>– Organik va foydali alternativalar bilan ozish  yanada zavqliroq.</p>
                        <img src={Qiz1} alt="Qiz1" loading='lazy' />
                    </div>
                </div>

                <div className="whichOne__card">
                    <div className="whichOne__card-text">
                        <h1>02</h1>
                        <p>Yengil va tetik bo'lish orzuyim</p>
                    </div>
                    <div className="whichOne__card-textImg">
                        <p>– Kam kaloriyali, shakarsiz shirinliklar bilan o'zingizni yengilroq va energiyali his qiling.</p>
                        <img src={Qiz2} alt="Qiz2" loading='lazy' />
                    </div>
                </div>

                <div className="whichOne__card">
                    <div className="whichOne__card-text">
                        <h1>03</h1>
                        <p>Organik sog‘lom turmush tarzi qiyin</p>
                    </div>
                    <div className="whichOne__card-textImg">
                        <p>– Tanangizni toza energiya bilan to‘ldiring va o'zingizni har kuni baxtli his eting.</p>
                        <img src={Qiz3} alt="Qiz3" loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhichOne
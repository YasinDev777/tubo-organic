import React from 'react'
import logo from '../../assets/logo/logo.png'
import calendarIcon from '../../assets/vectors/calendar-days.png'
import radioIcon from '../../assets/vectors/radio.svg'
import yellowStar from '../../assets/vectors/yellow-star.svg'
import iceCream from '../../assets/vectors/purepng.com-ice-creamfood-ice.svg'
import greenStar from '../../assets/vectors/thin.svg'
import { Link } from 'react-router-dom'
import Paper from './Paper'
const Header = () => {

    return (
        <div className='header'>
            <div className="hero__header">
                <div className="nav">
                    <div className="logo">
                        <img src={logo} alt="logo" loading='lazy' />
                    </div>
                    <div className="date">
                        <div className="rad">
                            <img src={calendarIcon} alt="calendar-icon" loading='lazy' />
                        </div>
                        <div className="date-tex">
                            <p>10-may <span>|</span> 20:00 da</p>
                            <i>Onlayn</i>
                        </div>
                    </div>
                </div>
                <div className="header__intro">
                    <div className="header__intro__container">
                        <div className="live-presentation">
                            <div className="radio-icon">
                                <img src={radioIcon} alt="radio icon" loading='lazy' />
                            </div>
                            <p>ONLAYN TAQDIMOT</p>
                        </div>
                        <div className="deadline">
                            <div className="wrapper">
                                <h3>ATIGI 15 KUN ICHIDA</h3>
                            </div>
                            <div className="deadline__star">
                                <img src={yellowStar} alt="yellowStar" loading='lazy' />
                            </div>
                        </div>
                        <h1 className='intro__h1'>ORGANIK TAOMLAR BO‘YICHA MUTAXASSISGA AYLANING!</h1>
                        <div className="ad-intro">
                            <img src={iceCream} alt="iceCream" />
                            <p><span>TABIIY MUZQAYMOQ kursini</span> bonusga oling!</p>
                        </div>
                        <div className="header__buttons">
                        <Link to='https://t.me/tubo_manager' target='__blank'>
                                <button className='header__btn1'>
                                    <p>
                                        JOYNI BAND QILISH
                                    </p>
                                </button>
                            </Link>
                            <Link to='/courses'>
                                <button className='header__btn2'>KURSLARNI KO’RISH</button>
                            </Link>
                        </div>
                    </div>
                    <div className="header__intro__image"></div>
                    <div className="shadow__header"></div>
                    <div className="greenStar">
                        <img src={greenStar} alt="greenStar" loading='lazy' />
                    </div>
                    <div className="intro__texts">
                        <i>-Dildora Shukurullayevna</i>
                        <p>17 yillik tajribaga ega <span>konditer</span></p>
                    </div>
                </div>
                <Paper />
            </div>
        </div>
    )
}

export default Header
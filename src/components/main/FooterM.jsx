import React from 'react'
import calendarIcon from '../../assets/calendar.png'
import { Link } from 'react-router-dom'
const FooterM = () => {
    return (
        <div className='footer-div'>
            <div className='footerM'>
                <div className="f-text">
                    <div className="intro-div">
                        <div className="ico">
                            <img src={calendarIcon} alt="icon of calendar" />
                        </div>
                        <h3>Hozirdan boshlang</h3>
                    </div>
                    <h1>Xamirturushsiz non – bu oddiy, foydali va juda mazali!</h1>
                    <Link to='/courses'>
                        <button>Kurslarni korish</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FooterM
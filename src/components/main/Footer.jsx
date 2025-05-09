import React from 'react'
import logo from '../../assets/logo/logo2.png'
import { FaYoutube, FaTelegram, FaInstagram } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='landing__footer'>
        <div className="landing__footer__container">
            <div className="landing__footer__container2">
                <div className="landing__footer__intro">
                    <div className="logo">
                        <img src={logo} alt="logo" loading='lazy' />
                    </div>
                    <Link to='/login'>
                        <button>Platformaga kirish <CiLogin /></button>
                    </Link>
                    <p>TUBO ORGANIC. <br /> 2025 © Barcha huquqlar himoyalangan.</p>
                </div>
                <div className="landing__footer__questions">
                    <h1>HALI HAM SAVOLLARINGIZ QOLDIMI?</h1>
                    <button>BIZ BILAN BO’GLANING</button>
                    <div className="icons">
                        <div className="rad2">
                            <FaYoutube />
                        </div>
                        <Link to='https://t.me/tubo_manager' target='__blank'>
                            <div className="rad2">
                                <FaTelegram />
                            </div>
                        </Link>
                        <Link to='https://www.instagram.com/tubo_organik?igsh=YjhpbDQ1cHJuOW41' target='__blank'>
                            <div className="rad2">
                                <FaInstagram />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
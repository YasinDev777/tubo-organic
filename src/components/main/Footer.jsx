import React from 'react'
import logo from '../../assets/logo/logo2.png'
import { FaYoutube, FaTelegram, FaInstagram } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='landing__footer'>
        <div className="landing__footer__container">
            <div className="landing__footer__container2">
                <div className="landing__footer__intro">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <button>Platformaga kirish <CiLogin /></button>
                    <p>TUBO ORGANIC. <br /> 2025 © Barcha huquqlar himoyalangan.</p>
                </div>
                <div className="landing__footer__questions">
                    <h1>HALI HAM SAVOLLARINGIZ QOLDIMI?</h1>
                    <button>BIZ BILAN BO’GLANING</button>
                    <div className="icons">
                        <div className="rad">
                            <FaYoutube />
                        </div>
                        <div className="rad">
                            <FaTelegram />
                        </div>
                        <div className="rad">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
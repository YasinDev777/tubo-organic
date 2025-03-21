import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTelegram2Fill } from "react-icons/ri";
import logo from '../assets/tubo-organic.png'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className="icons">
                <Link to='https://www.instagram.com/tubo_organik?igsh=YjhpbDQ1cHJuOW41' target='_blank'>
                    <div className="rad">
                        <PiInstagramLogoFill />
                    </div>
                </Link>
                <Link>
                    <div className="rad">
                        <FaYoutube />
                    </div>
                </Link>
                <Link to='https://t.me/Tubo_organik' target='_blank'>
                    <div className="rad">
                        <RiTelegram2Fill />
                    </div>
                </Link>
            </div>
            <div className="logo">
                <Link to='/'>
                    <div className="log">
                        <img src={logo} alt="logo" />
                    </div>
                    <h3>Tubo Organic</h3>
                </Link>
            </div>
            <div className="links">
                <button className='btn1'>Kurslar</button>
                <button className='btn2'>Kirish</button>
            </div>
        </div>
    )
}

export default Navbar
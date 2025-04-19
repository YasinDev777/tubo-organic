import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTelegram2Fill } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from '../assets/tubo-organic.png'
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [state, setState] = useState(false);
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setUserData(JSON.parse(storedData).userData);
        }
    }, [navigate]);

    useEffect(() => {
        const body = document.querySelector('body')

        if (state) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }
    }, [state])

    return (
        <>
            <div className='nav'>
                <div className="logo-n">
                    <Link to='/'>
                        <div className="log">
                            <img src={logo} alt="logo" />
                        </div>
                        <h3>Tubo Organic</h3>
                    </Link>
                </div>
                <nav>
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
                        <Link to='courses'>
                            <button className='btn1'>Kurslar</button>
                        </Link>                        
                        {
                            !userData ? 
                            <Link to='login'>
                                <button className='btn2'>Kirish</button>
                            </Link>
                            : <h4>{userData.name}</h4>
                        }
                    </div>
                </nav>
                <div className='auth-action'>
                    {
                        userData ?
                        <h4>{userData.name}</h4>
                        : null
                    }
                    <HiMenuAlt3 className="burgerMenu" onClick={() => setState(!state)} />
                </div>
            </div>

            <div className={`n-div ${state ? 'n-div-active' : ''}`} onClick={() => setState(!state)}>
                <div className={`nav-m ${state ? 'nav-m-active' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <div className="log-div">
                        <div className="logo" onClick={() => setState(!state)}>
                            <Link to='/'>
                                <div className="log">
                                    <img src={logo} alt="logo" />
                                </div>
                                <h3>Tubo Organic</h3>
                            </Link>
                        </div>
                        <FaXmark onClick={() => setState(!state)} />
                    </div>
                    <div className="div-n">
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
                        <div className="links">
                            <Link to='/courses'>
                                <button className='btn1' onClick={() => setState(!state)}>Kurslar</button>
                            </Link>
                            {
                                userData ? null :
                                <Link to='/login'>
                                    <button className='btn2' onClick={() => setState(!state)}>Kirish</button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
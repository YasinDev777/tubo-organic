import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUsers } from '../functions/UsersLogin';
import { IoMdArrowRoundBack } from "react-icons/io";
import Carousel from '../components/Login/Carusel';
const Login = () => {
  const [status, setStatus] = useState('Tokenni kiriting');
  const [statusColor, setStatusColor] = useState('');
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()
  
  const handleLogin = async () => {
    const res = await loginUsers(inputValue);
    if (res.success) {
      setStatusColor(null)
      setStatus(`Hush kelibsiz ${res.token.name}`)
      navigate('/')
    } else {
      setStatus(JSON.stringify(res.message).replace(/^"|"$/g, ''));
      setStatusColor('#e53935')
    }
  };
  
  useEffect(() => {
    const stored = localStorage.getItem('userData')
    if (stored) navigate('/')
  }, [navigate])
  
  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Enter') handleLogin()
    }
    window.addEventListener('keyup', listener)
    return () => window.removeEventListener('keyup', listener)
  }, [inputValue])
  
  return (
    <div className='login'>
      <div className="login__container">
        <div className="back-button" onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack />
        </div>
        <Carousel className="Carousel" />
        <div className="login-div">
          <h1>Kirish</h1>
          <div>
            <label htmlFor="token" style={statusColor ? { color: statusColor } : undefined}>{status}</label>
            <input 
            type="text"
            id='token'
            style={statusColor ? { borderColor: statusColor } : undefined}
            onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Kirish</button>
          <p>Token olish uchun <Link to='https://t.me/tubo_manager'>Admin</Link> bilan bog'laning</p>
        </div>
      </div>
    </div>
  )
}

export default Login
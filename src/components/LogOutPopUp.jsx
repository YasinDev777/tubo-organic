import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogOutPopUp = ({ active, setIsActive }) => {
    const navigate = useNavigate()
    useEffect(() => {
        const body = document.querySelector('body')
        if (active) {
            body.style.overflow = 'hidden'
        }else {
            body.style.overflow = 'auto'
        }
    }, [active])
    
    const logOutFunc = () => {
        localStorage.getItem('userData')
        localStorage.removeItem('userData')
        navigate('/')
        setIsActive(!active)
    }

  return (

<div 
  className='BuyPopUp' 
  style={{ 
    display: active ? 'flex' : 'none',
    backdropFilter: 'blur(4px)'
  }} 
  onClick={() => setIsActive(false)}
>
  <div 
    className="BuyPopUp__container" 
    onClick={(e) => e.stopPropagation()}
    style={{
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    }}
  >
    <div className="BuyPopUp__container__text">
      <h1>
        Platformadan chiqishni tasdiqlaysizmi?
      </h1>
      
      <p>
        Agar rostdan ham chiqmoqchi bo‘lsangiz,<br />
        <strong>"Chiqish"</strong> tugmasini bosing.
      </p>
    </div>

    <div className="BuyPopUp__buttons">
      <button onClick={() => setIsActive(false)} className='btn11'>
        Bekor qilish
      </button>
      <button onClick={logOutFunc} className='btn22'>
        Chiqish
      </button>
    </div>
  </div>
</div>

  )
}

export default LogOutPopUp
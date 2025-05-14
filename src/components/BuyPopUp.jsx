import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BuyPopUp = ({ active, setIsActive }) => {
    const navigate = useNavigate()
    useEffect(() => {
        const body = document.querySelector('body')
        if (active) {
            body.style.overflow = 'hidden'
        }else {
            body.style.overflow = 'auto'
        }
    }, [active])
    
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
        Yana bir qadam ⚡ <br />
        Kursni ko'rish uchun ro'yxatdan o'ting!
      </h1>
      
      <p>
        Pastdagi tugmani bosing va telegram orqali admin bilan bog'laning!
      </p>
    </div>

    <div className="BuyPopUp__buttons">
      <button className='btn11' onClick={() => setIsActive(false)}>
        Bekor qilish
      </button>
      <Link to='https://t.me/tuboadmin2025'>
        <button className='btn22'>
          Bog'lanish
        </button>
      </Link>
    </div>
  </div>
</div>

  )
}

export default BuyPopUp
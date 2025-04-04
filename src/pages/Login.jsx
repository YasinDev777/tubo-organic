import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-div">
        <h1>Kirish</h1>
        <div>
          <label htmlFor="token">Tokenni kiriting</label>
          <input type="text" id='token' />
        </div>
        <button>Kirish</button>
        <p>Token olish uchun <Link to='https://t.me/tubo_manager'>Admin</Link> bilan bog'laning</p>
      </div>
    </div>
  )
}

export default Login
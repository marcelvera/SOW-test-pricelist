import React, {useState} from 'react'
import "../styles/Login.css"

const InputLogin = ({label, type, name, placeholder, isPassword = false}) => {

  const [showPassword, setShowPassword] = useState(false)

  const inputType = isPassword ? (showPassword ? "text" : "password") : type

  return (
    <div className='login-card__input'>
      <label className='login-page__label' htmlFor={name}>{label}</label>
      <div>
        <input className='login-page__input' type={inputType} placeholder={placeholder}
               name={name} required/>

        {isPassword && (
          <button type='button' onClick={() => setShowPassword(!showPassword)} >
            {showPassword ? "ver" : "no"}
          </button>
        )}
      </div>
    </div>
  )
}

export default InputLogin
import React, {useState} from 'react'
import "../styles/Login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'


const InputLogin = ({label, type, name, placeholder, isPassword = false}) => {

  const [showPassword, setShowPassword] = useState(false)

  const inputType = isPassword ? (showPassword ? "text" : "password") : type

  return (
    <div className='login-card__input'>
      <label className='login-page__label' htmlFor={name}>{label}</label>
      <div className='login-input__box'>
        <input className='login-page__input' type={inputType} placeholder={placeholder}
               name={name} required/>
        
        {isPassword && (
          <button className='login-page__icon' type='button' onClick={() => setShowPassword(!showPassword)} >
            {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEye} />}
          </button>
        )}
      </div>
    </div>
  )
}

export default InputLogin
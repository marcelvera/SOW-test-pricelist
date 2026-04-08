import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const InputDashboard = ({name, type, placeholder, icon, value, onChange, onBlur}) => {
  return (
    <div className='dashboard-input__group'>
        <input className={`dashboard-input
          ${name === 'camp' ? 'dashboard-camp': ''}
          ${name === 'dashboard-input__price' ? 'dashboard-input__price' :''}
        `}
        type={type} name={name} placeholder={placeholder} value={value || ''} onChange={onChange} onBlur={onBlur}/>
        {icon && <FontAwesomeIcon className='dashboard-input__icon' icon={icon} />}
    </div>
  )
}

export default InputDashboard
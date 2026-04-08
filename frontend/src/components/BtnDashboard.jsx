import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BtnDashboard = ({name, icon=null, opSimple=false}) => {
  return (
    <div>
        <button className='dashboard-btn'>
            {name}
            <FontAwesomeIcon className={opSimple ? 'dashboard-icon__simple' : 'dashboard-btn__icon'} icon={icon}  />
        </button>
    </div>
  )
}

export default BtnDashboard
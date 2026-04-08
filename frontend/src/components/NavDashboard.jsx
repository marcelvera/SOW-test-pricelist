import React from 'react'
import userimg from '../assets/user.svg'
import SetLang from './SetLang'
import '../styles/Dashboard.css'

const NavDashboard = () => {
  return (
    <nav className='nav-dashboard'>
        <div className='nav-dashboard__card'>
            <img className='nav-dashboard__img' src={userimg} alt="" />
            <span className='nav-dashboard__active'></span>
            <div className='nav-dashboard__user'>
                <h3 className='nav-dashboard__h3'>Name</h3>
                <h4 className='nav-dashboard__h4'>worked</h4>
            </div>
        </div>

        <SetLang />
    </nav>
  )
}

export default NavDashboard
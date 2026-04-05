import React from 'react'
import '../styles/Login.css'

const FooterLogin = () => {
  return (
    <footer className='login-footer'>
      <div className='login-footer__card'>
        <h2 className='login-footer__title'>123 Fakturera</h2>
        <ul className='login-footer__ul'>
          <li className='login-footer__li'>Acept</li>
          <li className='login-footer__li'>Acept</li>
          <li className='login-footer__li'>Acept</li>
        </ul>
      </div>
      <hr className='login-footer__hr'/>
      <div className='login-footer__reserved'>
        <p className='login-footer__p'>© Lättfaktura, CRO no. 638537, 2025. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterLogin
import React, {useContext} from 'react'
import '../styles/Login.css'
import { LenguageContext } from '../context/LanguageContext'




const FooterLogin = () => {

  const {setLang, valueText} = useContext(LenguageContext)

  return (
    <footer className='login-footer'>
      <div className='login-footer__card'>
        <h2 className='login-footer__title'>123 Fakturera</h2>
        <ul className='login-footer__ul'>
          <li className='login-footer__li'>{valueText('btn-home')}</li>
          <li className='login-footer__li'>{valueText('btn-order')}</li>
          <li className='login-footer__li'>{valueText('btn-contact')}</li>
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
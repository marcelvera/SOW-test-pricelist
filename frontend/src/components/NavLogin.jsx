import React, {useContext, useState} from 'react'
import "../styles/Login.css"
import { LenguageContext } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL, faXmark } from '@fortawesome/free-solid-svg-icons'
import SetLang from './SetLang';

const NavLogin = () => {
  
  const {setLang, valueText} = useContext(LenguageContext)

  const btn = [
        {id:"1", key:"btn-home"},
        {id:"2", key:"btn-order"},
        {id:"3", key:"btn-customers"},
        {id:"4", key:"btn-about"},
        {id:"5", key:"btn-contact"},
  ];
  
  const [isMenuMobile, setIsMenuMobileOpen] = useState(false)

  function openMenuMobile (){
    setIsMenuMobileOpen(!isMenuMobile)
  }

  return (
    <nav className='nav-page'>
      <div className='nav-page__card'>

        {/* Navbar Mobile */}
        <div className='nav-burger' onClick={openMenuMobile}>
          <FontAwesomeIcon icon={faBars} className=""/>
          <ul className='nav-burger__ul'>
            {isMenuMobile && (btn.map((arg) => (
                  <li className="nav-burger__li" key={arg.id}>{valueText(arg.key)}</li>
              )))}
          </ul>
        </div>

        {/* Navbar Desktop */}
        <img src="https://storage.123fakturera.se/public/icons/diamond.png" alt="" className='nav-page__img'/>
        <ul className='nav-page__ul'>
            {btn.map((arg) => (
                <li className="nav-page__li" key={arg.id}>{valueText(arg.key)}</li>
            ))}
            
            <SetLang />

        </ul>

      </div>
        
    </nav>
  )
}

export default NavLogin
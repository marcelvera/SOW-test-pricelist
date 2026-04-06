import React, {useContext, useState} from 'react'
import "../styles/Login.css"
import { LenguageContext } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavLogin = () => {

  const languages = [
    { id: 'content_en', label: 'English', img: 'https://storage.123fakturere.no/public/flags/GB.png' },
    { id: 'content_sw', label: 'Svenska', img: 'https://storage.123fakturere.no/public/flags/SE.png' }
  ];

  const btn = [
        {id:"1", key:"btn-home"},
        {id:"2", key:"btn-order"},
        {id:"3", key:"btn-customers"},
        {id:"4", key:"btn-about"},
        {id:"5", key:"btn-contact"},
  ];
  
  const [isMenuMobile, setIsMenuMobileOpen] = useState(false)
  const {lang, setLang, valueText} = useContext(LenguageContext)
  const [flag, setFlag] = useState(false)

  const selectedLang = languages.find(l => l.id === lang) || languages[0];

  const handleLang = (newLang) => {
    localStorage.setItem('user_lang', newLang)
    setLang(newLang)
    setFlag(!flag)
  }

  function showLang (){
    setFlag(!flag)
  }

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
            <div className='nav-flag' onClick={showLang}>
              <div className='nav-flag__card'>
                <p className='nav-flag__li'>{selectedLang.label}</p>
                <img className='nav-flag__img' src={selectedLang.img} alt={selectedLang.label} />
              </div>

              {flag && (
                  <div className='nav-flag__menu'>
                    {
                      languages.map(data => (
                        <div key={data.id} className='nav-flag__option' onClick={() => handleLang(data.id)}>
                          <label htmlFor="" >{data.label}</label>
                          <img className='nav-flag__img' src={data.img} alt={data.label} />
                        </div>
                      ))
                    }
                    
                  </div>)}

            </div>
        </ul>
      </div>
        
    </nav>
  )
}

export default NavLogin
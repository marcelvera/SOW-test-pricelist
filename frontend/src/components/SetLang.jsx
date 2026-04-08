import React, {useContext, useState} from 'react'
import { LenguageContext } from '../context/LanguageContext';
import "../styles/Login.css"

const SetLang = () => {
  
  const languages = [
    { id: 'content_en', label: 'English', img: 'https://storage.123fakturere.no/public/flags/GB.png' },
    { id: 'content_sw', label: 'Svenska', img: 'https://storage.123fakturere.no/public/flags/SE.png' }
  ];

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

  return (
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
  )
}

export default SetLang
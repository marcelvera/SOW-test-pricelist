import React, {useContext} from 'react';
import '../styles/Login.css';
import '../components/NavLogin'
import NavLogin from '../components/NavLogin';
import InputLogin from '../components/InputLogin';
import BtnLogin from '../components/BtnLogin';
import FooterLogin from '../components/FooterLogin';
import { LenguageContext } from '../context/LanguageContext';

function Login() {

  const {setLang, valueText} = useContext(LenguageContext)

  return (
    <div className='login-page'>

        <NavLogin />
        <div className='login-page__card'>
            <div className='login-page__box'>
                <header className='login-page__header'>
                    <h1 className='login-page__title'>{valueText('title-login')}</h1>
                </header>

                <form className='login-page__form'>
                    <InputLogin label={valueText('label-email')} type="email" 
                            name="email" placeholder="email address"/>

                    <InputLogin label={valueText('label-password')} isPassword={true} type="password" 
                        name="password" placeholder="Password"/>
                </form>

                <BtnLogin />

                <div className='login-page__card--btn'>
                    <p className='login-page__card--p'>{valueText('btn-register')}</p>
                    <p className='login-page__card--p'>{valueText('btn-forgot-password')}</p>
                </div>
                
            </div>
            
        </div>
        <FooterLogin />

    </div>
  )
}

export default Login
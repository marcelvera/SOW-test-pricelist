import React from 'react';
import '../styles/Login.css';
import '../components/NavLogin'
import NavLogin from '../components/NavLogin';
import InputLogin from '../components/InputLogin';
import BtnLogin from '../components/BtnLogin';
import FooterLogin from '../components/FooterLogin';

function Login() {
  return (
    <div className='login-page'>

        <NavLogin />
        <div className='login-page__card'>
            <div className='login-page__box'>
                <header className='login-page__header'>
                    <h1 className='login-page__title'>Log in</h1>
                </header>

                <form className='login-page__form'>
                    <InputLogin label="Enter your email address" type="email" 
                            name="email" placeholder="email address"/>

                    <InputLogin label="Enter your password" isPassword={true} type="password" 
                        name="password" placeholder="Password"/>
                </form>

                <BtnLogin />

                <div className='login-page__card--btn'>
                    <p className='login-page__card--p'>Register</p>
                    <p className='login-page__card--p'>Forgotten password?</p>
                </div>
                
            </div>
            
        </div>
        <FooterLogin />

    </div>
  )
}

export default Login
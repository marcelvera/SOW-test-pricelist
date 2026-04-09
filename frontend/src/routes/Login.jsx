import React, {useContext, useState} from 'react';
import '../styles/Login.css';
import '../components/NavLogin'
import NavLogin from '../components/NavLogin';
import InputLogin from '../components/InputLogin';
import BtnLogin from '../components/BtnLogin';
import FooterLogin from '../components/FooterLogin';
import { LenguageContext } from '../context/LanguageContext';
import { loginUser } from '../services/Api';
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  const [cred, setCred] = useState({email:'', password:''})
  const {setLang, valueText} = useContext(LenguageContext)
  
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        const data = await loginUser(cred)

        localStorage.setItem('access_token', data.access)
        localStorage.setItem('refresh_token', data.refresh)

        navigate('/dashboard')

    }
    catch (error) {
        console.log(error)
    }

  }    

  return (
    <div className='login-page'>

        <NavLogin />
        <div className='login-page__card'>
            <form className='login-page__box' onSubmit={handleSubmit}>
                <header className='login-page__header'>
                    <h1 className='login-page__title'>{valueText('title-login')}</h1>
                </header>

                <div className='login-page__form'>
                    <InputLogin label={valueText('label-email')} type="email" 
                            name="email" placeholder={valueText('input-placeholder-email')} value={cred.email} onChange={handleChange}/>

                    <InputLogin label={valueText('label-password')} isPassword={true} type="password" 
                        name="password" placeholder={valueText('input-placeholder-pass')} value={cred.password} onChange={handleChange}/>
                </div>

                <BtnLogin />

                <div className='login-page__card--btn'>
                    <p className='login-page__card--p'>{valueText('btn-register')}</p>
                    <p className='login-page__card--p'>{valueText('btn-forgot-password')}</p>
                </div>
                
            </form>
            
        </div>
        <FooterLogin />

    </div>
  )
}

export default Login
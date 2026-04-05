import React from 'react'
import "../styles/Login.css"

const btn = [
    {id:"1", name:"Acept"},
    {id:"2", name:"Acept"},
    {id:"3", name:"Acept"},
    {id:"4", name:"Acept"},
    {id:"5", name:"Acept"},
];

const NavLogin = () => {

  return (
    <div className='nav-page'>
        <img src="https://storage.123fakturera.se/public/icons/diamond.png" alt="" className='nav-page__img'/>
        <ul className='nav-page__ul'>
            {btn.map((arg) => (
                <li className="nav-page__li" key={arg.id}>{arg.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default NavLogin
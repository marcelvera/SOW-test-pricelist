import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faUser, faGear, faFileInvoice, faTags, faBook, 
  faCircleXmark, faReceipt, faClipboardList, faAddressCard, 
  faCloudArrowUp, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import '../styles/Dashboard.css'

const SidebarDashboard = () => {

  const [logout, setLogout] = useState(false)

  function handleLogout (){
    setLogout(!logout)
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    navigate('/login')
  }

  
  const navigate = useNavigate()

  const options = [
    {id:"1", icon: faFileLines, name:"Invices", classIcon : 'sidebar-icon__invices'},
    {id:"2", icon: faUser, name:"Customers", classIcon : 'sidebar-icon__customers'},
    {id:"3", icon: faGear, name:"My Business", classIcon : 'sidebar-icon__business'},
    {id:"4", icon: faBook, name:"invice Journal", classIcon : 'sidebar-icon__journal'},
    {id:"5", icon: faTags, name:"Price List", classIcon : 'sidebar-icon__list'},
    {id:"6", icon: faFileInvoice, name:"Multiple Invoicing", classIcon : 'sidebar-icon__multiple'},
    {id:"7", icon: faCircleXmark, name:"Unpaid Invoices", classIcon : 'sidebar-icon__unpaid'},
    {id:"8", icon: faReceipt, name:"Offer", classIcon : 'sidebar-icon__offer'},
    {id:"9", icon: faClipboardList, name:"Inventory Control", classIcon : 'sidebar-icon__inventory'},
    {id:"10", icon: faAddressCard, name:"Member Invoicing", classIcon : 'sidebar-icon__member'},
    {id:"12", icon: faCloudArrowUp, name:"Import/Export", classIcon : 'sidebar-icon__import'},
    {id:"13", icon: faArrowRightFromBracket, name:"Log out", onClick : handleLogout, classIcon : 'sidebar-icon__logout'},
  ]

  return (
    <aside className='sidebar-dashboard'>
        <div className='sidebar-title'>
            <h2 className='sidebar-title__h2'>Menu</h2>
            <span className='sidebar-title__lineal'></span>
        </div>
        <div className='sidebar-options'>
          <ul className='sidebar-options__ul'>
            {options.map((data) => (
            <li className='sidebar-options__li' key={data.id} onClick={data.onClick}>
              <FontAwesomeIcon icon={data.icon} className={data.classIcon}/>
              <p>{data.name}</p>
            </li>
          ))}
          </ul>
        </div>
    </aside>
  )
}

export default SidebarDashboard
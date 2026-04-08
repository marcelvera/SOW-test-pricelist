import React from 'react'
import NavDashboard from '../components/NavDashboard'
import SidebarDashboard from '../components/SidebarDashboard'
import InputDashboard from '../components/InputDashboard'
import BtnDashboard from '../components/BtnDashboard'
import '../styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCirclePlus, faPrint, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import PriceList from '../components/PriceList'


function Dashboard() {
  return (
    <div className='dashboard-page'>
      <NavDashboard />
      <div className='dashboard-page__card'>
        <SidebarDashboard />
        <div className='dashboard-page__main'>
          <div className='dashboard-option__card'>
            <div className='dashboard-input__card'>
              <InputDashboard name={'code_product'} placeholder={'Search Article No...'} icon={faMagnifyingGlass}/>
              <InputDashboard name={'name_product'} placeholder={'Search Product...'} icon={faMagnifyingGlass}/>
            </div>
            <div className='dashboard-btn__card'>
              <BtnDashboard name={'New Product'} icon={faCirclePlus}/>
              <BtnDashboard name={'Print List'} icon={faPrint} opSimple={true}/>
              <BtnDashboard name={'Advanced mode'} icon={faCircleArrowRight} opSimple={true}/>
            </div>
          </div>
          <PriceList/>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
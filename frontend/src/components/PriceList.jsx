import React, { useState, useEffect } from 'react'
import InputDashboard from './InputDashboard'
import { instance } from '../services/Api'

 const data = [
    {id:"1", name:'Article No', class:'dashboard-input__price'},
    {id:"2", name:'Product/Service'},
    {id:"3", name:'In Price'},
    {id:"4", name:'Price'},
    {id:"5", name:'unit', class:'dashboard-input__price'},
    {id:"6", name:'In Stock', class:'dashboard-input__price'},
    {id:"7", name:'Description', class:'dashboard-input__price'},
 ]

 const fieldMapping = {
        'Article No': 'code_product',
        'Product/Service': 'name_product',
        'In Price': 'price_unit_product',
        'Price': 'price_product',
        'unit': 'unit_product',
        'In Stock': 'stock_product',
        'Description': 'desc_product'};

 const PriceList = () => {
  
  const [product, setProduct] = useState([])

  useEffect(()=>{
        instance.get(`products/all/?v=${new Date().getTime()}`)
        .then(response => {
            setProduct(response.data)
        })
    }, 
  [])

  const handleChange = (id, fieldName, newValue) =>{
    setProduct(preview => preview.map(
        item => item.id === id ? {...item, [fieldName]:newValue} : item
    ))
  }

  const handleSave = (id) => {
    const productSave = product.find(p => p.id === id)

    instance.patch(`products/${id}/modify/`, productSave)
    .then(()=>{
        console.log("Product Update")
    })
    .catch(error => console.error('Error', error))
  }

  return (
    <div className='dashboard-inventory'>
        <header className='dashboard-price__header'>
            {data.map((arg) => (
                    <div key={arg.id} className={`
                        dashboard-price__item 
                        ${arg.name === 'Product/Service' ? 'dashboard-price__name' : ''} 
                        ${arg.name === 'Price' ? 'dashboard-price__price' : ''}
                        ${arg.name === 'In Price' ? 'dashboard-price__inprice' : ''}
                    `}>
                        <label className='dashboard-price__label'>{arg.name}</label>
                    </div>
                ))}
        </header>
        <div className='dashboard-scroll'>
            {product.map((item) => (
                <div className='dashboard-price' key={item.id}>
                    {data.map((arg) => (
                        <div key={arg.id} className={`
                            dashboard-price__item 
                            ${arg.name === 'Product/Service' ? 'dashboard-price__name' : ''} 
                            ${arg.name === 'Price' ? 'dashboard-price__price' : ''}
                            ${arg.name === 'Description' ? 'dashboard-price__desc' : ''}
                        `}>
                            <InputDashboard name={arg.class || 'camp'} value={item[fieldMapping[arg.name]]} type={'text'} onChange={(e) => 
                                handleChange(item.id, fieldMapping[arg.name], e.target.value)}
                                onBlur={() => handleSave(item.id)}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}

export default PriceList
import React from 'react'
import './BreadCrum.css'
import breadcrum_icon from '../Assets/breadcrum_icon.png'

const BreadCrums = (props) => {
    const {product} = props;
    return (
        <div className='breadcrums'>
            HOME <img src={breadcrum_icon} alt="" /> SHOP <img src={breadcrum_icon} alt="" /> {product.category} <img src={breadcrum_icon} alt="" /> {product.name} 
        </div>
    )
}

export default BreadCrums;
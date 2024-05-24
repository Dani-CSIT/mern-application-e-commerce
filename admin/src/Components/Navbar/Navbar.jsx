import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import navProfile from '../../assets/profile_icon.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={navlogo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img src={navProfile} alt="" className="nav-profile" />
        </div>
    )
}

export default Navbar;
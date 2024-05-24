import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_nav from '../Assets/dropdown-icon.png'


const Navbar = () => {

        const [menu, setMenu] = useState ("shop_everyThing");
        const {getTotalCartItems} = useContext(ShopContext);
        const menuRef = useRef();
        const dropdown_toggle = (e) => {
            menuRef.current.classList.toggle('nav-menu-visible');
            e.target.classList.toggle('open');
        }
        return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img onClick={dropdown_toggle} src={dropdown_nav} alt="" className='dropdown-nav' />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() =>{setMenu('shop_everyThing')}}> <Link style={{textDecoration: 'none'}} to='/' >Shop EveryThing</Link> {menu ==='shop_everyThing'?<hr />:<></>}</li>
                <li onClick={() =>{setMenu('men')}}> <Link style={{textDecoration: 'none'}} to='/men' >Men</Link> {menu ==='men'?<hr />:<></>}</li>
                <li onClick={() =>{setMenu('women')}}> <Link style={{textDecoration: 'none'}} to='/women' >Women</Link> {menu ==='women'?<hr />:<></>}</li>
                <li onClick={() =>{setMenu('kids')}}> <Link style={{textDecoration: 'none'}} to='/kids' >Kids</Link> {menu ==='kids'?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=> {localStorage.removeItem('auth-token'); window.location.replace('/')}}>LogOut</button> 
                :<Link to='/login'><button>Login</button></Link> }
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;
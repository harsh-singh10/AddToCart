import React from 'react'
import cart from '../Assests/cart_icon.png'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

function Header({count}) {
  return (
    <div className='nav' >
            <div className="name">
            <NavLink to="/"> Shopping cart </NavLink>  
            </div>
            <div className="cart">
               
              <NavLink to ="/Cart">  <img src= {cart} alt="" /> </NavLink>
                
               
                <div className="count">{count}</div>
            </div>
    </div>
  )
}

export default Header
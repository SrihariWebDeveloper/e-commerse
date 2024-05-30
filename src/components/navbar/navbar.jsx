import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import box from './../../assets/basket_icon.png'


const navbar = ({setsignup}) => {
    const [setmenu,updatesetmenu] = useState('home')
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
            <h2>My <span>Store</span>.</h2>
        </div>
        <div className="nav-center">
            <ul>
                <Link to='/' onClick={()=>updatesetmenu('home')}className={setmenu=='home'?'active':''}>Home</Link>
                < a href='#category' onClick={()=>updatesetmenu('category')}className={setmenu=='category'?'active':''}>Categeory</a>
                < a href='#mobile-app' onClick={()=>updatesetmenu('mobile-app')}className={setmenu=='mobile-app'?'active':''}>MobileApp</a>
                < a href='#contact-us' onClick={()=>updatesetmenu('contact-us')}className={setmenu=='contact-us'?'active':''}>ContactUs</a>
            </ul>
        </div>
        <div className="nav-right">
            <img src={box} alt="" />
            <button type="submit" onClick={()=>setsignup(true)}>Sign up</button>
        </div>
      </div>
    </>
  )
}

export default navbar

import React, { useState, useEffect } from 'react';
import menu from './images/menu.svg';
import { Link } from 'react-scroll';

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth);

    return() => {
      window.removeEventListener('resize', changeWidth);
    }

  }, [])
  return (
    <nav>
        <div className="nav_head">
        <h2 className="brandname">CLICK
        HEIST</h2>
        <div onClick={toggleNav} className='togglebar'><img className='menu_icon' src={menu} alt=""  /></div>
        </div>
        {(toggleMenu || screenWidth > 999) && (
        <ul>
          <a href='https://clickheist-trailer1.netlify.app/' className='design_link'><li>DESIGNS</li></a>
          <Link to='details' smooth={true}><li>DETAILS</li></Link>
          <Link to='cards' smooth={true}><li className='price'>PRICING</li></Link>
          <Link to='contacts' smooth={true}><li>CONTACT</li></Link>
        </ul>
        )}
        
    </nav>
  )
}

export default Navbar;
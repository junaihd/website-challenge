import React from 'react';
import { Link } from 'react-scroll';
import advert from './images/advertising.svg';
import love from './images/love.svg';
import glass from './images/magnifying-glass.svg';
import result from './images/results.svg';
import startup from './images/start-up.svg';
import target from './images/target.svg';

function Header() {
  return (
    <header>
      <div className="hero_icons icon_pack_1">
        <img src={advert} alt="" className="header_icon a" />
        <img src={love} alt="" className="header_icon centre_icon-1" />
        <img src={glass} alt="" className="header_icon" />
      </div>
      <div className="hero">
        <h1 className='hero_heading'>Make your business smart</h1>
        <h4 className='hero_sub_heading'>Website for everyone challenge</h4>
        <p className='hero_para'>Get websites starting from Rs.999 only. Make your business reach to your customers</p>
        <div className="hero_btn">
        <Link to='cards' smooth={true}><p className="pricing_btn">Pricing</p></Link>
        <Link to='contacts' smooth={true}><p className="contact_btn">Contact</p></Link>
        </div>

      </div>
      <div className="hero_icons icon_pack_2">
      <img src={startup} alt="" className="header_icon a" />
      <img src={result} alt="" className="header_icon centre_icon-2" />
      <img src={target} alt="" className="header_icon" />
      </div>
    </header>
  )
}

export default Header;
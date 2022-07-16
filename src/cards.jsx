import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Cards() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    
  return (
    <section className='card_section' id='cards'>
        <h2 className="pricing">PRICING</h2>
        <div className="cards">
            <div className="card" data-aos="fade-up">
                <h3 className='card_head'>BUDGET FRIENDLY WEBSITE</h3>
                <p className="card_detail">Starting from Rs.999/-</p>
                <p className="card_detail">Free hosting</p>
                <a href="https://wa.me/917994797664/?text=I want to know more about Budget friendly website" className="card_btn">Know more</a>
            </div>
            <div className="card" data-aos="fade-up">
            <h3 className='card_head'>PREMIUM WEBSITE</h3>
                <p className="card_detail">Starting from Rs.4,999/-</p>
                <p className="card_detail">Free Maintaince upto 2 years</p>
                <a href="https://wa.me/917994797664/?text=I want to know more about Premium website" className="card_btn">Know more</a>
            </div>
            <div className="card" data-aos="fade-up">
            <h3 className='card_head'>E-COMMERCE WEBSITE</h3>
                <p className="card_detail">Starting from Rs.9,999/-</p>
                <p className="card_detail over">Site for adding and changing products and services</p>
                <a href="https://wa.me/917994797664/?text=I want to know more about E-commerce website" className="card_btn">Know more</a>
            </div>
        </div>
    </section>
  )
}

export default Cards;
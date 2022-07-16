import React, { useEffect } from 'react';
import tele from './images/call.svg';
import mail from './images/mail.svg';
import whatsapp from './images/whatsapp.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
  return (
    <section className='contact_section' id='contacts'>
        <h2 className="contact_head">GET A QUOTE</h2>
        <p className="contact_sub_head">click on the below option to contact us</p>
        <div className="contact_card">
            <div className="contact" data-aos="fade-right">
                <img src={tele} alt="" className='contact_icon'/>
                <a className="contact_info" href='tel:+917994797664'>+91 7994797664</a>
            </div>
            <div className="contact" data-aos="fade-right">
                <img src={mail} alt="" className='contact_icon'/>
                <a className="contact_info" href="mailto:service.clickheist@gmail.com">service.clickheist@gmail.com</a>
            </div>
            <div className="contact" data-aos="fade-right">
                <img src={whatsapp} alt="" className='contact_icon'/>
                <a className="contact_info" href='https://wa.me/917994797664'>+917994797664</a>
            </div>
        </div>
    </section>
  )
}

export default Contact;
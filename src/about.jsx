import React from 'react'

function About() {
  return (
    <section className='about' id='details'>
        <div className="circles">
            <div className="lg_circle"></div>
            <div className="sm_circle"></div>
        </div>
        <div className="about_content">
            <h2 className="about_header">DETAILS</h2>
            <p className="about_para">ClickHeist is a marketing agency in Kerala. ClickHeist marketing changes the business industry by beginning a new marketing <p className="era">era.</p> ClickHeist helps businesses to regain their business and stand out from their competition by making a marketing strategy.
            Now we are introducing a new champaign called "Website for everyone". in this champaign we ensure every brands and business must own a website to get details about them to their audience. We have a bunch of varieties of website designs. scroll down to know more about this challenge.</p>
        </div>
        <div className="circles circles-2">
            <div className="sm_circle"></div>
            <div className="lg_circle"></div>
        </div>
    </section>
  )
}

export default About;
import React from 'react'

function Footer() {
  return (
    <footer>
       <div className="footer_head">
       <h2 className="brandname foot_brand_name">CLICK
        HEIST</h2> 
        <p className="challenge_name">WEBSITE FOR EVERYONE CHALLENGE</p>
       </div>
       <div className="social_links">
        <h2 className="social_head">CONNECT WITH US</h2>
        <div className="links">
            <a className="link" href='https://www.facebook.com/clickheist'>FACEBOOK</a>
            <a className="link" href='https://www.instagram.com/clickheist_marketing/'>INSTAGRAM</a>
            <a className="link" href='https://www.linkedin.com/company/clickheist/'>LINKEDIN</a>
            <a className="link" href='t.me/clickheist'>TELEGRAM</a>
        </div>
       </div>
    </footer>
  )
}

export default Footer;
import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <h1>Pablo</h1>
            <p>I am a cybersecurity and cloud computing student with practical experience in various projects. My passion for technology and security drives my dedication to excel in this field.</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Pablo Duarte. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;


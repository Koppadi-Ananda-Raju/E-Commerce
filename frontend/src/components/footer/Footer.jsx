import React from 'react'
import './footer.css'
import footer_logo from '../assets/logo_big.png'
import  instagram from '../assets/instagram_icon.png'
import pinterest from '../assets/pintester_icon.png'
import whatapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatapp} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>&copy;Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
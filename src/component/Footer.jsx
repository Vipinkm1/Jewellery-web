import React from 'react'

import Facebook from '../assets/Social/communication.png'
import Instagram from '../assets/Social/instagram.png'
import Twitter from '../assets/Social/twitter.png'
import Youtube from '../assets/Social/youtube.png'
import { MdEmail, MdPhone } from 'react-icons/md'
import { GrLocation } from "react-icons/gr";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-flex '>
        <div className='footer-container-1'>
          <h2 className='heading  footer-heading'>Why Us</h2>
          <div className='some-content'>
            <h1 className='logo'>Simmu</h1>
            <p className='para3'>Simmu is a fine jewellery brand of silver, gold and lab grown diamonds. We have grown to be the largest D2C jewellery brand in India that has gained people’s trust as a go-to choice for gifting. </p>
          </div>
        </div>
        <div className='footer-container-2'>
        
          <h2 className='heading   color font'>Quick Links</h2>
          <div className='some-content'>
            <div className='footer-services  '>About Us</div>
            <div className='footer-services  '>Costumer Review</div>
            <div className='footer-services  '>Blogs</div>
            <div className='footer-services  '>Join Us</div>
            <div className='footer-services  '>Contact Us</div>
          </div>
        </div>
        <div className='footer-container-2'>
          <h2 className='heading color font'>Information</h2>
          <div className='some-content'>
            <div to='' className='footer-services  '>Shipping & Returns</div>
            <div to='' className='footer-services  '>Privacy & Policy</div>
            <div to='' className='footer-services  '>Internation Shipping</div>
            <div to='' className='footer-services  '>FAQs & Support</div>
            <div to='' className='footer-services '>Terms & Condition</div>
          </div>
        </div>
        <div className='footer-container-2'>
          <h2 className='heading color font '>Contact Info</h2>
          <div className='footer-content-flex'>
            <div className='some-content'>
              <p className=''>India-</p>
              <div className='footer-contact'>
                <MdPhone className='icons-contact' />
                <p className=''>Phone:</p>
                <p>+91 9305512110 </p>
              </div>
              <div className='footer-contact'>
                <GrLocation className='icons-contact' />
                <p className=''>Address:</p>
                <p>Dwarka Mor,New Delhi,India</p>
              </div>
              <div className='footer-contact'>
                <MdEmail className='icons-contact' />
                <p className=''>Email: <span>itsvipinkmgmail.com</span></p>
              </div>
              {/*  dubai address */}
            </div>
          </div>
          <div className='footer-contact'>
            <img className='footer-social-icon' src={Facebook} />
            <img className='footer-social-icon' src={Instagram} />
            <img className='footer-social-icon' src={Twitter} />
            <img className='footer-social-icon' src={Youtube} />
          </div>
        </div>
      </div>
      {/*  another content */}

        <h2 className='heading  footer-services copyright'>Copyright 2024 | Vipin Kumar , All Right Reserved.</h2>
      
    </div>
  )
}
export default Footer
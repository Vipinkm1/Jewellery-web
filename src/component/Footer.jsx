import React, { useState } from 'react'

import Facebook from '../assets/Social/communication.png'
import Instagram from '../assets/Social/instagram.png'
import Twitter from '../assets/Social/twitter.png'
import Youtube from '../assets/Social/youtube.png'
import { MdEmail, MdPhone } from 'react-icons/md'
import { GrLocation } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/Jewellery/logo.png'
const Footer = () => {

  const [location, setLocation] = useState(false)

  const navigate = useNavigate()
  return (
    <>
      {location && (
        <div className='review-detail-popup'>
          <div className="modal-content">
           <div className='location-btn-flex'>
            <button className="close-btn" onClick={() => setLocation(false)}>
              Close
            </button>
            </div>
            <div className='mt-1'>
            <iframe
              src="https://www.google.com/maps?q=Dwarka+Mor,+New+Delhi,+India&output=embed"
              width="800"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            </div>
          </div>
        </div>
      )}
      <div className='footer'>
        <div className='footer-flex '>
          <div className='footer-container-1'>
            <h2 className='heading  footer-heading'>Why Us</h2>
            <div className=''>
              <img src={Logo} className='jwele-logo-1' />
              <p className='para3'>Simmu is a fine jewellery brand of silver, gold and lab grown diamonds. We have grown to be the largest D2C jewellery brand in India that has gained people’s trust as a go-to choice for gifting. </p>
            </div>
          </div>
          <div className='footer-container-2'>
            <h2 className='heading    font'>Quick Links</h2>
            <div className='some-content'>
              <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/about-us') }} className='footer-services line2'>About Us</div>
              <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/blogs') }} className='footer-services line2'>Blogs</div>
              <Link to='/join-us' className='footer-services line2'>Join Us</Link>
              <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/contact') }} className='footer-services line2'>Contact Us</div>
              <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/customer-review') }} className='footer-services line2'>Customer Review</div>
            </div>
          </div>
          <div className='footer-container-2'>
            <h2 className='heading  font'>Information</h2>
            <div className='some-content'>
              <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/shipping') }} className='footer-services line2'>Shipping & Returns</div>
              <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('privacy-policy') }} className='footer-services line2'>Privacy & Policy</div>
              <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('international-shipping') }} className='footer-services line2'>Internation Shipping</div>
              <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/faq') }} className='footer-services line2'>FAQs & Support</div>
              <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/terms-condition') }} className='footer-services line2'>Terms & Condition</div>
            </div>
          </div>
          <div className='footer-container-2'>
            <h2 className='heading c font '>Contact Info</h2>
            <div className='footer-content-flex'>
              <div className='some-content'>
                <p className=''>India-</p>
                <div className='footer-contact'>
                  <MdPhone className='icons-contact' />
                  <p className=''>Phone:</p>
                  <p>+91 9305512110 </p>
                </div>
                <div className='footer-contact' onClick={() => setLocation(true)} >
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
        <h2 className='heading  footer-services copyright'>Copyright 2024 | Simmu ki jewellery , All Right Reserved.</h2>
      </div>

    </>
  )
}
export default Footer
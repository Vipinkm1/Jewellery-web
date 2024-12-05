import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
    const [contactUs, setContactUs] = useState({
        name:'',
        email: '',
        message: ''
    })

    const handleContactChange = (e)=> {
        const {name, value}= e.target;
        setContactUs((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleContact = (e) => {
     e.preventDefault()
     setContactUs(contactUs)
     console.log(contactUs)
    }
  return (
    <div className='page'>
    <p className='contact-us-title'>Contact</p>
    <div className='footer-flex-4 '>
        <div>
            <div className='para-4'>Get in Touch with Us!</div>
            <div className='mt-1 para-3'>We can assist with orders, product queries, or anything else you need.</div>
            <form onSubmit={handleContact}>
                <div className='footer-flex-3 mt-1 '>
                    <input className='input-width-1' type='text' placeholder='Name' name='name' value={contactUs.name} onChange={handleContactChange} />
                    <input className='input-width-1' type='email' placeholder='Email' name='email' value={contactUs.email} onChange={handleContactChange} />
                </div>
                <div className='mt-1'>
                    <textarea className='message-box-text' name='message' value={contactUs.message} placeholder='Message here' onChange={handleContactChange} />
                </div>
            </form>
            <button type='submit' className=' btn-color-gr mt-1'>Submit</button>
        </div>
        <div className='footer-flex-2 mt-1'>
            <div className=''>
                <p className='para5'>Address:</p>
                <p className='para-3 mt-1'>Corporate Add-A-1/197,HASTSAL ROAD ,UTTAM NAGAR
                    DELHI -110059</p>
                <p className='para-3 mt-1'>Company Name: Simmu ki Jewellery </p>
            </div>
            <div className='mt-2'>
                <p className='para5'>Contact:</p>
                <p className='para-3 mt-1'>Phone: 9305512110</p>
                <p className='para-3 mt-1'>Email: itsvipinkmgmail.com</p>
            </div>
            <div className='mt-2'>
                <p className='para5'>Follow on Social Media:</p>
                <div className='footer-flex-3 mt-1'>
                    <FacebookIcon style={{fontSize: '30px'}} className='add-icon' />
                    <InstagramIcon style={{fontSize: '30px'}} className='add-icon' />
                    <XIcon style={{fontSize: '30px'}} className='add-icon'/>
                    <YouTubeIcon style={{fontSize: '30px'}}  className='add-icon' />
                </div>
            </div>
            <div className='mt-2'>
                <p className='para5'>Call or Email Us</p>
                <p className='para-3 mt-1'>You can contact us anytime between 9AM to 6PM</p>
            </div>
        </div>
    </div>
</div>

  )
}

export default Contact
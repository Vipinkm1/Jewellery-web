import React, { useState } from 'react'

const Faq = () => {
const [faqOpen, setFaqOpen] = useState(false)
  return (
    <div className='page'>
        <div className='center heading-1'>FAQ & Support</div>
        <div className='faq-flex'>
        <div className=''>
            <div className='faq-box' onClick={()=> setFaqOpen((prevState)=> !prevState)}>
              <p className='para5'>I did't like my product how i can return my order?</p>
              <p className='para5'>{faqOpen? '-': '+'}</p>
            </div>
            {faqOpen && (
              <div className='faq-box'></div>
            )}
            </div>
          
            <div className='faq-box'>
              <p className='para5'>I did't like my product how i can return my order?</p>
              <p className='para5'>+</p>
            </div>
            <div className='faq-box'>
              <p className='para5'>I did't like my product how i can return my order?</p>
              <p className='para5'>+</p>
            </div>
            <div className='faq-box'>
              <p className='para5'>I did't like my product how i can return my order?</p>
              <p className='para5'>+</p>
            </div>
        </div>
    </div>
  )
}

export default Faq
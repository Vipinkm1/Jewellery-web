import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
 const navigate = useNavigate()

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; 
    };

    const handleNavigation = (event) => {
      const confirmLeave = window.confirm("Do you really want to leave this page?");
      if (!confirmLeave) {
        event.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleNavigation);
    };
  }, [navigate]);
  return (
    <div className=' page'>
      <div className='center heading-1'>
        About Us
      </div>
      <div className='para3 mt-2'>
        Started in 2024, Simmu is India's largest fashion jewellery destination with a robust online presence and an expansive retail footprint of 20+ stores across India. Simmu has successfully introduced the concept of high quality, flawlessly crafted jewellery at affordable price points – a feat that remains unmatched in an increasingly busy segment.
        <br /><br />
        We take pride in our commitment to rare and traditional art, crafts and narratives, creating contemporary accessories for its discerning patrons. Handcrafted masterpieces, affordable luxury, unique artistic jewellery from some of the finest designers in the country are now at your fingertips with Simmu.
        <br /> <br />
        The only brand with a versatile line of jewellery, perfect sartorial companions to every woman and man. Created by a team of exceptional designers, crafts people and connoisseurs of style, Simmu features jewellery for those who know their style from fashion fads and are willing to spark a trend rather than just follow it. Each piece of jewellery has been crafted exclusively for Simmu, with its outstanding karigari and lyrical aesthetic. Not just the exquisite jewellery, the prices too will add a sparkle to your smile.
      </div>
    </div>
  )
}

export default About
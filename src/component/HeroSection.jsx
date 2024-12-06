import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/banner/20028.jpg'


const HeroSection = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
}
const slider2Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true
}
  const banner = [
    {id: 1, name: banner1},
    {id: 1, name: banner1},
    {id: 1, name: banner1},
    {id: 1, name: banner1}
  ]
  const category = [
    {id: 1, link: 'https://www.giva.co/cdn/shop/collections/pink_necklaces_pend_copy.jpg?v=1733220967', catName: 'Pendants' },
    {id: 2, link: 'https://www.giva.co/cdn/shop/collections/pink_rings_c356f6b3-6547-4e39-9b08-dfdf5ecfc2b0.jpg?v=1733220955', catName: 'Rings'},
    {id: 3, link: 'https://www.giva.co/cdn/shop/collections/earrings_pink-min.png?v=1733220945', catName: 'Earings'},
    {id: 4, link: 'https://www.giva.co/cdn/shop/collections/pink_br-min.png?v=1733220894', catName: 'Bracelets'},
    {id: 5, link: 'https://www.giva.co/cdn/shop/collections/sets_pink.webp?v=1733220904', catName: 'Sets'},
    {id: 6, link: 'https://www.giva.co/cdn/shop/collections/anklets_f99dfe60-fc81-457a-ab33-721352c6e672.jpg?v=1733220813', catName: 'Anckles'},
    {id: 7, link: 'https://www.giva.co/cdn/shop/collections/Personaloised_250_x_250-min.png?v=1733220865', catName: 'Personalized'},
    {id: 8, link: 'https://www.giva.co/cdn/shop/collections/Frame_2609057-min.jpg?v=1733220853', catName: 'Men'},
    {id: 9, link: 'https://www.giva.co/cdn/shop/collections/Mangalsutras_3.jpg?v=1733220746', catName: 'MangleSutra'}

  ]
  return (
    <div className='banner-section'>
     <div className=' flex-2'>
     <Slider {...sliderSettings}>
      {banner.map((item)=> (
        <div  key={item.id} className='slider-item'>
          <img className='img-width' src={item.name} />
        </div>
      ))}
      </Slider>
     </div>
     <div className='page'>
      <div className='flex-3'>
        <Slider {...slider2Settings}>
          {category.map((item)=> (
            <div key={item.id} className='catp'>
              <img className='img-width-2 ' src={item.link}  />
             <div className='center para1'>{item.catName}</div>
          
            </div>
          ))}
        </Slider>
      </div>
     </div>
    </div>
  )
}

export default HeroSection
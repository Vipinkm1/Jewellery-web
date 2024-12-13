import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/banner/20028.jpg'
import Rings from '../assets/banner/rings.jpeg'
import ProductRing from '../assets/Jewellery/jwe.jpg'
import { CiHeart } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from './Context/Context';
import { useNavigate } from 'react-router-dom';



const HeroSection = () => {
  const { addWishlist, addTocart } = useCart()
  const navigate = useNavigate()
  //  change the image
  //  banner 
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
  // categories
  const slider2Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  }
  const productCart = [
    { id: 1, img: ProductRing, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 2, img: ProductRing, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 3, img: ProductRing, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 4, img: ProductRing, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
  ]
  const banner = [
    { id: 11, name: 'https://battulaaljewels.com/website/images/product-banner.webp' },
    { id: 11, name: banner1 },
    { id: 11, name: 'https://listany-prod.s3.amazonaws.com/images/radhikajeweltech/kikjewelsbanner1920x650traditionalnecklacejewellery_1.png' },
    { id: 11, name: 'https://subalakshmijewellers.com/wp-content/uploads/2021/08/banner-2-1.jpg' }
  ]
  const top = [
    { id: 1, name: 'ENGAGEMENT RINGS', photo: Rings },
    { id: 2, name: 'STATEMENT EARINGS', photo: Rings },
    { id: 3, name: 'BRIDESMAID NECKLACE', photo: Rings },
    { id: 4, name: 'MODERN MANGALSUTRA', photo: Rings },
    { id: 5, name: 'CUPPLE BANDS', photo: Rings },
    { id: 6, name: 'ENGAGEMENT KIDS PARTYBEAR', photo: Rings },
  ]
  const category = [
    { id: 1, link: 'https://www.giva.co/cdn/shop/collections/pink_necklaces_pend_copy.jpg?v=1733220967', catName: 'Pendants' },
    { id: 2, link: 'https://www.giva.co/cdn/shop/collections/pink_rings_c356f6b3-6547-4e39-9b08-dfdf5ecfc2b0.jpg?v=1733220955', catName: 'Rings' },
    { id: 3, link: 'https://www.giva.co/cdn/shop/collections/earrings_pink-min.png?v=1733220945', catName: 'Earings' },
    { id: 4, link: 'https://www.giva.co/cdn/shop/collections/pink_br-min.png?v=1733220894', catName: 'Bracelets' },
    { id: 5, link: 'https://www.giva.co/cdn/shop/collections/sets_pink.webp?v=1733220904', catName: 'Sets' },
    { id: 6, link: 'https://www.giva.co/cdn/shop/collections/anklets_f99dfe60-fc81-457a-ab33-721352c6e672.jpg?v=1733220813', catName: 'Anckles' },
    { id: 7, link: 'https://www.giva.co/cdn/shop/collections/Personaloised_250_x_250-min.png?v=1733220865', catName: 'Personalized' },
    { id: 8, link: 'https://www.giva.co/cdn/shop/collections/Frame_2609057-min.jpg?v=1733220853', catName: 'Men' },
    { id: 9, link: 'https://www.giva.co/cdn/shop/collections/Mangalsutras_3.jpg?v=1733220746', catName: 'MangleSutra' }
  ]
  //  add wishlist
  const handleAddWishlist = (product) => {
    //  get the existing wishlist prduct from the localStorage 
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    //  check if the existing product list is available
    const isProductInWishlist = existingWishlist.some((item) => item.id === product.id);
    if (!isProductInWishlist) {
      //  add the new product in the existingWishlist
      existingWishlist.push(product)
      //  save the updated product localStrage
      localStorage.setItem('wishlist', JSON.stringify(existingWishlist));
    }
    addWishlist(product)
    toast.success('Added Successfully')
    console.log('wishlist', product)
  }
  const handleAddtoCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('ProductCart',)) || []
    const isexistingCart = existingCart.some((item) => item.id === product.id);
    if (!isexistingCart) {
      existingCart.push(product)
      localStorage.setItem('productCart', JSON.stringify(existingCart));
    }
    addTocart(product)
    toast.success('Add ho gya bhai cart me')
    console.log("producttocart", product)
  }
  return (
    <div className='banner-section'>
      <div className=' flex-2'>
        <Slider {...sliderSettings}>
          {banner.map((item) => (
            <div key={item.id} className='slider-item'>
              <img className='img-width' src={item.name} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='page'>
        <div className='flex-3'>
          <Slider {...slider2Settings}>
            {category.map((item) => (
              <div key={item.id} className='catp'>
                <img className='img-width-2 ' src={item.link} />
                <div className='center para1'>{item.catName}</div>
              </div>
            ))}
          </Slider>
        </div>
        {/*  TOP CATE */}
        <div className=' grid-temp pd-top '>
          {top.map((item) => (
            <div key={item.id} className='catDiv'>
              <img className='img-width-3' src={item.photo} />
              <p className='catName'>{item.name}</p>
            </div>
          ))}
        </div>
        {/* Recommended category */}
        <div className='product pd-top'>
          <p className='center para-6'>Recommended For You</p>
          <div className='product-flex  pd-top-1'>
            {productCart.map((product) => (
              <div className='product-container' key={product.id}>
                <img className='img-width-4' src={product.img} onClick={() => navigate('/product-detail')} />
                <CiHeart className='wishlist-icon' onClick={() => handleAddWishlist(product)} />
                <p className='para2 bold-1 mt-1'><span className=''>{product.symbol}</span>{product.Prize} <span className='overline-sam'>{product.symbol}</span><span className='overline'>{product.discountPrize}</span></p>
                <p className='para1 mt-1'>{product.title}</p>
                <button className='btn-width-1 mt-1' onClick={() => handleAddtoCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
        {/*  banner 1 */}
        <div className='pd-top'>
          <img className='img-width' src='https://battulaaljewels.com/website/images/product-banner.webp' />
        </div>
        {/* another recommended */}
        <div className='product pd-top'>
          <p className='center para-6'>Recommended For You</p>
          <div className='product-flex  pd-top-1'>
            {productCart.map((product) => (
              <div className='product-container' key={product.id}>
                <img className='img-width-4' src={product.img} />
                <CiHeart className='wishlist-icon' onClick={() => handleAddWishlist(product)} />
                <p className='para2 bold-1 mt-1'><span className=''>{product.symbol}</span>{product.Prize} <span className='overline-sam'>{product.symbol}</span><span className='overline'>{product.discountPrize}</span></p>
                <p className='para1 mt-1'>{product.title}</p>
                <button className='btn-width-1 mt-1' onClick={() => handleAddtoCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default HeroSection
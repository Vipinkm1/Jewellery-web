import React, { useState } from 'react'
import Jwellery from '../../assets/Jewellery/jwe.jpg'
import { VscShare } from "react-icons/vsc";
import Star from '../../assets/Jewellery/star.png'
import { BiSolidOffer } from "react-icons/bi";
import Kangana from '../../assets/Jewellery/kangan.jpg'
import { MdOutlineReplay30 } from "react-icons/md";
import { TbLifebuoy } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";
import ProductRing from '../../assets/Jewellery/jwe.jpg'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiHeart } from "react-icons/ci";
import ReactImageMagnify from 'react-image-magnify';
import Har1 from '../../assets/Jewellery/har.jpg'
import Har2 from '../../assets/Jewellery/har1.jpg'

const ProductDetail = () => {
  const { addWishlist, addTocart } = useCart()
  const [open, setOpen] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  //  image change
  const [mainImage, setMainImage] = useState(Jwellery)

  const navigate = useNavigate()
  const productCart = [
    { id: 1, img: ProductRing, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 2, img: ProductRing, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 3, img: ProductRing, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 4, img: ProductRing, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
  ]
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
    <div className='page-detail'>
      <div className='product-item'>
        <div className='product-border'>
          {/* <img src={Jwellery} className='product-img' />   */}
          <ReactImageMagnify  {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              isFluidWidth: false,
              width: 600,
              height: 450,
              src: mainImage
            },
            largeImage: {
              src: mainImage,
              width: 2000,
              height: 1800
            }
          }} />
          <div className='product-flex-1 mt-1 '>
            <div className='p-1'>
              <img src={Kangana} className='product-img' onClick={() => setMainImage(Kangana)} />
            </div>
            <div className='p-1'>
              <img src={Har1} className='product-img' onClick={() => setMainImage(Har1)} />
            </div>
            <div className='p-1'>
              <img src={Har2} className='product-img' onClick={() => setMainImage(Har2)} />
            </div>
            <div className='p-1'>
              <img src={Jwellery} className='product-img' onClick={() => setMainImage(Jwellery)} />
            </div>
          </div>
        </div>
        <div className='product-border-2'>
          <div className=''>
            <div className='title-flex'>
              <p className='para-6'>The ring of the lord</p>
              <VscShare className='share-icon' />
            </div>
            <div className='footer-flex-3 mt-1'>
              <p className='para-6'><span className=''></span>$4554</p>
              <p className='overline'>$0000</p>
              <p>Inc. of all taxes</p>
            </div>
            <div className='rating-flex mt-1'>
              <div className='rating'>
                <p>4.9</p>
                <img className='star-width' src={Star} />
              </div>
              <span>|</span>
              <div>
                <p>239 rating</p>
              </div>
            </div>
            <div className='radio-flex mt-1'>
              <BiSolidOffer className='special-offer' />
              <p> Upto 20% off on Cart Value: Use Code FLAT20 </p>
            </div>
            <div className='mt-1'>
              <p className='h1'>Estimate Delivery Time</p>
              <p className='mt-1  gray-color'>(Provide pincode for delivery date & nearby stores!)</p>
              <div className='rating '>
                <input className='input-width-1' type='text' placeholder='Enter 6 digit pincode' />
                <button className='btn-width-2'>Check</button>
              </div>
            </div>
            <div className='title-flex mt-1 description-pd'>
              <p className=''>Description</p>
              <div className='para7' onClick={() => setOpen(!open)}>{open ? '-' : '+'}</div>
            </div>
            {open && (
              <div className=' description-container'>
                <p>Own a ring that sparkles in sunlight, and beautifies the glow of your hand. Get yours today and sparkle on.</p>
                <div className='mt-1'>
                  <div className=''>description1</div>
                  <div className=''>description2</div>
                  <div className=''>description3</div>
                  <div className=''>description4</div>
                </div>
              </div>
            )}
            <div className='title-flex mt-1 description-pd'>
              <p className=''>Product Detail</p>
              <div className='para7' onClick={() => setSecond(!second)}>{second ? '-' : '+'}</div>
            </div>
            {second && (
              <div className='description-container'>
              </div>
            )}
            <div className='title-flex mt-1 description-pd'>
              <p className=''>Costomization</p>
              <div className='para7' onClick={() => setThird(!third)}>{third ? '-' : '+'}</div>
            </div>
            {third && (
              <div className='description-container'>
              </div>
            )}
            <div className='mt-2 grid-temp provide-border'>
              <div className='radio-flex'>
                <MdOutlineReplay30 className='special-offer' />
                <p className='color'>30 DYAS RETURNABLE</p>
              </div>
              <div className='radio-flex'>
                <TbLifebuoy className='special-offer' />
                <p className='color'>BUY BACK POLICY</p>
              </div>
              <div className='radio-flex'>
                <LiaCertificateSolid className='special-offer' />
                <p className='color'>CERTIFIED POLICYS</p>
              </div>
              <div className='radio-flex'>
                <AiOutlineLike className='special-offer' />
                <p className='color'>100% REFUNDABLE</p>
              </div>
              <div className='radio-flex'>
                <LiaShippingFastSolid className='special-offer' />
                <p className='color'>FREE SHIPPING</p>
              </div>
              <div className='radio-flex'>
                <GiReturnArrow className='special-offer' />
                <p className='color'>FREE RETURN</p>
              </div>
            </div>
            <div className='cart-flex mt-2'>
              <button className='btn-width-2'>BUY PRODUCT</button>
              <button className='btn-width-2'>ADD TO CART</button>
              <button className='btn-width-2'>WRITE REVIEW</button>
            </div>
          </div>
        </div>
      </div>
      <div className='product pd-top'>
        <p className='center para-6  pd-top-1'>Suggestion For You</p>
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
      <ToastContainer />
    </div>
  )
}
export default ProductDetail
import React, { useState } from 'react'
import Har from '../../assets/Jewellery/har.jpg'
import Har1 from '../../assets/Jewellery/har1.jpg'
import Kangan from '../../assets/Jewellery/kangan.jpg'
import { CiHeart } from "react-icons/ci";


const FilterPage = () => {
  const [productType, setProductType] = useState(false)
  const [shopFor, setShopFor]= useState(false)

  const handleClose = ()=> {
    setProductType(false)
  }
  const productCart = [
    { id: 1, img: Kangan, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 2, img: Har, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 3, img: Har1, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 4, img: Kangan, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
  ]
  return (
    <div className='page'>
      <div className='filter-page'>
        <div className='filter-border-right' >
          <div className='para3' onClick={() => setProductType((prevState)=> !prevState)} >Product Type</div>
          <div className='filterOpenContainer-1'>
            {productType && (
              <div className='filterOpenContainer'>
                <div className='filter-product-flex-1'>
                  <div className='checkbox-flex'>
                    <input type='checkbox' />
                    <p>Earerings</p>
                  </div>
                  <p>(8)</p>
                </div>
                <div className='filter-product-flex-1'>
                  <div className='checkbox-flex'>
                    <input type='checkbox' />
                    <p>Earerings</p>
                  </div>
                  <p>(8)</p>
                </div>
                <div className='filter-product-flex-1'>
                  <div className='checkbox-flex'>
                    <input type='checkbox' />
                    <p>Earerings</p>
                  </div>
                  <p>(8)</p>
                </div>
                <div className='filter-product-flex-1'>
                  <div className='checkbox-flex'>
                    <input type='checkbox' />
                    <p>Earerings</p>
                  </div>
                  <p>(8)</p>
                </div>
                <div className='filter-product-flex-1'>
                  <div className='checkbox-flex'>
                    <input type='checkbox' />
                    <p>Earerings</p>
                  </div>
                  <p>(8)</p>
                </div>

              </div>
            )}
          </div>
        </div>
        <div className='filter-border-right'>
          <div className='para3'>Price</div>
        </div>
        <div className='filter-border-right'>
          <div className='para3'onClick={()=> setShopFor((prevState)=> !prevState)} >Shop For</div>
           <div className='filterOpenContainer-1'>
            {shopFor && (
              <div className='filterOpenContainer'>
                
              </div>
            )}
           </div>
        </div>
        <div className='filter-border-right'>
          <p className='para3 '> Color</p>
        </div>
        <div className='filter-border-right'>
          <p className='para3'>Metal</p>
        </div>
        <div className='filter-border-right'>
          <p className='para3'>Stone</p>
        </div>
        <div className='filter-border-right'>
          <p className='para3'>Style</p>
        </div>
        <div className='filter-border-right'>
          <p className='para3'>Sub Category</p>
        </div>
        <div className='filter-border-right'>
          <p className='para3'>Sorted By</p>
        </div>
      </div>
      <div className='product-flex  '>
        {productCart.map((product) => (
          <div className='product-container' key={product.id}>
            <img
              className="img-width-4"
              src={product.img}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top smoothly
                navigate('/product-detail'); // Navigates to the product detail page
              }}
            />
            <CiHeart className='wishlist-icon' onClick={() => handleAddWishlist(product)} />
            <p className='para2 bold-1 mt-1'><span className=''>{product.symbol}</span>{product.Prize} <span className='overline-sam'>{product.symbol}</span><span className='overline'>{product.discountPrize}</span></p>
            <p className='para1 mt-1'>{product.title}</p>
            <button className='btn-width-1 mt-1' onClick={() => handleAddtoCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className='product-flex  '>
        {productCart.map((product) => (
          <div className='product-container' key={product.id}>
            <img
              className="img-width-4"
              src={product.img}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top smoothly
                navigate('/product-detail'); // Navigates to the product detail page
              }}
            />
            <CiHeart className='wishlist-icon' onClick={() => handleAddWishlist(product)} />
            <p className='para2 bold-1 mt-1'><span className=''>{product.symbol}</span>{product.Prize} <span className='overline-sam'>{product.symbol}</span><span className='overline'>{product.discountPrize}</span></p>
            <p className='para1 mt-1'>{product.title}</p>
            <button className='btn-width-1 mt-1' onClick={() => handleAddtoCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className='product-flex  '>
        {productCart.map((product) => (
          <div className='product-container' key={product.id}>
            <img
              className="img-width-4"
              src={product.img}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top smoothly
                navigate('/product-detail'); // Navigates to the product detail page
              }}
            />
            <CiHeart className='wishlist-icon' onClick={() => handleAddWishlist(product)} />
            <p className='para2 bold-1 mt-1'><span className=''>{product.symbol}</span>{product.Prize} <span className='overline-sam'>{product.symbol}</span><span className='overline'>{product.discountPrize}</span></p>
            <p className='para1 mt-1'>{product.title}</p>
            <button className='btn-width-1 mt-1' onClick={() => handleAddtoCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default FilterPage
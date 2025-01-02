import React from 'react'
import Har from '../../assets/Jewellery/har.jpg'
import Har1 from '../../assets/Jewellery/har1.jpg'
import Kangan from '../../assets/Jewellery/kangan.jpg'
import { CiHeart } from "react-icons/ci";


const FilterPage = () => {
  const productCart = [
    { id: 1, img: Kangan, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 2, img: Har, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 3, img: Har1, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
    { id: 4, img: Kangan, title: 'The rings of the road', Prize: '4524', symbol: '$', discountPrize: '4528' },
  ]
  return (
    <div className='page'>
      <div className='filter-page'>
        <div className=''>
          <select className='select-width'>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
        <div className=''>
          <select className='select-width'>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
        <div >
          <select className='select-width'>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
        <div >
          <select className='select-width'>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
        <div className=''>
          <select className='select-width'>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
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
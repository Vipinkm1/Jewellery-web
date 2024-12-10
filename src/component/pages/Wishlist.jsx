import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from '../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Wishlist = () => {
  const { wishlist, removeWishlist } = useCart()


  const handleRemoveWishlist = (index) => {
    removeWishlist(index)
    toast.success('Successfully deleted wishlist product')
  }
  //  delete product 
  return (
    <div className='page'>
      <h1 className='center'>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="product-flex pd-top">
          {wishlist.map((productWishlist, index) => (
            <div className="product-container" key={index}>
              {productWishlist.img ? (
                <img className="img-width-4" src={productWishlist.img} />
              ) : (
                <p>No Image Available</p>
              )}
              <AiOutlineDelete className='delete-icon' onClick={() => handleRemoveWishlist(index)} />
              <p className="para2 bold-1 mt-1">
                {productWishlist.Prize}{' '}
                <span className="overline-sam">{productWishlist.symbol}</span>
                <span className="overline">{productWishlist.discountPrize}</span>
              </p>
              <p className="para1 mt-1">{productWishlist.title}</p>
              <button className="btn-width-1 mt-1">Add to Cart</button>
            </div>
          ))}
        </div>
      )}
      <ToastContainer/>
    </div>

  )
}

export default Wishlist
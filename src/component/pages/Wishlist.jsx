import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";


const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Retrieve the wishlist from localStorage
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const handleDeleteProduct = (id) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };


  //  delete product 
  return (
    <div className='page'>
      <h1 className='center'>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="product-flex pd-top">
          {wishlist.map((product) => (
            <div className="product-container" key={product.id}>
              <img className="img-width-4" src={product.img} />
              <AiOutlineDelete className='delete-icon' onClick={() => handleDeleteProduct(product.id)} />
              <p className="para2 bold-1 mt-1">
                {product.Prize}{' '}
                <span className="overline-sam">{product.symbol}</span>
                <span className="overline">{product.discountPrize}</span>
              </p>
              <p className="para1 mt-1">{product.title}</p>
              <button className="btn-width-1 mt-1">Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
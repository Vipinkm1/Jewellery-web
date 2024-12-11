import React, { useState } from 'react'

import { useCart } from '../Context/Context'
const Cart = () => {
    const [valueinc, setValueInc] = useState(0)
    const { cart, removeCart } = useCart()

    const handleDec = () => {
        setValueInc(valueinc - 1)
    }
    const handleInc = () => {
        setValueInc(valueinc + 1)
    }
    const handleRemove = (index) => {
        removeCart(index)
    }
    return (
        <div className='page'>
            {cart.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className='cart-flex '>
                    <div className='cart-container-1'>
                        <h1 className='center'>Shopping Cart</h1>
                        {cart.map((cartItem, index) => (
                            <div className='cart-border mt-1 ' key={index}>
                                <div className='cart-flex'>
                                    <img src={cartItem.img} className='cart-img-width' />
                                    <div className='cartflex-2'>
                                        <p className='para1'>{cartItem.title}</p>
                                        <div className='cartflex-1'>
                                            <p className='para2 bold-1 mt-1'>{cartItem.Prize}<span className='overline-sam'>{cartItem.symbol}</span><span className='overline'>{cartItem.discountPrize}</span></p>
                                            <div className='cart-flex'>
                                                <button className='inc' onClick={handleDec}>-</button>
                                                <p className='valuesize'>{valueinc}</p>
                                                <button className='inc' onClick={handleInc}>+</button>
                                            </div>
                                        </div>
                                        <div className='cart-flex'>
                                            <button className='remove' onClick={() => handleRemove(index)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cart-container-2'>
                        <h1 className='center'>Cart Summery</h1>
                        <div className='cart-border mt-1'>
                            <div className='summary-flex'>
                                <div> Estimate: </div>
                                <div>$00000 </div>
                            </div>
                            <div className='summary-flex pd-top-1'>
                                <div>Total Discount: </div>
                                <div>$<span className="overline">0000</span></div>
                            </div>
                            <div className='summary-flex pd-top-1'>
                                <div>Total Amount: </div>
                                <div>$0000</div>
                            </div>
                            <div className='pd-top-1 center'>
                                <button className='checkout-btn'>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Cart
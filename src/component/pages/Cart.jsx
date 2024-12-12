import React, { useState } from 'react'

import { useCart } from '../Context/Context'
const Cart = () => {

    const { cart, removeCart } = useCart()

    const [quantities, setQuantities] = useState(
        cart.map(() => 1)
    )

    const handleDec = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities)
        }

    }
    const handleInc = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities)
    }

    const calculateTotalPrice = () => {
        return cart.reduce((total, cartItem, index) => {
            return total + (cartItem.Prize || 0) * quantities[index];
        }, 0).toFixed(2);
    };
    const calculateDiscount = () => {
        const total = parseFloat(calculateTotalPrice());
        return (total * 0.10).toFixed(2)
    }

    const calculateFinalTotal = () => {
        const total = parseFloat(calculateTotalPrice())
        const discount = parseFloat(calculateDiscount())
        return (total - discount).toFixed(2)
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
                        <h2 className='center font'>Shopping Cart</h2>
                        {cart.map((cartItem, index) => (
                            <div className='cart-border mt-1 ' key={index}>
                                <div className='cart-flex'>
                                    <img src={cartItem.img} className='cart-img-width' />
                                    <div className='cartflex-2'>
                                        <p className='para1'>{cartItem.title}</p>
                                        <div className='cartflex-1'>
                                            <p className='para2 bold-1 mt-1'>{cartItem.Prize}<span className='overline-sam'>{cartItem.symbol}</span><span className='overline'>{cartItem.discountPrize}</span></p>
                                            <div className='cart-flex'>
                                                <button className='inc' onClick={() => handleDec(index)}>-</button>
                                                <p className='valuesize'>{quantities[index]}</p>
                                                <button className='inc' onClick={() =>handleInc(index)}>+</button>
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
                        <h2 className='center'>Order Summery</h2>
                        <div className='cart-border mt-1'>
                            <div className='summary-flex'>
                                <div> Estimate: </div>
                                <div>${calculateTotalPrice()}</div>
                            </div>
                            <div className='summary-flex pd-top-1'>
                                <div>Total Discount: </div>
                                <div>$<span className="overline">{calculateDiscount()}</span></div>
                            </div>
                            <div className='summary-flex pd-top-1'>
                                <div>Total Amount: </div>
                                <div>${calculateFinalTotal()}</div>
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
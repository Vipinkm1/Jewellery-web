import { createContext, useContext, useState } from "react";

// crete context 
const Context = createContext();
//  create custom hook to use of the cart context
 export const useCart = () => {
    return useContext(Context)
 }
//   create cartProvider   
export const  CartProvider = ({children}) => {
  const [wishlist, setWishlist] = useState([])
  const [cart, setCart] = useState([])
  const [productDetail, setProductDetail] = useState(null)
//    add to fuction 
const addWishlist = (product) => {
    setWishlist([...wishlist, product])
}
//  remove product 
const removeWishlist = (index) => {
    const delteWishlist = wishlist.filter((_, i) => i !== index)
        setWishlist(delteWishlist)
}
//  gettotal iteme
const getTotalWishlist = () => {
     return wishlist.length;
}
//  add to cart
const addTocart = (product) => {
    setCart([...cart, product])
}
const getTotalCart = ()=> {
    return cart.length;
}
const removeCart = (index) => {
    const deleteCart = cart.filter((_, i) => i !== index)
    setCart(deleteCart)
}
const ShowDetail = (product)=> {
    setProductDetail(product)
}
return (
    <Context.Provider value={{productDetail, wishlist,cart, addWishlist, removeWishlist, getTotalWishlist, addTocart, getTotalCart, removeCart, ShowDetail}}>
        {children}
    </Context.Provider>
)
}



//  Add to cart fuctionality


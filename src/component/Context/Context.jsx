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

return (
    <Context.Provider value={{wishlist, addWishlist, removeWishlist, getTotalWishlist}}>
        {children}
    </Context.Provider>
)
}
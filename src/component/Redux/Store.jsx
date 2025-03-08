
import { configureStore } from '@reduxjs/toolkit'
import  authReducer from '../Redux/authSlice'


 const Store = configureStore({
    reducer: {
       auth: authReducer
    }
 })

export default Store
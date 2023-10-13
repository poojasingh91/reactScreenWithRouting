import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './routes/cartSlice'
import loginSlice from './routes/loginSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        login: loginSlice,
    },
})

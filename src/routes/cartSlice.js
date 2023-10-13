import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartArray: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartArray = [...state.cartArray, action.payload]
        },
        removeFromCart: (state, action) => {
            state.cartArray = state.cartArray.filter(
                (product) => product.id !== action.payload.id
            )
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const tokenSliceReducer = createSlice({
    name: 'token',
    initialState: {
        token: null,
    },
    reducers: {
        createToken: (state, action) => {
            state.token = action.payload
        },
        destroyToken: (state) => {
            state.token = null
        },
    },
})

export const { createToken, destroyToken } = tokenSliceReducer.actions

export default tokenSliceReducer.reducer

import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isloggedIn: false,
        token: null,
        email: null,
        username: null,
        thumbnail:null,
        title:null
    },
    reducers: {
        login: (state, action) => {
            state.isloggedIn = true
            state.token = action.payload.token
            state.email = action.payload.email
            state.username = action.payload.username
            state.thumbnail=action.payload.thumbnail
            state.title=action.payload.title
        },
        logout: (state, action) => {
            state.isloggedIn = false
            state.token = null
            state.email = null
            state.username = null
            state.thumbnail=null
            state.title=null
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export default loginSlice.reducer

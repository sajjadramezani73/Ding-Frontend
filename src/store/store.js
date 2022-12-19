import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userSlice';
import mapReducer from './mapSlice'

export const store = configureStore({
    reducer: {
        user: usersReducer,
        map: mapReducer
    },
})
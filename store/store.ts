import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../src/slices/userSlice'
import dataSlice from '../src/slices/dataSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    data: dataSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
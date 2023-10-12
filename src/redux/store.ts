import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './features/filterSlice'
import paginationReducer from './features/paginationSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'


export const store = configureStore({
   reducer: {
      filterReducer,
      paginationReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
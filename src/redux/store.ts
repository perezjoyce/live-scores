import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from '@/redux/features/drawerSlice'
import filterReducer from '@/redux/features/filterSlice'
import paginationReducer from '@/redux/features/paginationSlice'

export const store = configureStore({
   reducer: {
      drawerReducer,
      filterReducer,
      paginationReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { drawerReducer, filterReducer, paginationReducer } from '@/redux/features'

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
import { createSlice } from '@reduxjs/toolkit'
import { DrawerState, InitialDrawerState } from '@/data/types'

export const initialState = {
   value: {
      isDrawerOpen: false
   } as DrawerState
} as InitialDrawerState

export const drawer = createSlice({
   name: 'drawer',
   initialState,
   reducers: {
      toggleDrawer: (state) => {
         return {
            value: {
               isDrawerOpen: !state.value.isDrawerOpen
            }
         }
      }
   }
})

export const { toggleDrawer } = drawer.actions
export default drawer.reducer
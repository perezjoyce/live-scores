import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
   value: DrawerState
}

type DrawerState = {
   isDrawerOpen: boolean,
}

const initialState = {
   value: {
      isDrawerOpen: false
   } as DrawerState
} as InitialState

export const drawer = createSlice({
   name: 'drawer',
   initialState,
   reducers: {
      toggleDrawer: (state) => {
         console.log(state.value)
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
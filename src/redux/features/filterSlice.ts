import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CountObj, InitialFilterState, FilterType, FilterObj } from '@/data/types'
import { FilterMap } from '@/data/maps'

const initialState = {
   value: {
      count: {
         all: null,
         result: null,
         live: null,
         upcoming: null,
      } as CountObj,
      currentFilter: FilterMap.get(FilterType.All) as FilterObj,
   }
} as InitialFilterState

export const filter = createSlice({
   name: "filter",
   initialState,
   reducers: {
      setFilter: (state, action: PayloadAction<string>) => {
         return {
            value: {
               ...state.value,
               currentFilter: FilterMap.get(action.payload)
            }
         }
      },
      setCounters: (state, action: PayloadAction<CountObj>) => {
         return {
            value: {
               ...state.value,
               count: action.payload,
            }
         }
      }
   }
})

export const { setFilter, setCounters } = filter.actions
export default filter.reducer
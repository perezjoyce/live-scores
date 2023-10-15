import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CountObj, InitialFilterState, FilterType } from '@/data/types'
import { FilterMap } from '@/data/maps'

const initialState = {
   value: {
      counters: {
         all: null,
         result: null,
         live: null,
         upcoming: null,
      } as CountObj,
      selectedFilter: FilterType.All,
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
               selectedFilter: FilterMap.get(action.payload).type
            }
         }
      },
      setCounters: (state, action: PayloadAction<CountObj>) => {
         return {
            value: {
               ...state.value,
               counters: action.payload,
            }
         }
      }
   }
})

export const { setFilter, setCounters } = filter.actions
export default filter.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
   value: FilterState
}

type FilterState = {
   currentFilter: Filter,
}

enum Filter {
   All = "All",
   Result = "Result",
   Live = "Live",
   Upcoming = "Upcoming",
}

const initialState = {
   value: {
      currentFilter: Filter.All,
   } as FilterState
} as InitialState

export const filter = createSlice({
   name: "filter",
   initialState,
   reducers: {
      setFilter: (_, action: PayloadAction<string>) => {
         return {
            value: {
               currentFilter: Filter[action.payload]
            }
         }
      },
      resetFilter: () => {
         return initialState
      }
   }
})

export const { setFilter, resetFilter } = filter.actions
export default filter.reducer
export const FilterTypes = Object.keys(Filter)
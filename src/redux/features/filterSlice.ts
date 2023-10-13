import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
   value: {
      currentFilter: FilterObj,
      count: CountObj,
   }
}

export type CountObj = {
   all: number,
   result: number,
   live: number,
   upcoming: number,
}

export enum FilterType {
   All = "all",
   Result = "result",
   Live = "live",
   Upcoming = "upcoming",
}

export type FilterObj = {
   type: FilterType,
   label: string,
}

export const FilterMap = new Map([
   ["all", { type: FilterType.All, label: "All" }],
   ["result", { type: FilterType.Result, label: "Result" }],
   ["live", { type: FilterType.Live, label: "Live" }],
   ["upcoming", { type: FilterType.Upcoming, label: "Upcoming" }],
   ["canceled", { type: FilterType.Upcoming, label: "Cancelled" }],
])

export enum StatusType {
   Finished = "finished",
   Inprogress = "inprogress",
   NotStarted = "notstarted",
   Canceled = "canceled",
   All = "all"
}

export type StatusObj = {
   type: StatusType,
   label: string,
}

export const StatusMap = new Map([
   ["finished", { type: StatusType.Finished, label: "ENDED" }],
   ["inprogress", { type: StatusType.Inprogress, label: "LIVE" }],
   ["notstarted", { type: StatusType.NotStarted, label: "NOT STARTED" }],
   ["canceled", { type: StatusType.Canceled, label: "CANCELLED" }],
])

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
} as InitialState

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
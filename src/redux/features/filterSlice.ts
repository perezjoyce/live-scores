import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
   value: FilterState
}

type FilterState = {
   currentFilter: FilterObj,
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
      currentFilter: FilterMap.get(FilterType.All) as FilterObj
   } as FilterState
} as InitialState

export const filter = createSlice({
   name: "filter",
   initialState,
   reducers: {
      setFilter: (_, action: PayloadAction<string>) => {
         return {
            value: {
               currentFilter: FilterMap.get(action.payload)
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
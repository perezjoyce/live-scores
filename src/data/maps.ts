import { FilterType, StatusType } from "@/data/types"

export const FilterMap = new Map([
   ["all", { type: FilterType.All, label: "All" }],
   ["result", { type: FilterType.Result, label: "Result" }],
   ["live", { type: FilterType.Live, label: "Live" }],
   ["upcoming", { type: FilterType.Upcoming, label: "Upcoming" }],
])

export const StatusMap = new Map([
   ["finished", { type: StatusType.Finished, label: "ENDED" }],
   ["inprogress", { type: StatusType.Inprogress, label: "LIVE" }],
   ["notstarted", { type: StatusType.NotStarted, label: "UPCOMING" }],
   ["canceled", { type: StatusType.Canceled, label: "CANCELLED" }],
])
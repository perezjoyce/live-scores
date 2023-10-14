export type Game = {
   id: string,
   competition: string,
   country: string,
   timestamp: number,
   status: StatusObj,
   homeTeam: {
      name: string,
      score: number
   },
   awayTeam: {
      name: string,
      score: number
   },
   liveStatus: string,
}

// DRAWER
export type InitialDrawerState = {
   value: DrawerState
}

export type DrawerState = {
   isDrawerOpen: boolean,
}

// PAGINATION
export type InitialPaginationState = {
   value: PaginationState
}

export type PaginationState = {
   currentPage: number,
   totalPages: number,
}

// FILTER
export type InitialFilterState = {
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
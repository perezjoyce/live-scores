import { StatusObj } from "../redux/features/filterSlice";

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
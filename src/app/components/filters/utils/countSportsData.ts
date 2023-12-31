import { CountObj } from '@/data/types';
import { setCounters } from '@/redux/features/filterSlice'

export default function countSportsData(dispatch): CountObj {
   {/*Test fails when sports json is imported from outside the function */ }
   const sports = require('../../../../data/sports.json');

   const groupedData = Array.from(sports).reduce((acc, cur) => {
      // Increment the category count or initialize it to 1 if it doesn't exist
      acc[cur['status']['type']] = (acc[cur['status']['type']] || 0) + 1

      // Increment the total count
      acc["all"] = (acc["all"] || 0) + 1;
      return acc;
   }, {})

   const counters: CountObj = {
      all: groupedData["all"],
      result: groupedData["finished"],
      live: groupedData["inprogress"],
      upcoming: groupedData["notstarted"],
   }

   dispatch(setCounters(counters))
   return counters
}
"use client"
import { memo, useCallback } from "react"
import { stripNonNumChars } from '../utils'

const MAX_LIVE_STATUS_MINS = 90
const STROKE_DASH_ARRAY = 250

export default function Progress({ liveStatus }: { liveStatus: string }) {
   function getLabel() : string {
      if(!["Canceled", "-"].includes(liveStatus)) {
         return liveStatus;
      }
      return ""
   }
   
   function getProgress() : React.ReactNode | null {
      if(!["Canceled", "-"].includes(liveStatus)) {
         return (
            <circle
               id="progress-ring"
               className="text-green-500 stroke-current"
               stroke-width="4"
               stroke-linecap="round"
               cx="50"
               cy="50"
               r="40"
               fill="none"
               stroke-dasharray={STROKE_DASH_ARRAY} 
               stroke-dashoffset={getOffset()}
               transform="rotate(-90) translate(-100 0)"
               />
         )
      }
   }
   
   function getOffset() : string {
      switch(liveStatus) {
         case "FT":
            return "0"
         case "HT":
            return (STROKE_DASH_ARRAY / 2).toString()
         default:
            return `calc(${STROKE_DASH_ARRAY} - (${STROKE_DASH_ARRAY} * ${stripNonNumChars(liveStatus)}) / ${MAX_LIVE_STATUS_MINS})`
      }
   }

   return (
      <div className="w-20 h-20 relative">
         <p className="text-green-500 absolute top-7 left-8">{getLabel()}</p>

         <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
               className="text-gray-700 stroke-current"
               stroke-width="4"
               cx="50"
               cy="50"
               r="40"
               fill="transparent"
            ></circle>

            {getProgress()}
         </svg>
      </div>
   )
}

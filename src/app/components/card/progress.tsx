"use client"
import { STROKE_DASH_ARRAY, getOffset, getProgressLabel } from '@/card/utils'

export default function Progress({ liveStatus }: { liveStatus: string }) {
   return (
      <div className="w-20 h-20 relative" data-testid="progressIndicator">
         <p className="text-green-500 absolute top-7 left-8">{getProgressLabel(liveStatus)}</p>

         <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
               className="text-gray-700 stroke-current"
               strokeWidth="4"
               cx="50"
               cy="50"
               r="40"
               fill="transparent"
            ></circle>
            {
               !["Canceled", "-"].includes(liveStatus) &&
               (
                  <circle
                     className="text-green-500 stroke-current"
                     strokeWidth="4"
                     strokeLinecap="round"
                     cx="50"
                     cy="50"
                     r="40"
                     fill="none"
                     strokeDasharray={STROKE_DASH_ARRAY}
                     strokeDashoffset={getOffset(liveStatus)}
                     transform="rotate(-90) translate(-100 0)"
                  />
               )
            }
         </svg>
      </div>
   )
}

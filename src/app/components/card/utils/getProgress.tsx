import { STROKE_DASH_ARRAY, MAX_LIVE_STATUS_MINS, stripNonNumChars } from '@/card/utils'

export default function getProgress(liveStatus: string): React.ReactNode | null {
   if (!["Canceled", "-"].includes(liveStatus)) {
      return (
         <circle
            id="progress-ring"
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
}

function getOffset(liveStatus: string): string {
   switch (liveStatus) {
      case "FT":
         return "0"
      case "HT":
         return (STROKE_DASH_ARRAY / 2).toString()
      default:
         return `calc(${STROKE_DASH_ARRAY} - (${STROKE_DASH_ARRAY} * ${stripNonNumChars(liveStatus)}) / ${MAX_LIVE_STATUS_MINS})`
   }
}
import { STROKE_DASH_ARRAY, MAX_LIVE_STATUS_MINS, stripNonNumChars } from '@/card/utils'

export default function getOffset(liveStatus: string): string {
   switch (liveStatus) {
      case "FT":
         return "0"
      case "HT":
         return (STROKE_DASH_ARRAY / 2).toString()
      default:
         return getCalcOffset(liveStatus)
   }
}

function getCalcOffset(liveStatus: string): string {
   return `calc(${STROKE_DASH_ARRAY} - (${STROKE_DASH_ARRAY} * ${stripNonNumChars(liveStatus)}) / ${MAX_LIVE_STATUS_MINS})`;
}
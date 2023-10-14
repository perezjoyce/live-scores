import { StatusType } from "@/data/types"

const STATUS_COLOR = new Map([
   [StatusType.Finished, "text-green-500"],
   [StatusType.Inprogress, "text-yellow-400"],
   [StatusType.Canceled, "text-red-400"],
   [StatusType.NotStarted, "text-gray-400"],
   [StatusType.All, "text-gray-400"],
])

const MAX_LIVE_STATUS_MINS = 90
const STROKE_DASH_ARRAY = 250

export { STATUS_COLOR, MAX_LIVE_STATUS_MINS, STROKE_DASH_ARRAY }
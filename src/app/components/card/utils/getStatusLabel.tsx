
import { StatusObj, StatusType } from "@/data/types";
import formatTime from "@/card/utils/formatTime";

export default function getStatusLabel(status: StatusObj, timestamp: number): string {
   if (status.type !== StatusType.NotStarted) {
      return status.label
   }

   return formatTime(timestamp);
}
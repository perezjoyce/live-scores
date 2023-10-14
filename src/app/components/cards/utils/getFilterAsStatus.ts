import { FilterType, StatusType } from "@/data/types"

export default function getFilterAsStatus(filterType: string, itemStatusType): string {
   switch (filterType) {
      case FilterType.Live:
         return StatusType.Inprogress
      case FilterType.Upcoming:
         return StatusType.NotStarted
      case FilterType.Result:
         return StatusType.Finished
      default:
         return itemStatusType
   }
}
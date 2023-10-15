import getFilterAsStatus from "@/cards/utils/getFilterAsStatus"
import { FilterType, StatusType } from "@/data/types"

describe("getFilterAsStatus Function", () => {
   it("should return 'inprogress' if the active filter is 'live'", () => {
      expect(getFilterAsStatus(FilterType.Live, "")).toBe(StatusType.Inprogress)
   })

   it("should return 'notstarted' if the active filter is 'upcoming'", () => {
      expect(getFilterAsStatus(FilterType.Upcoming, "")).toBe(StatusType.NotStarted)
   })

   it("should return 'finished' if the active filter is 'result'", () => {
      expect(getFilterAsStatus(FilterType.Result, "")).toBe(StatusType.Finished)
   })

   it("should return the second argument if the active filter is 'all'", () => {
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.Inprogress)
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.NotStarted)
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.Finished)
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.Canceled)
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.All)
      expect(getFilterAsStatus(FilterType.All, "")).toBe("")
   })
})
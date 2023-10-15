import getFilterAsStatus from "@/cards/utils/getFilterAsStatus"
import { FilterType, StatusType } from "@/data/types"

describe("getFilterAsStatus", () => {
   it("returns inprogress if the filterType is live", () => {
      expect(getFilterAsStatus(FilterType.Live, "")).toBe(StatusType.Inprogress)
   })

   it("returns notstarted if the filterType is upcoming", () => {
      expect(getFilterAsStatus(FilterType.Upcoming, "")).toBe(StatusType.NotStarted)
   })

   it("returns finished if the filterType is result", () => {
      expect(getFilterAsStatus(FilterType.Result, "")).toBe(StatusType.Finished)
   })

   it("returns the second argument if the filter type is neither live, upcoming, or result", () => {
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.Inprogress)
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.NotStarted)
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.Finished)
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.Canceled)
      expect(getFilterAsStatus(FilterType.All, "")).not.toBe(StatusType.All)
      expect(getFilterAsStatus(FilterType.All, "")).toBe("")
   })
})
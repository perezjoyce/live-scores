import { getProgressLabel } from "@/card/utils"

type ProgressLabelObj = {
   liveStatus: string,
   expectedResult: string,
}

const HT = { liveStatus: "HT", expectedResult: "HT" } as ProgressLabelObj
const LT = { liveStatus: "LT", expectedResult: "LT" } as ProgressLabelObj
const DASH = { liveStatus: "-", expectedResult: "" } as ProgressLabelObj
const CANCELED = { liveStatus: "Canceled", expectedResult: "" } as ProgressLabelObj
const NUMSTR1 = { liveStatus: "55", expectedResult: "55" } as ProgressLabelObj
const NUMSTR2 = { liveStatus: "45+", expectedResult: "45+" } as ProgressLabelObj

describe("getProgressLabel Function", () => {
   it("should return an empty string if the liveStatus is Canceled", () => {
      expect(getProgressLabel(CANCELED.liveStatus)).toBe(CANCELED.expectedResult)
      expect(getProgressLabel(CANCELED.liveStatus)).not.toBe(CANCELED.liveStatus)
   })

   it("should return an empty string if the liveStatus is '-'", () => {
      expect(getProgressLabel(DASH.liveStatus)).toBe(DASH.expectedResult)
      expect(getProgressLabel(DASH.liveStatus)).not.toBe(DASH.liveStatus)
   })

   it("should return the liveStatus itself if the liveStatus is HT, LT, or NUMSTR", () => {
      expect(getProgressLabel(HT.liveStatus)).toBe(HT.expectedResult)
      expect(getProgressLabel(LT.liveStatus)).toBe(LT.expectedResult)
      expect(getProgressLabel(NUMSTR1.liveStatus)).toBe(NUMSTR1.expectedResult)
      expect(getProgressLabel(NUMSTR2.liveStatus)).toBe(NUMSTR2.expectedResult)
   })
})

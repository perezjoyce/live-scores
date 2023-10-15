import { getOffset } from "@/card/utils"
{/*
   const MAX_LIVE_STATUS_MINS = 90
   const STROKE_DASH_ARRAY = 250
*/}
const FT_DASHOFFSET = "0"
const HT_DASHOFFSET = "125"
const NUM_STRING_OFFSET1 = "56" // STROKE_DASH_ARRAY / 2
const NUM_STRING_OFFSET1_DASHOFFSET = "calc(250 - (250 * 56) / 90)"
const NON_STRING_OFFSET2 = "45+"
const NUM_STRING_OFFSET2_DASHOFFSET = "calc(250 - (250 * 45) / 90)"
const NUM_STRING_OFFSET2_DASHOFFSET_WRONG = "calc(250 - (250 * 45+) / 90)"

describe("getOffset Function", () => {
   it("should return 0 if liveStatus is FT", () => {
      expect(getOffset("FT")).toBe(FT_DASHOFFSET)
   })

   it("should return 125 if liveStatus is HT", () => {
      expect(getOffset("HT")).toBe(HT_DASHOFFSET)
   })

   it("should return a calc value if liveStatus is neither FT nor HT", () => {
      expect(getOffset(NUM_STRING_OFFSET1)).toContain(NUM_STRING_OFFSET1)
      expect(getOffset(NUM_STRING_OFFSET1)).toBe(NUM_STRING_OFFSET1_DASHOFFSET)

      expect(getOffset(NON_STRING_OFFSET2)).not.toContain(NON_STRING_OFFSET2)
      expect(getOffset(NON_STRING_OFFSET2)).not.toBe(NUM_STRING_OFFSET2_DASHOFFSET_WRONG)
      expect(getOffset(NON_STRING_OFFSET2)).toBe(NUM_STRING_OFFSET2_DASHOFFSET)
   })
})

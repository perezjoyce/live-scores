import { formatTime } from "@/card/utils"

const TIMESTAMP1 = 1672546721
const FORMATTED_TIMESTAMP1 = "JAN 1st 04:18"

const TIMESTAMP2 = 1470580200
const FORMATTED_TIMESTAMP2 = "AUG 7th 14:30"

const TIMESTAMP3 = 1697331985
const FORMATTED_TIMESTAMP3 = "OCT 15th 01:06"

const TIMESTAMP4 = 1482289961
const FORMATTED_TIMESTAMP4 = "DEC 21st 03:12"

describe('formatTime Function', () => {
   it("should set the correct month", () => {
      expect(formatTime(TIMESTAMP1)).toContain("JAN")
      expect(formatTime(TIMESTAMP2)).toContain("AUG")
      expect(formatTime(TIMESTAMP3)).toContain("OCT")
      expect(formatTime(TIMESTAMP4)).toContain("DEC")
   })

   it("should set the correct nth day", () => {
      expect(formatTime(TIMESTAMP1)).toContain("1st")
      expect(formatTime(TIMESTAMP2)).toContain("7th")
      expect(formatTime(TIMESTAMP3)).toContain("15th")
      expect(formatTime(TIMESTAMP4)).toContain("21st")
   })

   it("should set the correct time", () => {
      expect(formatTime(TIMESTAMP1)).toContain("04:18")
      expect(formatTime(TIMESTAMP2)).toContain("14:30")
      expect(formatTime(TIMESTAMP3)).toContain("01:06")
      expect(formatTime(TIMESTAMP4)).toContain("03:12")
   })

   it("should set the correct FORMATTED_ time", () => {
      expect(formatTime(TIMESTAMP1)).toBe(FORMATTED_TIMESTAMP1)
      expect(formatTime(TIMESTAMP2)).toBe(FORMATTED_TIMESTAMP2)
      expect(formatTime(TIMESTAMP3)).toBe(FORMATTED_TIMESTAMP3)
      expect(formatTime(TIMESTAMP4)).toBe(FORMATTED_TIMESTAMP4)
   })
})

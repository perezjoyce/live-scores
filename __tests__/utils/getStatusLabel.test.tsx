import { getStatusLabel } from "@/card/utils";
import { StatusMap } from "@/data/maps";

const TIMESTAMP = 1482289961
const ENDED = StatusMap.get("finished")
const LIVE = StatusMap.get("inprogress")
const CANCELED = StatusMap.get("canceled")
const NOTSTARTED = StatusMap.get("notstarted")
const FORMATTED_TIMESTAMP = "DEC 21st 03:12"

describe("getStatusLabel Function", () => {
   it("should return the status label if the status type is ENDED", () => {
      expect((getStatusLabel(ENDED, TIMESTAMP))).toBe(ENDED.label)
   })

   it("should return the status label if the status type is LIVE", () => {
      expect((getStatusLabel(LIVE, TIMESTAMP))).toBe(LIVE.label)
   })

   it("should return the status label if the status type is CANCELED", () => {
      expect((getStatusLabel(CANCELED, TIMESTAMP))).toBe(CANCELED.label)
   })

   it("should return the formatted time if the status type is NOT STATED", () => {
      expect((getStatusLabel(NOTSTARTED, TIMESTAMP))).not.toBe(NOTSTARTED.label)
      expect((getStatusLabel(NOTSTARTED, TIMESTAMP))).toBe(FORMATTED_TIMESTAMP)
   })
})

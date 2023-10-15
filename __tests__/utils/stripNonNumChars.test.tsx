import { stripNonNumChars } from "@/app/components/card/utils"

const NON_NUM_CHAR_1 = "45+"
const NON_NUM_CHAR_2 = "a4b5c'"
const NON_NUM_CHAR_3 = " *4? (5"
const EXPECTED_RESULT = "45"

describe("stripNonNumChars Function", () => {
   it("should a string with numeric characeters only", () => {
      expect((stripNonNumChars(NON_NUM_CHAR_1))).toBe(EXPECTED_RESULT)
      expect((stripNonNumChars(NON_NUM_CHAR_1))).not.toContain("+")

      expect((stripNonNumChars(NON_NUM_CHAR_2))).toBe(EXPECTED_RESULT)
      expect((stripNonNumChars(NON_NUM_CHAR_1))).not.toContain("a")
      expect((stripNonNumChars(NON_NUM_CHAR_1))).not.toContain("b")
      expect((stripNonNumChars(NON_NUM_CHAR_1))).not.toContain("c")

      expect((stripNonNumChars(NON_NUM_CHAR_3))).toBe(EXPECTED_RESULT)
      expect((stripNonNumChars(NON_NUM_CHAR_1))).not.toContain(" ")
      expect((stripNonNumChars(NON_NUM_CHAR_1))).not.toContain("*")
      expect((stripNonNumChars(NON_NUM_CHAR_1))).not.toContain("?")
      expect((stripNonNumChars(NON_NUM_CHAR_1))).not.toContain("(")
   })
})

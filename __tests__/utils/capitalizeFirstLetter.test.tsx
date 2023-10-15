import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter"

describe("capitalizeFirstLetter Function", () => {
   it("should capitalize the first letter of a given string", () => {
      expect(capitalizeFirstLetter("all")).toBe("All")
      expect(capitalizeFirstLetter("result")).toBe("Result")
      expect(capitalizeFirstLetter("live")).toBe("Live")
      expect(capitalizeFirstLetter("upcoming")).toBe("Upcoming")

      expect(capitalizeFirstLetter("all")).not.toBe("all")
      expect(capitalizeFirstLetter("result")).not.toBe("result")
      expect(capitalizeFirstLetter("live")).not.toBe("live")
      expect(capitalizeFirstLetter("upcoming")).not.toBe("upcoming")
   })

   it("should handle strings that are not letters", () => {
      expect(capitalizeFirstLetter("1abc")).toBe("1abc")
      expect(capitalizeFirstLetter("{}")).toBe("{}")

      expect(capitalizeFirstLetter("1abc")).not.toBeNull()
      expect(capitalizeFirstLetter("{}")).not.toBeNull()
   })

   it("should handle strings that already start with a capital letter", () => {
      expect(capitalizeFirstLetter("ABC")).toBe("ABC")
      expect(capitalizeFirstLetter("ABC")).not.toBe("Abc")
   })

   it("should handle empty string", () => {
      expect(capitalizeFirstLetter("")).toBe("")
      expect(capitalizeFirstLetter("")).not.toBeNull()
   })
})

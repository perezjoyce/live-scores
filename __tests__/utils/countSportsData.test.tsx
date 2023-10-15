import countSportsData from "@/app/components/filters/utils/countSportsData"

const ALL_DOCS_COUNT = 179
const RESULT_DOCS_COUNT = 93
const LIVE_DOCS_COUNT = 18
const UPCOMING_DOCS_COUNT = 65

jest.mock('@reduxjs/toolkit', () => ({
   ...jest.requireActual('@reduxjs/toolkit'),
   useDispatch: jest.fn(),
}));

describe('countSportsData function', () => {
   it('should count all sports data', () => {
      const mockDispatch = jest.fn()
      const counters = countSportsData(mockDispatch)

      expect(counters).toBeDefined()
      expect(counters).toHaveProperty("all")
      expect(counters.all).toBe(ALL_DOCS_COUNT)
   })

   it('should count result sports data', () => {
      const mockDispatch = jest.fn()
      const counters = countSportsData(mockDispatch)

      expect(counters).toBeDefined()
      expect(counters).toHaveProperty("result")
      expect(counters.result).toBe(RESULT_DOCS_COUNT)
   })

   it('should count live sports data', () => {
      const mockDispatch = jest.fn()
      const counters = countSportsData(mockDispatch)

      expect(counters).toBeDefined()
      expect(counters).toHaveProperty("live")
      expect(counters.live).toBe(LIVE_DOCS_COUNT)
   })

   it('should count upcoming sports data', () => {
      const mockDispatch = jest.fn()
      const counters = countSportsData(mockDispatch)

      expect(counters).toBeDefined()
      expect(counters).toHaveProperty("upcoming")
      expect(counters.upcoming).toBe(UPCOMING_DOCS_COUNT)
   })
});
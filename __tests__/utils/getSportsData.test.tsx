import { DATA_PER_PAGE } from "@/cards/utils/constants"
import getSportsData from "@/cards/utils/getSportsData"
import { FilterType, StatusType } from "@/data/types"

const RESULT_DOCS_COUNT = 93
const LIVE_DOCS_COUNT = 18
const UPCOMING_DOCS_COUNT = 65
const FINISHED_STATUS = StatusType.Finished
const INPROGRESS_STATUS = StatusType.Inprogress
const NOT_STARTED_STATUS = StatusType.NotStarted
const CANCELLED_STATUS = StatusType.Canceled

jest.mock('@reduxjs/toolkit', () => ({
   ...jest.requireActual('@reduxjs/toolkit'),
   useDispatch: jest.fn(),
}));

describe('getSportsData function', () => {
   describe("result/finished sportsData", () => {
      it('should return all documents with "finish" status', () => {
         const filter = FilterType.Result
         const status = FINISHED_STATUS
         const currentPage = 1

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         for (const data of convertedData) {
            expect(data.status.type).toBe(status)
         }
      })

      it('should return 12 documents for "finished" games on the first page', () => {
         const filter = FilterType.Result
         const status = FINISHED_STATUS
         const currentPage = 1

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         expect(convertedData.length).toEqual(DATA_PER_PAGE)
      })

      it('should return 9 documents for "finished" games on the last page', () => {
         const filter = FilterType.Result
         const status = FINISHED_STATUS
         const currentPage = 8
         const remainingDocsCount = RESULT_DOCS_COUNT - (12 * (currentPage - 1))

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         expect(convertedData.length).toEqual(remainingDocsCount)
      })

      it('should return documents with required fields', () => {
         const filter = FilterType.Result
         const status = FINISHED_STATUS
         const currentPage = 1

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         for (const data of convertedData) {
            expect(data).toHaveProperty('id');
            expect(data).toHaveProperty('competition');
            expect(data).toHaveProperty('country');
            expect(data).toHaveProperty('timestamp');
            expect(data).toHaveProperty('status');
            expect(data).toHaveProperty('homeTeam');
            expect(data).toHaveProperty('awayTeam');
            expect(data).toHaveProperty('liveStatus');

            expect(data.homeTeam).toHaveProperty('name');
            expect(data.homeTeam).toHaveProperty('score');
            expect(data.awayTeam).toHaveProperty('name');
            expect(data.awayTeam).toHaveProperty('score');
         }
      })
   });

   describe("live/inprogress sportsData", () => {
      it('should return all documents with "inprogress" status', () => {
         const filter = FilterType.Live
         const status = INPROGRESS_STATUS
         const currentPage = 1

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         for (const data of convertedData) {
            expect(data.status.type).toBe(status)
         }
      })

      it('should return 12 documents for "inprogress" games on the first page', () => {
         const filter = FilterType.Live
         const status = INPROGRESS_STATUS
         const currentPage = 1

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         expect(convertedData.length).toBe(DATA_PER_PAGE)
      })

      it('should return 6 documents for "inprogress" games on the last page', () => {
         const filter = FilterType.Live
         const status = INPROGRESS_STATUS
         const currentPage = 2
         const remainingDocsCount = LIVE_DOCS_COUNT - (12 * (currentPage - 1))

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         expect(convertedData.length).toBe(remainingDocsCount)
      })

      it('should return documents with required fields', () => {
         const status = INPROGRESS_STATUS
         const filter = FilterType.Live
         const currentPage = 1

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         for (const data of convertedData) {
            expect(data).toHaveProperty('id');
            expect(data).toHaveProperty('competition');
            expect(data).toHaveProperty('country');
            expect(data).toHaveProperty('timestamp');
            expect(data).toHaveProperty('status');
            expect(data).toHaveProperty('homeTeam');
            expect(data).toHaveProperty('awayTeam');
            expect(data).toHaveProperty('liveStatus');

            expect(data.homeTeam).toHaveProperty('name');
            expect(data.homeTeam).toHaveProperty('score');
            expect(data.awayTeam).toHaveProperty('name');
            expect(data.awayTeam).toHaveProperty('score');
         }
      })
   });

   describe("upcoming/notstarted sportsData", () => {
      it('should return all documents with "notstarted" status', () => {
         const status = NOT_STARTED_STATUS
         const filter = FilterType.Upcoming
         const currentPage = 1

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         for (const data of convertedData) {
            expect(data.status.type).toBe(status)
         }
      })

      it('should return 12 documents for "notstarted" games on the first page', () => {
         const status = NOT_STARTED_STATUS
         const filter = FilterType.Upcoming
         const currentPage = 1

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         expect(convertedData.length).toBe(DATA_PER_PAGE)
      })

      it('should return 5 documents for "notstarted" games on the last page', () => {
         const status = NOT_STARTED_STATUS
         const filter = FilterType.Upcoming
         const currentPage = 6
         const remainingDocsCount = UPCOMING_DOCS_COUNT - (12 * (currentPage - 1))

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         expect(convertedData.length).toBe(remainingDocsCount)
      })

      it('should return documents with required fields', () => {
         const status = NOT_STARTED_STATUS
         const filter = FilterType.Upcoming
         const currentPage = 1

         const mockDispatch = jest.fn()
         const convertedData = getSportsData(filter, currentPage, mockDispatch)
         for (const data of convertedData) {
            expect(data).toHaveProperty('id');
            expect(data).toHaveProperty('competition');
            expect(data).toHaveProperty('country');
            expect(data).toHaveProperty('timestamp');
            expect(data).toHaveProperty('status');
            expect(data).toHaveProperty('homeTeam');
            expect(data).toHaveProperty('awayTeam');
            expect(data).toHaveProperty('liveStatus');

            expect(data.homeTeam).toHaveProperty('name');
            expect(data.homeTeam).toHaveProperty('score');
            expect(data.awayTeam).toHaveProperty('name');
            expect(data.awayTeam).toHaveProperty('score');
         }
      })
   });

   describe("all sportsData", () => {
      it('should return documents with cancelled status', () => {
         const status = CANCELLED_STATUS
         const filter = FilterType.All
         const currentPage = 8

         const mockDispatch = jest.fn()
         const allItems = getSportsData(filter, currentPage, mockDispatch)
         expect(allItems).toBeDefined();
         expect(allItems.length).toBeGreaterThan(0);

         const statusTypes = new Set(allItems.map((item) => item.status.type));
         expect(statusTypes).toContain(CANCELLED_STATUS);
      })

      it('should return documents with finished status', () => {
         const status = CANCELLED_STATUS
         const filter = FilterType.All
         const currentPage = 1

         const mockDispatch = jest.fn()
         const allItems = getSportsData(filter, currentPage, mockDispatch)
         expect(allItems).toBeDefined();
         expect(allItems.length).toBeGreaterThan(0);

         const statusTypes = new Set(allItems.map((item) => item.status.type));
         expect(statusTypes).toContain(FINISHED_STATUS);
      })

      it('should return documents with live status', () => {
         const status = CANCELLED_STATUS
         const filter = FilterType.All
         const currentPage = 10

         const mockDispatch = jest.fn()
         const allItems = getSportsData(filter, currentPage, mockDispatch)
         expect(allItems).toBeDefined();
         expect(allItems.length).toBeGreaterThan(0);

         const statusTypes = new Set(allItems.map((item) => item.status.type));
         expect(statusTypes).toContain(INPROGRESS_STATUS);
      })

      it('should return documents with cancelled status', () => {
         const status = CANCELLED_STATUS
         const filter = FilterType.All
         const currentPage = 12

         const mockDispatch = jest.fn()
         const allItems = getSportsData(filter, currentPage, mockDispatch)
         expect(allItems).toBeDefined();
         expect(allItems.length).toBeGreaterThan(0);

         const statusTypes = new Set(allItems.map((item) => item.status.type));
         expect(statusTypes).toContain(NOT_STARTED_STATUS);
      })
   });
});
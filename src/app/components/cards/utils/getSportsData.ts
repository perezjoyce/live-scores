import { Action, Dispatch } from '@reduxjs/toolkit'
import { FilterType, Game } from '@/data/types'
import { StatusMap } from '@/data/maps'
import { setTotalPages } from '@/redux/features/paginationSlice'
import getFilterAsStatus from '@/cards/utils/getFilterAsStatus'
import { DATA_PER_PAGE } from '@/cards/utils/constants'

export default function getSportsData(
   currentFilter: string,
   selectedFilter: FilterType,
   currentPage: number,
   dispatch: Dispatch<Action>,
): Game[] {
   {/*Test fails when sports json is imported from outside the function */ }
   const sports = require('../../../../data/sports.json');

   const filteredSportsData = filterSportsData(sports, currentFilter, selectedFilter)
   const paginatedData = paginateSportsData(filteredSportsData, currentPage, dispatch)
   const convertedData = convertSportsData(paginatedData)

   return convertedData;
}

function filterSportsData(sports, currentFilter, selectedFilter) {
   const filteredData = Array.from(sports).filter((item) => item['status']['type'] === getFilterAsStatus(selectedFilter, item['status']['type']))
   return filteredData;
}

function paginateSportsData(sports, currentPage, dispatch) {
   const totalDataCount = sports.length;
   const pageCount = Math.ceil(totalDataCount / DATA_PER_PAGE);
   dispatch(setTotalPages(pageCount))

   if (currentPage < 1 || currentPage > pageCount) {
      return [];
   }

   const start = (currentPage - 1) * DATA_PER_PAGE;
   const end = start + DATA_PER_PAGE;

   const paginatedData = sports.slice(start, end);
   return paginatedData
}

function convertSportsData(sports) {
   const convertedData = sports?.map(
      ({ id, competition, country, timestamp, status, homeTeam, awayTeam, homeScore, awayScore, liveStatus }) => (
         {
            id,
            competition,
            country,
            timestamp,
            status: StatusMap.get(status.type),
            homeTeam: {
               name: homeTeam.name,
               score: homeScore.current ?? 0,
            },
            awayTeam: {
               name: awayTeam.name,
               score: awayScore.current ?? 0,
            },
            liveStatus,
         } as Game
      ))

   return convertedData
}
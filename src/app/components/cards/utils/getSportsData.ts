import { Action, Dispatch } from '@reduxjs/toolkit'
import * as sports from '@/data/sports.json'
import { Game } from '@/data/types'
import { StatusMap } from '@/data/maps'
import { setTotalPages } from '@/redux/features/paginationSlice'
import getFilterAsStatus from '@/cards/utils/getFilterAsStatus'
import { DATA_PER_PAGE } from '@/cards/utils/constants'

export default function getSportsData(
   currentFilter: string,
   currentPage: number,
   dispatch: Dispatch<Action>,
): Game[] {
   const data = Array.from(sports).filter(item => item.status.type === getFilterAsStatus(currentFilter, item.status.type))

   const totalDataCount = data.length;
   const pageCount = Math.ceil(totalDataCount / DATA_PER_PAGE);

   dispatch(setTotalPages(pageCount))

   const paginatedData = Array.from({ length: pageCount }, (_, index) => {
      const start = index * DATA_PER_PAGE;
      return data.slice(start, start + DATA_PER_PAGE);
   });

   const dataForCurrentPage = paginatedData[currentPage - 1];

   return dataForCurrentPage.map(
      ({ id, competition, country, timestamp, status, homeTeam, awayTeam, homeScore, awayScore, liveStatus }) => (
         {
            id,
            competition,
            country,
            timestamp,
            status: StatusMap.get(status.type),
            homeTeam: {
               name: homeTeam.name,
               score: homeScore.current,
            },
            awayTeam: {
               name: awayTeam.name,
               score: awayScore.current,
            },
            liveStatus,
         } as Game
      ))
}
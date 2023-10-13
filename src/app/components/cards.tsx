"use client"
import { useCallback, useMemo } from 'react'
import { useDispatch } from "react-redux"
import * as sports from '@/data/sports.json'
import { Game } from '@/types/index'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { FilterType, StatusMap, StatusType } from '@/redux/features/filterSlice'
import { setTotalPages } from '@/redux/features/paginationSlice'
import MemoizedCard from '@/components/card'

function getSportsData(
   currentFilter: string, currentPage: number, setTotalPageNums: (num) => void)
   : Game[] {
   const data = Array.from(sports).filter(item => item.status.type === getFilterAsStatus(currentFilter, item.status.type))

   const DATA_PER_PAGE = 12;
   const TOTAL_DATA_COUNT = data.length;
   const PAGE_COUNT = Math.ceil(TOTAL_DATA_COUNT / DATA_PER_PAGE);
   setTotalPageNums(PAGE_COUNT)

   const paginatedData = Array.from({ length: PAGE_COUNT }, (_, index) => {
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

function getFilterAsStatus(filterType: string, itemStatusType): string {
   switch (filterType) {
      case FilterType.Live:
         return StatusType.Inprogress
      case FilterType.Upcoming:
         return StatusType.NotStarted
      case FilterType.Result:
         return StatusType.Finished
      default:
         return itemStatusType
   }
}

export default function Cards() {
   const currentFilter = useAppSelector((state) => state.filterReducer.value.currentFilter)
   const currentPage = useAppSelector((state) => state.paginationReducer.value.currentPage)
   const dispatch = useDispatch<AppDispatch>();
   const setTotalPageNums = useCallback((totalPages) => dispatch(setTotalPages(totalPages)), [currentFilter, currentPage])
   const sportsData = useMemo(() => getSportsData(currentFilter.type, currentPage, setTotalPageNums), [currentFilter, currentPage])

   return (
      <section className="bg-gray-200 grow overflow-y-scroll" >
         <div className="mx-auto max-w-7xl px-4 py-6" >
            <div className="flex flex-wrap gap-1">
               {sportsData.map(data => <MemoizedCard key={data.id} game={data} />)}
            </div>
         </div>
      </section>
   )
}
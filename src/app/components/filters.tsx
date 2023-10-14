"use client"
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as sports from '@/data/sports.json'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { setFilter, FilterType, FilterObj, CountObj, setCounters } from '@/redux/features/filterSlice'
import { goToPage } from '@/redux/features/paginationSlice'
import DrawerButton from '@/components/drawerButton'
import MemoizedFilterItem from '@/common/filterItem'

function countSportsData(dispatch) {
   const groupedData = Array.from(sports).reduce((acc, cur) => {
      // Increment the category count or initialize it to 1 if it doesn't exist
      acc[cur.status.type] = (acc[cur.status.type] || 0) + 1

      // Increment the total count
      acc["all"] = (acc["all"] || 0) + 1;
      return acc;
   }, {})

   const counters: CountObj = {
      all: groupedData["all"],
      result: groupedData["finished"],
      live: groupedData["inprogress"],
      upcoming: groupedData["notstarted"],
   }

   dispatch(setCounters(counters))
}

export default function Filters() {
   const { currentFilter, count }: { currentFilter: FilterObj, count: CountObj } = useAppSelector((state) => state.filterReducer.value)

   const dispatch = useDispatch<AppDispatch>();

   useMemo(() => countSportsData(dispatch), [])

   const onClickFilter = (filter: string): void => {
      dispatch(setFilter(filter))
      dispatch(goToPage(1))
   }

   return (
      <>
         <div className="flex flex-row justify-between content-center">
            <div className="hidden lg:flex gap-1">
               {Object.values(FilterType).map(filterType => (
                  <MemoizedFilterItem
                     key={filterType}
                     currentFilter={currentFilter.type}
                     filterType={filterType}
                     count={count?.[filterType]}
                     onClick={onClickFilter}
                     customStyles="py-1 px-6"
                  />
               ))}
            </div>
         </div>

         <DrawerButton />
      </>
   )
}

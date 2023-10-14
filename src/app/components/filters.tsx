"use client"
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as sports from '@/data/sports.json'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { setFilter, FilterType, FilterObj, CountObj, setCounters } from '@/redux/features/filterSlice'
import { goToPage } from '@/redux/features/paginationSlice'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import Drawer from '@/components/drawer'

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
            <ul className="hidden lg:flex gap-1">
               {Object.values(FilterType).map(filterType => (
                  <FilterItem
                     key={filterType}
                     currentFilter={currentFilter.type}
                     filterType={filterType}
                     count={count?.[filterType]}
                     onClick={onClickFilter}
                  />
               ))}
            </ul>
         </div>
         <Drawer />
      </>
   )
}

function FilterItem({ currentFilter, filterType, count, onClick }:
   { currentFilter: FilterType, filterType: FilterType, count: number, onClick: (filter: string) => void }
) {
   const isSelected = currentFilter === filterType
   const stateBasedStyle = isSelected ? 'text-indigo-600 bg-gray-100' : 'text-gray-700 hover:border-gray-100 hover:bg-gray-100'

   return (
      <li key={filterType}>
         <button
            className={`flex items-center rounded py-1 px-6 ${stateBasedStyle}`}
            onClick={() => onClick(filterType)}
         >
            <span className="font-medium">{capitalizeFirstLetter(filterType)}</span>&nbsp;
            <small className="text-xs">{count && `(${count})`}</small>
         </button>
      </li>
   )
}

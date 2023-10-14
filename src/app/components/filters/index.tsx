"use client"
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { CountObj, FilterObj, FilterType } from '@/data/types'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { goToPage } from '@/redux/features/paginationSlice'
import { setFilter } from '@/redux/features/filterSlice'
import MemoizedFilterItem from '@/common/filterItem'
import countSportsData from '@/filters/utils/countSportsData'

export default function Filters() {
   const { currentFilter, count }: { currentFilter: FilterObj, count: CountObj } = useAppSelector((state) => state.filterReducer.value)

   const dispatch = useDispatch<AppDispatch>();

   useMemo(() => countSportsData(dispatch), [])

   const onClickFilter = (filter: string): void => {
      dispatch(setFilter(filter))
      dispatch(goToPage(1))
   }

   return (
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
   )
}

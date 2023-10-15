"use client"
import { useMemo } from 'react'
import { useDispatch } from "react-redux"
import { FilterType } from '@/data/types'
import { AppDispatch, useAppSelector } from '@/redux/store'
import MemoizedCard from '@/app/components/card'
import getSportsData from '@/cards/utils/getSportsData'
import Loader from '../loader'


export default function Cards() {
   const selectedFilter: FilterType = useAppSelector((state) => state.filterReducer.value.selectedFilter)

   const currentPage: number = useAppSelector((state) => state.paginationReducer.value.currentPage)

   const dispatch = useDispatch<AppDispatch>();

   const sportsData = useMemo(() => {
      return getSportsData(selectedFilter, currentPage, dispatch)
   }, [selectedFilter, currentPage])

   return (
      <section className="bg-gray-200 grow overflow-y-scroll">
         <div className="mx-auto max-w-7xl px-4 pb-6" >
            <div className="flex flex-wrap gap-1">
               {sportsData && sportsData?.map(data => <MemoizedCard key={data.id} game={data} />)}
            </div>
         </div>
      </section>
   )
}
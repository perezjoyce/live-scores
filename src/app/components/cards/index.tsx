"use client"
import { useMemo } from 'react'
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from '@/redux/store'
import MemoizedCard from '@/app/components/card'
import getSportsData from '@/cards/utils/getSportsData'

export default function Cards() {
   const currentFilter = useAppSelector((state) => state.filterReducer.value.currentFilter)
   const currentPage = useAppSelector((state) => state.paginationReducer.value.currentPage)
   const dispatch = useDispatch<AppDispatch>();
   const sportsData = useMemo(() => getSportsData(currentFilter.type, currentPage, dispatch), [currentFilter, currentPage])

   return (
      <section className="bg-gray-200 grow overflow-y-scroll">
         <div className="mx-auto max-w-7xl px-4 pb-6" >
            <div className="flex flex-wrap gap-1">
               {sportsData.map(data => <MemoizedCard key={data.id} game={data} />)}
            </div>
         </div>
      </section>
   )
}
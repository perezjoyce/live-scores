"use client"
import { useAppSelector } from '@/redux/store'
import { FilterObj } from '@/redux/features/filterSlice'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

export default function Header() {
   const currentFilter: FilterObj = useAppSelector((state) => state.filterReducer.value.currentFilter)

   return (
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 lg:ml-3 mr-3">
         {capitalizeFirstLetter(currentFilter.type)} Games
      </h2>

   )
}

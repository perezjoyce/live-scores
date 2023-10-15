"use client"
import { FilterType } from '@/data/types';
import { useAppSelector } from '@/redux/store'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

export default function Header() {
   const selectedFilter: FilterType = useAppSelector((state) => state.filterReducer.value.selectedFilter)

   return (
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 lg:ml-3 mr-3">
         {capitalizeFirstLetter(selectedFilter)} Games
      </h2>

   )
}

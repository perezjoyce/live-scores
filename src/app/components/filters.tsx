"use client"
import { setFilter, FilterType, FilterObj } from '../../redux/features/filterSlice'
import { goToPage } from '../../redux/features/paginationSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '../../redux/store'
import Pagination from './pagination';
import Drawer from './drawer'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

export default function Filters() {
   const currentFilter: FilterObj = useAppSelector((state) => state.filterReducer.value.currentFilter)
   const dispatch = useDispatch<AppDispatch>();
   const onClickFilter = (filter: string): void => {
      dispatch(setFilter(filter))
      dispatch(goToPage(1))
   }

   return (
      <section className="bg-white px-4 pb-4">
         <div className="flex flex-row justify-between content-center mx-auto max-w-7xl">
            <div className='flex flex-row content-center items-center'>
               <h2 className="text-xl font-semibold tracking-tight text-gray-900 lg:ml-3 mr-3">{capitalizeFirstLetter(currentFilter.type)} Games</h2>
               <Pagination />
            </div>

            <ul className="hidden lg:flex gap-1">
               {Object.values(FilterType).map(filterType => (
                  <FilterItem key={filterType} currentFilter={currentFilter.type} filterType={filterType} onClick={onClickFilter} />
               ))}
            </ul>
            <Drawer />
         </div>
      </section>
   )
}

function FilterItem({ currentFilter, filterType, onClick }: { currentFilter: FilterType, filterType: FilterType, onClick: (filter: string) => void }) {
   const isSelected = currentFilter === filterType
   const stateBasedStyle = isSelected ? 'text-indigo-600 bg-gray-100' : 'text-gray-700 hover:border-gray-100 hover:bg-gray-100'

   return (
      <li key={filterType}>
         <button
            className={`inline-block rounded py-1 px-3 ${stateBasedStyle}`}
            onClick={() => onClick(filterType)}
         >
            {capitalizeFirstLetter(filterType)} <small>(10)</small>
         </button>
      </li>
   )
}

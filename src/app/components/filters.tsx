"use client"
import { setFilter, FilterTypes } from '../../redux/features/filterSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '../../redux/store'
import Pagination from './pagination';
import Drawer from './drawer'

export default function Filters() {
   const currentFilter = useAppSelector((state) => state.filterReducer.value.currentFilter)
   const dispatch = useDispatch<AppDispatch>();
   const onClickFilter = (filter: string): void => {
      dispatch(setFilter(filter))
   }

   return (
      <section className="bg-white px-4 pb-4">
         <div className="flex flex-row justify-between content-center mx-auto max-w-7xl">
            <div className='flex flex-row content-center items-center'>
               <h2 className="text-xl font-semibold tracking-tight text-gray-900 lg:ml-3 mr-3">All Games</h2>
               <Pagination />
            </div>

            <ul className="hidden lg:flex gap-1">
               {FilterTypes.map(filterType => (
                  <FilterItem currentFilter={currentFilter} filterType={filterType} onClick={onClickFilter} />
               ))}
            </ul>
            <Drawer />
         </div>
      </section>
   )
}

function FilterItem({ currentFilter, filterType, onClick }) {
   const isSelected = currentFilter === filterType
   const stateBasedStyle = isSelected ? 'text-indigo-600 bg-gray-100' : 'text-gray-700 hover:border-gray-100 hover:bg-gray-100'

   return (
      <li key={filterType}>
         <button
            className={`inline-block rounded py-1 px-3 ${stateBasedStyle}`}
            onClick={() => onClick(filterType)}
         >
            {filterType} <small>(10)</small>
         </button>
      </li>
   )
}

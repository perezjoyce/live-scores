
"use client"
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { toggleDrawer } from '@/redux/features/drawerSlice'
import { CountObj, FilterObj, FilterType, setFilter } from '@/redux/features/filterSlice'
import { goToPage } from '@/redux/features/paginationSlice'
import { capitalizeFirstLetter } from '../utils'
import { X_MARK_ICON } from '@/assets/icons'

export default function Drawer() {
   const { currentFilter, count }: { currentFilter: FilterObj, count: CountObj } = useAppSelector((state) => state.filterReducer.value)

   const dispatch = useDispatch<AppDispatch>();

   const onClickDrawerButton = (): void => {
      dispatch(toggleDrawer())
   }

   const onClickFilter = (filter: string): void => {
      dispatch(setFilter(filter))
      dispatch(goToPage(1))
   }

   return (
      <div
         id="offcanvasBottom"
         aria-labelledby="offcanvasBottomLabel"
         data-te-offcanvas-init
         className="fixed inset-y-1 z-10 bottom-0 left-0 right-0 h-[60%] translate-y-full bg-clip-padding bg-white p-6 flex flex-col"
      >
         <div className="flex items-center justify-end mb-4">
            <button
               type="button"
               className="-m-2.5 rounded-md p-2.5 text-gray-700"
               onClick={onClickDrawerButton}
            >
               <span className="sr-only">Close menu</span>
               {X_MARK_ICON}
            </button>
         </div>

         <div className="flex flex-col space-y-2 pt-4">
            {Object.values(FilterType).map(filterType => (
               <DrawerItem
                  key={filterType}
                  currentFilter={currentFilter.type}
                  filterType={filterType}
                  count={count?.[filterType]}
                  onClick={onClickFilter}
               />
            ))}
         </div>
      </div>
   )
}

function DrawerItem({ currentFilter, filterType, count, onClick }:
   { currentFilter: FilterType, filterType: FilterType, count: number, onClick: (filter: string) => void }
) {
   const isSelected = currentFilter === filterType
   const stateBasedStyle = isSelected ? 'text-indigo-600 bg-gray-100' : 'text-gray-700 hover:border-gray-100 hover:bg-gray-100'

   return (
      <button
         key={filterType}
         onClick={() => onClick(filterType)}
         className={`flex justify-between rounded-lg p-3 font-semibold leading-7 ${stateBasedStyle}`}
      >
         <span>{capitalizeFirstLetter(filterType)}</span>
         <small className='ml-3'>{count}</small>
      </button>
   )
}
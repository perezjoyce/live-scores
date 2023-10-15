
"use client"
import { useDispatch } from 'react-redux'
import { CountObj, FilterObj, FilterType } from '@/data/types'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { toggleDrawer } from '@/redux/features/drawerSlice'
import { setFilter } from '@/redux/features/filterSlice'
import { goToPage } from '@/redux/features/paginationSlice'
import MemoizedFilterItem from '@/common/filterItem'
import { X_MARK_ICON } from '@/drawer/utils/icons'

export default function Drawer() {
   const {
      currentFilter,
      counters,
      selectedFilter
   }: {
      currentFilter: FilterObj,
      counters: CountObj,
      selectedFilter: FilterType
   } = useAppSelector((state) => state.filterReducer.value)

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
         className="lg:hidden fixed inset-y-1 z-10 bottom-0 left-0 right-0 h-[60%] translate-y-full bg-clip-padding bg-white p-6 flex flex-col"
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
               <MemoizedFilterItem
                  key={filterType}
                  currentFilter={currentFilter.type}
                  selectedFilter={selectedFilter}
                  filterType={filterType}
                  count={counters?.[filterType]}
                  onClick={onClickFilter}
                  customStyles="ustify-between p-3"
               />
            ))}
         </div>
      </div>
   )
}
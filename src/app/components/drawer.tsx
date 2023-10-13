
"use client"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Dialog } from '@headlessui/react'
import { XMarkIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { CountObj, FilterObj, FilterType, setFilter } from '@/redux/features/filterSlice'
import { goToPage } from '@/redux/features/paginationSlice'
import { capitalizeFirstLetter } from '../utils'

export default function Drawer() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
   const { currentFilter, count }: { currentFilter: FilterObj, count: CountObj } = useAppSelector((state) => state.filterReducer.value)
   const dispatch = useDispatch<AppDispatch>();
   const onClickFilter = (filter: string): void => {
      dispatch(setFilter(filter))
      dispatch(goToPage(1))
   }

   return (
      <>
         <div className="flex lg:hidden">
            <button
               type="button"
               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
               onClick={() => setMobileMenuOpen(true)}
            >
               <span className="sr-only">Open main menu</span>
               <FunnelIcon className="h-6 w-6" aria-hidden="true" />
            </button>
         </div>
         <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
         >
            <Dialog.Panel
               className="fixed inset-y-0 right-0 z-10 w-4/5 overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
               <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                     <span className="sr-only">Live Score</span>
                     <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                     />
                  </a>
                  <button
                     type="button"
                     className="-m-2.5 rounded-md p-2.5 text-gray-700"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     <span className="sr-only">Close menu</span>
                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
               </div>
               <div className="mt-6 flow-root">
                  <div className="flex flex-col space-y-2 py-6">
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
            </Dialog.Panel>
         </Dialog>
      </>
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
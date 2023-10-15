"use client"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { PaginationState } from "@/data/types"
import { goToNextPage, goToPrevPage, goToPage } from '@/redux/features/paginationSlice'
import { NEXT_ICON, PREV_ICON } from "@/pagination/utils/icons"
import PaginationNavButton from "@/common/paginationNavButton"

export default function Pagination() {
   const { currentPage, totalPages }: PaginationState = useAppSelector((state) => state.paginationReducer.value)
   const dispatch = useDispatch<AppDispatch>();

   const onClickPrev = (): void => { dispatch(goToPrevPage()) }

   const onClickNext = (): void => { dispatch(goToNextPage()) }

   const onChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const newPage = parseInt(e.target.value)
      if (newPage <= totalPages) {
         dispatch(goToPage(newPage))
      }
   }

   return (
      <div
         className="isolate inline-flex"
         aria-label="Pagination"
      >
         <PaginationNavButton
            onClick={onClickPrev}
            icon={PREV_ICON}
            screenReaderLabel="Previous"
            customStyles="rounded-l mr-1"
         />
         <input
            data-testid="paginationInput"
            type="number"
            className="w-12 text-center rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={currentPage}
            onChange={(e) => onChangePage(e)}
         />

         <p
            data-testid="nextValue"
            className="relative inline-flex items-center px-4 py-2 text-gray-900" suppressHydrationWarning>
            <span className="mr-4">/</span>
            {totalPages}
         </p>

         <PaginationNavButton
            onClick={onClickNext}
            icon={NEXT_ICON}
            screenReaderLabel="Next"
            customStyles="rounded-r xl:mr-5"
         />
      </div>
   )
}
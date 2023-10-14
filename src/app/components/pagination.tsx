"use client"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { goToNextPage, goToPrevPage, goToPage, PaginationState } from '@/redux/features/paginationSlice'
import { NEXT_ICON, PREV_ICON } from "@/assets/icons"

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
         className="isolate inline-flex -space-x-px rounded-md"
         aria-label="Pagination"
      >
         <button
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 mr-1"
            onClick={onClickPrev}
         >
            <span className="sr-only">Previous</span>
            {PREV_ICON}
         </button>

         <input
            type="number"
            className="w-12 text-center rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={currentPage}
            onChange={(e) => onChangePage(e)}
         />
         <p className="relative inline-flex items-center px-4 py-2 text-gray-900">
            <span className="mr-4">/</span>
            {totalPages}
         </p>

         <button
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            onClick={onClickNext}
         >
            <span className="sr-only">Next</span>
            {NEXT_ICON}
         </button>
      </div>
   )
}
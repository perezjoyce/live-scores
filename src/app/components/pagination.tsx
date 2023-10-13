"use client"
import { useState } from 'react'
import { goToNextPage, goToPrevPage, goToPage } from '../../redux/features/paginationSlice'
import { useDispatch } from "react-redux"
import { PaginationState } from "../../redux/features/paginationSlice"
import { AppDispatch, useAppSelector } from "../../redux/store"

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
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
         <div>
            <nav className="isolate inline-flex -space-x-px rounded-md" aria-label="Pagination">
               <button
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 mr-1"
                  onClick={onClickPrev}
               >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
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
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
               </button>
            </nav>
         </div>
      </div>
   )
}
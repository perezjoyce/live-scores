import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialPaginationState, PaginationState } from '@/data/types'

const initialState = {
   value: {
      currentPage: 1,
      totalPages: 0,
   } as PaginationState
} as InitialPaginationState

export const pagination = createSlice({
   name: "pagination",
   initialState,
   reducers: {
      setTotalPages: (state, action: PayloadAction<number>) => {
         return {
            value: {
               ...state.value,
               totalPages: action.payload,
            }
         }
      },
      goToNextPage: (state) => {
         const { currentPage, totalPages } = state.value
         const nextPage = currentPage + 1

         if (nextPage <= totalPages) {
            return {
               value: {
                  ...state.value,
                  currentPage: nextPage,
               }
            }
         }
      },
      goToPrevPage: (state) => {
         const { currentPage } = state.value

         if (currentPage > 1) {
            return {
               value: {
                  ...state.value,
                  currentPage: currentPage - 1,
               }
            }
         }
      },
      goToPage: (state, action: PayloadAction<number>) => {
         const page = action.payload;

         if (page > 0 && page <= state.value.totalPages) {
            return {
               value: {
                  ...state.value,
                  currentPage: page,
               }
            }
         }
      }
   }
})

export const { setTotalPages, goToNextPage, goToPrevPage, goToPage } = pagination.actions
export default pagination.reducer
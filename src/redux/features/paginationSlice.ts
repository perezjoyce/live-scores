import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
   value: PaginationState
}

type PaginationState = {
   currentPage: number,
   totalPages: number,
}

const initialState = {
   value: {
      currentPage: 1,
      totalPages: 1,
   } as PaginationState
} as InitialState

export const pagination = createSlice({
   name: "pagination",
   initialState,
   reducers: {
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


export const { goToNextPage, goToPrevPage, goToPage } = pagination.actions
export default pagination.reducer
import React from 'react'
import { render, screen, fireEvent } from '../!customRender'
import Filters from "@/app/components/filters"

const ALL_FILTER_TEXT = "All"
const RESULT_FILTER_TEXT = "Result"
const LIVE_FILTER_TEXT = "Live"
const UPCOMING_FILTER_TEXT = "Upcoming"
const ALL_COUNTER = "(179)"
const RESULT_COUNTER = "(93)"
const LIVE_COUNTER = "(18)"
const UPCOMING_COUNTER = "(65)"
const ACTIVE_FILTER_CLASS = "text-indigo-600"
const INACTIVE_FILTER_CLASS = "text-gray-700"

describe('Filters Component', () => {
   test('should have four buttons', () => {
      render(<Filters />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(4)
   })

   test('should display filter labels', () => {
      render(<Filters />)
      const all = screen.getByText(ALL_FILTER_TEXT)
      const result = screen.getByText(RESULT_FILTER_TEXT)
      const live = screen.getByText(LIVE_FILTER_TEXT)
      const upcoming = screen.getByText(UPCOMING_FILTER_TEXT)

      expect(all).toBeInTheDocument()
      expect(result).toBeInTheDocument()
      expect(live).toBeInTheDocument()
      expect(upcoming).toBeInTheDocument()
   })

   test('should display filter counters', () => {
      render(<Filters />)
      const all = screen.getByText(ALL_COUNTER)
      const result = screen.getByText(RESULT_COUNTER)
      const live = screen.getByText(LIVE_COUNTER)
      const upcoming = screen.getByText(UPCOMING_COUNTER)

      expect(all).toBeInTheDocument()
      expect(result).toBeInTheDocument()
      expect(live).toBeInTheDocument()
      expect(upcoming).toBeInTheDocument()
   })

   test('should add an ACTIVE_FILTER_CLASS to the clicked filter', () => {
      render(<Filters />)

      const buttons = screen.getAllByRole('button')
      const [allButton, resultButton, liveButton, upcomingButton] = buttons

      fireEvent.click(resultButton)
      expect(resultButton).toHaveClass(ACTIVE_FILTER_CLASS)

      expect(allButton).not.toHaveClass(ACTIVE_FILTER_CLASS)
      expect(liveButton).not.toHaveClass(ACTIVE_FILTER_CLASS)
      expect(upcomingButton).not.toHaveClass(ACTIVE_FILTER_CLASS)

      expect(allButton).toHaveClass(INACTIVE_FILTER_CLASS)
      expect(liveButton).toHaveClass(INACTIVE_FILTER_CLASS)
      expect(upcomingButton).toHaveClass(INACTIVE_FILTER_CLASS)
   })
})
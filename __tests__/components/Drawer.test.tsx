import React from 'react'
import { render, screen, fireEvent } from '../!customRender'
import Drawer from "@/app/components/drawer"

const ALL_FILTER_TEXT = "All"
const RESULT_FILTER_TEXT = "Result"
const LIVE_FILTER_TEXT = "Live"
const UPCOMING_FILTER_TEXT = "Upcoming"
const ACTIVE_FILTER_CLASS = "text-indigo-600"
const INACTIVE_FILTER_CLASS = "text-gray-700"
const HIDDEN_CLASS = "hidden"

describe('Drawer Component', () => {
   test('should have five buttons', () => {
      render(<Drawer />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(5)
   })

   test('should display filter labels', () => {
      render(<Drawer />)

      const allButton = screen.getByText(ALL_FILTER_TEXT)
      const resultButton = screen.getByText(RESULT_FILTER_TEXT)
      const liveButton = screen.getByText(LIVE_FILTER_TEXT)
      const upcomingButton = screen.getByText(UPCOMING_FILTER_TEXT)

      expect(allButton).toBeInTheDocument()
      expect(resultButton).toBeInTheDocument()
      expect(liveButton).toBeInTheDocument()
      expect(upcomingButton).toBeInTheDocument()
   })

   test('should add an ACTIVE_FILTER_CLASS to the clicked filter', () => {
      render(<Drawer />)

      const buttons = screen.getAllByRole('button')
      const [_, allButton, resultButton, liveButton, upcomingButton] = buttons

      fireEvent.click(resultButton)

      expect(resultButton).toHaveClass(ACTIVE_FILTER_CLASS)

      expect(allButton).not.toHaveClass(ACTIVE_FILTER_CLASS)
      expect(liveButton).not.toHaveClass(ACTIVE_FILTER_CLASS)
      expect(upcomingButton).not.toHaveClass(ACTIVE_FILTER_CLASS)

      expect(allButton).toHaveClass(INACTIVE_FILTER_CLASS)
      expect(liveButton).toHaveClass(INACTIVE_FILTER_CLASS)
      expect(upcomingButton).toHaveClass(INACTIVE_FILTER_CLASS)
   })

   test('should add a HIDDEN_CLASS when the X button is clicked', () => {
      render(<Drawer />)

      const drawer = screen.getByTestId('offcanvasBottom')
      expect(drawer).toBeInTheDocument()

      const closeBtn = screen.getByTestId('closeOffCanvasBottom')
      fireEvent.click(closeBtn)

      expect(drawer).toHaveProperty(HIDDEN_CLASS)
   })
})
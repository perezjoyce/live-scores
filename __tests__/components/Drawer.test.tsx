import React from 'react';
import { render, screen, fireEvent } from '../!customRender';
import Drawer from "@/app/components/drawer"

describe('Drawer', () => {
   test('should have five buttons', () => {
      render(<Drawer />);

      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(5);
   });

   test('should render filter labels', () => {
      render(<Drawer />);

      const all = screen.getByText('All');
      const result = screen.getByText('Result');
      const live = screen.getByText('Live')
      const upcoming = screen.getByText('Upcoming');;

      expect(all).toBeInTheDocument();
      expect(result).toBeInTheDocument();
      expect(live).toBeInTheDocument();
      expect(upcoming).toBeInTheDocument();
   });

   test('should be highlighted when clicked', () => {
      render(<Drawer />);

      const buttons = screen.getAllByRole('button')
      const [_, allButton, resultButton, liveButton, upcomingButton] = buttons

      fireEvent.click(resultButton);
      expect(resultButton).toHaveClass('text-indigo-600');

      expect(allButton).not.toHaveClass('text-indigo-600');
      expect(liveButton).not.toHaveClass('text-indigo-600');
      expect(upcomingButton).not.toHaveClass('text-indigo-600');

      expect(allButton).toHaveClass('text-gray-700');
      expect(liveButton).toHaveClass('text-gray-700');
      expect(upcomingButton).toHaveClass('text-gray-700');
   });

   test('should be hidden when close button is clicked', () => {
      render(<Drawer />);

      const drawer = screen.getByTestId('offcanvasBottom');
      expect(drawer).toBeInTheDocument();

      const closeBtn = screen.getByTestId('closeOffCanvasBottom');
      fireEvent.click(closeBtn);

      expect(drawer).toHaveProperty("hidden")
   });
});
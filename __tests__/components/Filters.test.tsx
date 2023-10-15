import React from 'react';
import { render, screen, fireEvent } from '../!customRender';
import Filters from "@/app/components/filters"

describe('Filters Pages', () => {
   test('should have four buttons', () => {
      render(<Filters />);
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(4);
   });

   test('should render filter labels', () => {
      render(<Filters />);
      const all = screen.getByText('All');
      const result = screen.getByText('Result');
      const live = screen.getByText('Live')
      const upcoming = screen.getByText('Upcoming');;

      expect(all).toBeInTheDocument();
      expect(result).toBeInTheDocument();
      expect(live).toBeInTheDocument();
      expect(upcoming).toBeInTheDocument();
   });

   test('should render filter counters', () => {
      render(<Filters />);
      const all = screen.getByText('(179)');
      const result = screen.getByText('(93)');
      const live = screen.getByText('(18)')
      const upcoming = screen.getByText('(65)');;

      expect(all).toBeInTheDocument();
      expect(result).toBeInTheDocument();
      expect(live).toBeInTheDocument();
      expect(upcoming).toBeInTheDocument();
   });

   test('should be highlighted when clicked', () => {
      render(<Filters />);

      const buttons = screen.getAllByRole('button')
      const [allButton, resultButton, liveButton, upcomingButton] = buttons

      fireEvent.click(resultButton);
      expect(resultButton).toHaveClass('text-indigo-600');

      expect(allButton).not.toHaveClass('text-indigo-600');
      expect(liveButton).not.toHaveClass('text-indigo-600');
      expect(upcomingButton).not.toHaveClass('text-indigo-600');

      expect(allButton).toHaveClass('text-gray-700');
      expect(liveButton).toHaveClass('text-gray-700');
      expect(upcomingButton).toHaveClass('text-gray-700');
   });
});
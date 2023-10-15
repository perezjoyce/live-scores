import React from 'react'
import { render } from '@testing-library/react'
import Card from '@/app/components/card'
import { Game } from '@/data/types'

const MOCK_GAME = {
   id: '1',
   competition: 'Sample Competition',
   country: 'USA',
   timestamp: 1634887200,
   status: { type: 'inprogress' },
   homeTeam: { name: 'Home Team', score: 2 },
   awayTeam: { name: 'Away Team', score: 1 },
   liveStatus: 'HT',
} as Game

describe("Card Component ", () => {
   test('should display the competition name', () => {
      const { getByText } = render(<Card game={MOCK_GAME} />)
      const competitionElement = getByText('Sample Competition')
      expect(competitionElement).toBeInTheDocument()
   })

   test("should display the country/host of competition", () => {
      const { getByText } = render(<Card game={MOCK_GAME} />)
      const countryElement = getByText('USA')
      expect(countryElement).toBeInTheDocument()
   })

   test("should contain the game status element", () => {
      const { getByTestId } = render(<Card game={MOCK_GAME} />)
      const gameStatusElement = getByTestId('status-1')
      expect(gameStatusElement).toBeInTheDocument()
   })

   test("should display the score of both teams", () => {
      const { getByText } = render(<Card game={MOCK_GAME} />)
      const scoreElement = getByText('2 - 1')
      expect(scoreElement).toBeInTheDocument()
   })

   test("should display the home team", () => {
      const { getByText } = render(<Card game={MOCK_GAME} />)
      const homeTeamElement = getByText('Home Team')
      expect(homeTeamElement).toBeInTheDocument()
   })

   test("should display the away team", () => {
      const { getByText } = render(<Card game={MOCK_GAME} />)
      const awayTeamElement = getByText('Away Team')
      expect(awayTeamElement).toBeInTheDocument()
   })

   test("should display a progres indicator", () => {
      const { getByTestId } = render(<Card game={MOCK_GAME} />)
      const progressElement = getByTestId('progressIndicator')
      expect(progressElement).toBeInTheDocument()
   })

   test("should display the live status", () => {
      const { getByText } = render(<Card game={MOCK_GAME} />)
      const liveStatus = getByText('HT')
      expect(liveStatus).toBeInTheDocument()
   })
})

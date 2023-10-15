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

test('Card Component correctly displayS sample game data', () => {
   const { getByText, getByTestId } = render(<Card game={MOCK_GAME} />)

   const competitionElement = getByText('Sample Competition')
   expect(competitionElement).toBeInTheDocument()

   const countryElement = getByText('USA')
   expect(countryElement).toBeInTheDocument()

   const gameStatusElement = getByTestId('status-1')
   expect(gameStatusElement).toBeInTheDocument()

   const scoreElement = getByText('2 - 1')
   expect(scoreElement).toBeInTheDocument()

   const homeTeamElement = getByText('Home Team')
   expect(homeTeamElement).toBeInTheDocument()

   const awayTeamElement = getByText('Away Team')
   expect(awayTeamElement).toBeInTheDocument()

   const progressElement = getByTestId('progressIndicator')
   expect(progressElement).toBeInTheDocument()

   const liveStatus = getByText('HT')
   expect(liveStatus).toBeInTheDocument()
});

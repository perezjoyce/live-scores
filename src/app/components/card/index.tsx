import { memo } from 'react'
import { Game } from '@/data/types.js'
import Progress from '@/card/progress'
import { STATUS_COLOR, getStatusLabel } from '@/card/utils'

function Card({ game }: { game: Game }) {
   const { id, competition, country, timestamp, status, homeTeam, awayTeam, liveStatus } = game;

   return (
      <div
         key={id}
         className="bg-gray-900 flex-auto max-w-none md:max-w-50% rounded lg:max-w-33% overflow-hidden shadow-lg p-6 text-center"
      >
         <small className="text-gray-300 text-sm">{country.toUpperCase()}</small>
         <h3 className="font-bold text-xl">{competition}</h3>
         <small className={`${STATUS_COLOR.get(status.type)} text-sm`}>{getStatusLabel(status, timestamp)}</small>
         <p className="text-4xl my-4">{homeTeam.score} - {awayTeam.score}</p>
         <div className="grid grid-cols-3 justify-items-center items-center">
            <span className="font-semibold">{homeTeam.name}</span>
            <Progress liveStatus={liveStatus} />
            <span className="font-semibold">{awayTeam.name}</span>
         </div>
      </div>
   )
}

const MemoizedCard = memo(Card)
export default MemoizedCard

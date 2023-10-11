import Progress from './progress'

export default function Card() {
   return (
      <div className="bg-gray-900 flex-auto max-w-none md:max-w-50% rounded lg:max-w-33% overflow-hidden shadow-lg p-6 text-center">
         <small className="text-gray-300 text-sm">RUSSIA</small>
         <h3 className="font-bold text-xl">Football National League</h3>
         <small className="text-green-500 text-sm">ENDED</small>
         <p className="text-4xl my-4">2 - 0</p>
         <div className="grid grid-cols-3 justify-items-center items-center">
            <span className="font-semibold">FK Tyumen</span>
            <Progress />
            <span className="font-semibold">Lunch-Energiya</span>
         </div>
      </div>
   )
}

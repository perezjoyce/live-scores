export default function Progress() {
   return (
      <div className="w-20 h-20 relative">
         <p className="text-green-500 absolute top-7 left-8">FT</p>

         <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
               className="text-gray-200 stroke-current"
               stroke-width="4"
               cx="50"
               cy="50"
               r="40"
               fill="transparent"
            ></circle>

            <circle
               className="text-green-500  progress-ring__circle stroke-current"
               stroke-width="4"
               stroke-linecap="round"
               cx="50"
               cy="50"
               r="40"
               fill="transparent"
               stroke-dashoffset="calc(400 - (400 * 45) / 100)"
            ></circle>
         </svg>
      </div>
   )
}
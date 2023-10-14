import { memo } from 'react'
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter"
import { FilterType } from "@/redux/features/filterSlice"

function FilterItem(
   { currentFilter,
      filterType,
      count,
      onClick,
      customStyles,
   }: {
      currentFilter: FilterType,
      filterType: FilterType,
      count: number,
      onClick: (filter: string) => void,
      customStyles: string,
   }
) {
   const isSelected = currentFilter === filterType
   const stateBasedStyle = isSelected ? 'text-indigo-600 bg-gray-100 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]' : 'text-gray-700 hover:border-gray-100 hover:bg-gray-100'

   return (
      <button
         className={`
            flex items-center rounded hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
           ${customStyles}
            ${stateBasedStyle}
         `}
         onClick={() => onClick(filterType)}
      >
         <span className="font-medium">{capitalizeFirstLetter(filterType)}</span>&nbsp;
         <span className="text-xs">({count})</span>
      </button>
   )
}

const MemoizedFilterItem = memo(FilterItem)
export default MemoizedFilterItem
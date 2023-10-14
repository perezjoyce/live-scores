"use client"

export default function PaginationNavButton(
   {
      onClick,
      icon,
      screenReaderLabel,
      customStyles = "",
   }: {
      onClick: () => void,
      icon: React.ReactNode,
      screenReaderLabel: string,
      customStyles: string,
   }
) {
   return (
      <button
         onClick={onClick}
         className={
            `relative inline-flex items-center px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0
            ${customStyles}`
         }
      >
         <span className="sr-only">{screenReaderLabel}</span>
         {icon}
      </button >
   )
}
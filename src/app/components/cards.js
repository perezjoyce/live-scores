import Card from './card'

export default function Cards() {
   return (
      <section className="bg-gray-200 grow overflow-y-scroll">
         <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="flex flex-wrap gap-1">
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
            </div>
         </div>
      </section>
   )
}
export default function Navbar() {
   return (
      <nav className="bg-white px-4 py-6" aria-label="Global">
         <div className="mx-auto max-w-7xl flex items-center md:justify-start justify-center">
            <img className="h-8 w-auto mr-3 lg:ml-3" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" />
            <h1 className="hidden md:block self-center text-2xl font-bold whitespace-nowrap text-indigo-600">Live Score</h1>
         </div>
      </nav>
   )
}

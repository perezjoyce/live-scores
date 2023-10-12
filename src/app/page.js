import Cards from "./components/cards";
import Filters from "./components/filters";

import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col h-88vh">
        <Filters />
        <Cards />
      </main>
      <footer className="flex justify-center items-center bg-gray-900 grow">
        <small>Spinbet Coding Exam by Joyce P.</small>
      </footer>
    </div >
  )
}

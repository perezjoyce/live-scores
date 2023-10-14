import Cards from "./components/cards";
import Logo from "./components/logo";
import Header from "./components/header";
import Pagination from "./components/pagination";
import Filters from "./components/filters";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-white px-4 py-4" aria-label="Global">
        <div className="flex flex-row justify-between content-center items-center mx-auto max-w-7xl">
          <Logo />
          <Filters />
        </div>
      </section>

      <main className="flex flex-col h-88vh">
        <section className="bg-gray-200 px-4 py-2">
          <div className="flex flex-row justify-between content-center items-center mx-auto max-w-7xl">
            <Header />
            <Pagination />
          </div>
        </section>
        <Cards />
      </main>

      <footer className="flex justify-center items-center bg-gray-900 grow">
        <small>Spinbet Coding Exam by Joyce P.</small>
      </footer>
    </div >
  )
}

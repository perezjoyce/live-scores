"use client"
import { useAppSelector } from '@/redux/store'
import Cards from "@/components/cards"
import Filters from "@/components/filters"
import Header from "@/components/header"
import Logo from "@/components/logo"
import Pagination from "@/components/pagination"

import dynamic from 'next/dynamic'
const Drawer = dynamic(() => import('@/components/drawer'))

export default function Home() {
  const isDrawerOpen: boolean = useAppSelector((state) => state.drawerReducer.value.isDrawerOpen)

  return (
    <>
      <div className={`min-h-screen flex flex-col ${isDrawerOpen && 'opacity-25'}`}>
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

      {isDrawerOpen && <Drawer />}
    </>
  )
}
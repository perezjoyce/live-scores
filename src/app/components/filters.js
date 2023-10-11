"use client";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon, FunnelIcon } from '@heroicons/react/24/outline'
import Pagination from './pagination';

export default function Filters() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

   return (
      <>
         <section className="bg-white px-4 pb-4">
            <div className="flex flex-row justify-between content-center mx-auto max-w-7xl">
               <div className='flex flex-row content-center items-center'>
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900 lg:ml-3 mr-3">All Events</h2>
                  <Pagination />
               </div>


               <ul className="hidden lg:flex">
                  <li className="mr-3">
                     <span className="inline-block rounded text-indigo-600 font-semibold border-gray-100 bg-gray-100 py-1 px-3">
                        All <small>(10)</small>
                     </span>
                  </li>
                  <li className="mr-3">
                     <span className="inline-block rounded text-gray-700 font-semibold hover:border-gray-100 hover:bg-gray-100 py-1 px-3">
                        Result <small>(10)</small>
                     </span>
                  </li>
                  <li className="mr-3">
                     <span className="inline-block rounded text-gray-700 font-semibold hover:border-gray-100 hover:bg-gray-100 py-1 px-3">
                        Live <small>(10)</small>
                     </span>
                  </li>
                  <li>
                     <span className="inline-block rounded text-gray-700 font-semibold hover:border-gray-100 hover:bg-gray-100 py-1 px-3">
                        Upcoming <small>(10)</small>
                     </span>
                  </li>
               </ul>

               <div className="flex lg:hidden">
                  <button
                     type="button"
                     className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                     onClick={() => setMobileMenuOpen(true)}
                  >
                     <span className="sr-only">Open main menu</span>
                     <FunnelIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
               </div>
            </div>
         </section>

         <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-80 overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
               <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                     <span className="sr-only">Live Score</span>
                     <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                     />
                  </a>
                  <button
                     type="button"
                     className="-m-2.5 rounded-md p-2.5 text-gray-700"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     <span className="sr-only">Close menu</span>
                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
               </div>
               <div className="mt-6 flow-root">
                  <div className="space-y-2 py-6">
                     <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                     >
                        All
                     </a>
                     <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                     >
                        Results
                     </a>
                     <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                     >
                        Live
                     </a>
                     <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                     >
                        Upcoming
                     </a>
                  </div>
               </div>
            </Dialog.Panel>
         </Dialog>
      </>
   )
}
"use client"
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext'

const Navbar = () => {
const {searchterm,setsearchterm}=GlobalContext();
const [data, setdata] = useState();
function set()
{
  setsearchterm(data)
}
  return (
    <>
    
<nav className=" bg-white border-gray-200 dark:bg-gray-900 fixed top-0 right-0 w-full   z-30">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center justify-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div className="relative flex w-auto">
    <div className="flex md:w-[40vw]">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input onChange={(e)=>setdata(e.target.value)} value={data} type="text" id="search-navbar" className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search..."/>
    </div>
    <button onClick={set} className='mx-4 bg-cyan-600 text-white rounded font-bold px-3 py-1'>Search</button>
  </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
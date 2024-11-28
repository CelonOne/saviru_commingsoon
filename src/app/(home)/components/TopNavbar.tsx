'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/images/logo.png'

const TopNavbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <div className="flex flex-col">
      <nav id="nav" className="border-b py-8 md:border-b-0" role="navigation">
        <div className="md:flex-no-wrap container flex flex-wrap items-center">
          <a href="#" className="flex items-center">
            <Image
              src={logo}
              width={24}
              height={24}
              alt="logo"
              className="h-6"
            />
            <div className="ms-2 text-xl uppercase">Techsoon</div>
          </a>
          <div className="ml-auto md:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center rounded"
              type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={`h-0 w-full opacity-0 transition-all duration-300 ease-out md:flex md:w-auto md:flex-grow md:items-center md:opacity-100 md:transition-none ${open && 'navbar-show'}`}>
            <ul
              id="ulMenu"
              className="ml-auto mt-5 flex flex-col duration-300 ease-out sm:transition-none md:mt-0 md:flex-row">
              <li>
                <a
                  className="font-secondary block p-3 text-sm font-medium uppercase text-blue-500 lg:px-6"
                  href="#"
                  title="Home">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="font-secondary block p-3 text-sm font-medium uppercase text-black/70 hover:text-blue-500 lg:px-6"
                  href="#demos"
                  title="About">
                  Demos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbar

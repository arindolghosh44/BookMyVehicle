import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menuLinks } from '../assets/assets'

const Navbar = () => {

  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-white
    ${location.pathname === "/" 
      ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 shadow-md" 
      : "bg-emerald-700 shadow-sm"}`}>

      {/* Logo + Car */}
      <Link to='/' className="flex items-center gap-2 text-2xl font-semibold tracking-wide group">
        
        <span className="text-3xl transition-transform duration-300 group-hover:translate-x-1">
          🚗
        </span>

        <span className="group-hover:text-yellow-200 transition">
          BookMyRide
        </span>

      </Link>

      {/* Menu */}
      <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 
        max-sm:fixed max-sm:top-16 max-sm:right-0 max-sm:w-full max-sm:h-screen max-sm:p-6
        transition-all duration-300 z-50
        ${location.pathname === "/" 
          ? "bg-gradient-to-b from-emerald-600 to-green-600" 
          : "bg-emerald-700"}
        ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>

       {menuLinks.map((link, index) => (
  <Link
    key={index}
    to={link.path}
    className={`relative text-xl sm:text-2xl font-semibold tracking-wide transition duration-300
      ${location.pathname === link.path 
        ? "text-yellow-200" 
        : "text-white hover:text-yellow-200"}
    `}
  >
    {link.name}

    {/* Underline animation */}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
  </Link>
))}

      </div>

      {/* Mobile Toggle */}
      <button
        className="sm:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

    </div>
  )
}

export default Navbar
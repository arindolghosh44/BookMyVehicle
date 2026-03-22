import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets, menuLinks } from '../assets/assets'

const Navbar = ({ setShowLogin }) => {

  const location = useLocation()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-white
    ${location.pathname === "/" 
      ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 shadow-md" 
      : "bg-emerald-700 shadow-sm"}`}>

      {/* Logo */}
      <Link to='/' className="flex items-center gap-2 text-2xl font-semibold tracking-wide">
        🚗 <span>BookMyRide</span>
      </Link>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex items-center gap-6">

        {/* Menu Links */}
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
          </Link>
        ))}

        {/* Search Bar */}
        <div className='hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md 
          border border-white/20 px-5 py-2.5 rounded-full w-80'>

          <input 
            type='text' 
            className='bg-transparent outline-none text-white w-full text-lg'
            placeholder='Search rides...'
          />

          <img src={assets.search_icon} className='w-5 h-5' />
        </div>

        {/* Buttons */}
        <button 
          onClick={() => navigate('/owner')}
          className="px-6 py-2.5 rounded-full text-xl font-semibold 
          bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Dashboard
        </button>

        <button 
          onClick={() => setShowLogin(true)}
          className="px-6 py-2.5 rounded-full text-xl font-semibold 
          bg-yellow-300 text-green-900 hover:bg-yellow-400 transition">
          Login
        </button>

      </div>

      {/* Mobile Menu Button */}
      <button 
        className='sm:hidden text-3xl'
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 w-full h-screen bg-emerald-800 z-50 
        flex flex-col items-center justify-center gap-8
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}>

        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setOpen(false)}
        >
          ✖
        </button>

        {/* Menu Links */}
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => setOpen(false)}
            className="text-2xl font-semibold"
          >
            {link.name}
          </Link>
        ))}

        {/* Search */}
        <div className="flex items-center gap-3 bg-white/10 border border-white/20 
          px-5 py-2.5 rounded-full w-72">

          <input 
            type="text"
            placeholder="Search rides..."
            className="bg-transparent outline-none text-white w-full text-lg"
          />

          <img src={assets.search_icon} className="w-5 h-5" />
        </div>

        {/* Buttons */}
        <button 
          onClick={() => navigate('/owner')}
          className="px-6 py-2.5 rounded-full text-xl font-semibold 
          bg-white/10 border border-white/20">
          Dashboard
        </button>

        <button 
          onClick={() => setShowLogin(true)}
          className="px-6 py-2.5 rounded-full text-xl font-semibold 
          bg-yellow-300 text-green-900">
          Login
        </button>

      </div>

    </div>
  )
}

export default Navbar
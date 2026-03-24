import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets, menuLinks } from '../assets/assets'

const Navbar = ({ setShowLogin }) => {

  // 🔹 useLocation()
  // This hook gives access to the current URL object
  // location.pathname → returns current path (e.g. "/", "/cars")
  // Used for:
  // 1. Highlighting active menu
  // 2. Changing navbar style dynamically
  const location = useLocation()

  // 🔹 useState() for mobile drawer
  // open = controls visibility of mobile sidebar
  // false → hidden (translate-x-full)
  // true → visible (translate-x-0)
  const [open, setOpen] = useState(false)

  // 🔹 useNavigate()
  // Used to navigate programmatically (without Link)
  // Useful for buttons instead of anchor links
  const navigate = useNavigate()

  // 🔹 useEffect() → side-effect handling
  // Runs whenever "open" state changes
  // Purpose:
  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      // Disable scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Enable scroll back
      document.body.style.overflow = 'auto'
    }

    // 🔹 Cleanup (important for memory + safety)
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  // 🔹 Navigation helper function
  // Why needed?
  // 1. Navigate to page
  // 2. Close mobile drawer at same time
  const handleNavigate = (path) => {
    navigate(path)     // redirect user
    setOpen(false)     // close drawer (UX improvement)
  }

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-white

      /* 🔹 Conditional Styling */
      /* If user is on Home page → show gradient */
      /* Else → solid background */
      ${location.pathname === "/"
        ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 shadow-md"
        : "bg-emerald-700 shadow-sm"}`
      }
    >

      {/* 🔹 Logo Section */}
      {/* Link component avoids full page reload (SPA behavior) */}
      <Link to='/' className="flex items-center gap-2 text-2xl font-semibold tracking-wide">
        🚗 <span>BookMyRide</span>
      </Link>

      {/* 🔹 Desktop Navbar */}
      {/* hidden sm:flex → hidden on mobile, visible on ≥640px */}
      <div className="hidden sm:flex items-center gap-6">

        {/* 🔹 Dynamic Menu Rendering */}
        {/* menuLinks = array [{name, path}] */}
        {/* map() used to render multiple links dynamically */}
        {menuLinks.map((link, index) => (

          <Link
            key={index} // React requires unique key for list rendering
            to={link.path}

            /* 🔹 Active Link Logic */
            /* If current path === link.path → highlight */
            className={`text-xl sm:text-2xl font-semibold transition

              ${location.pathname === link.path
                ? "text-yellow-200"          // active state
                : "text-white hover:text-yellow-200"} // default + hover
            `}
          >
            {link.name}
          </Link>
        ))}

        {/* 🔹 Search Bar */}
        {/* hidden lg:flex → only visible on large screens */}
        <div className='hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md 
          border border-white/20 px-5 py-2.5 rounded-full w-80'>

          {/* Controlled input can be added later */}
          <input
            type='text'
            className='bg-transparent outline-none text-white w-full text-lg'
            placeholder='Search rides...'
          />

          {/* Icon */}
          <img src={assets.search_icon} alt="search" className='w-5 h-5' />
        </div>

        {/* 🔹 Dashboard Button */}
        {/* Using navigate instead of Link because it's a button */}
        <button
          onClick={() => navigate('/owner')}
          className="px-6 py-2.5 rounded-full text-xl font-semibold 
          bg-white/10 border border-white/20 hover:bg-white/20">
          Dashboard
        </button>

        {/* 🔹 Login Button */}
        {/* setShowLogin is received from parent (App.jsx) */}
        {/* This triggers login modal */}
        <button
          onClick={() => setShowLogin(true)}
          className="px-6 py-2.5 rounded-full text-xl font-semibold 
          bg-yellow-300 text-green-900 hover:bg-yellow-400">
          Login
        </button>

      </div>

      {/* 🔹 Mobile Menu Toggle Button */}
      {/* Visible only on small screens */}
      <button
        className='sm:hidden text-3xl'
        onClick={() => setOpen(true)} // open drawer
      >
        ☰
      </button>

      {/* 🔹 Overlay */}
      {/* Purpose:
          1. Dark background
          2. Click outside to close drawer
      */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔹 Mobile Drawer */}
      {/* Fixed position → stays on screen */}
      {/* transform → used for slide animation */}
      <div
        className={`fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-emerald-800 z-50 
        flex flex-col items-center justify-center gap-8

        /* Animation */
        transform transition-transform duration-300

        /* State-based movement */
        ${open ? "translate-x-0" : "translate-x-full"}`
        }
      >

        {/* 🔹 Close Button */}
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setOpen(false)}
        >
          ✖
        </button>

        {/* 🔹 Mobile Links */}
        {/* Using button instead of Link to control navigation manually */}
        {menuLinks.map((link, index) => (
          <button
            key={index}
            onClick={() => handleNavigate(link.path)}
            className="text-2xl font-semibold"
          >
            {link.name}
          </button>
        ))}

        {/* 🔹 Mobile Search */}
        <div className="flex items-center gap-3 bg-white/10 border border-white/20 
          px-5 py-2.5 rounded-full w-72">

          <input
            type="text"
            placeholder="Search rides..."
            className="bg-transparent outline-none text-white w-full text-lg"
          />

          <img src={assets.search_icon} alt="search" className="w-5 h-5" />
        </div>

        {/* 🔹 Mobile Dashboard */}
        <button
          onClick={() => handleNavigate('/owner')}
          className="px-6 py-2.5 rounded-full text-xl font-semibold 
          bg-white/10 border border-white/20">
          Dashboard
        </button>

        {/* 🔹 Mobile Login */}
        <button
          onClick={() => {
            setShowLogin(true) // open login modal
            setOpen(false)     // close drawer
          }}
          className="px-6 py-2.5 rounded-full text-xl font-semibold 
          bg-yellow-300 text-green-900">
          Login
        </button>

      </div>

    </div>
  )
}

export default Navbar
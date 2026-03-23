import React from 'react'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full 
    bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-20 pb-10">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r 
        from-green-200/20 via-emerald-200/20 to-transparent blur-3xl opacity-60">
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

        {/* Logo + About */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900">
            BookMyRides
          </h1>

          <p className="text-lg md:text-xl mt-6 leading-relaxed text-green-800/80">
            BookMyRides is a premium car rental platform offering seamless booking, 
            affordable pricing, and luxury rides for every journey.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold text-2xl text-green-900 mb-2">
              Company
            </h2>

            <a className="text-lg md:text-xl text-green-700 hover:text-green-900 transition" href="#">
              Main Page
            </a>
            <a className="text-lg md:text-xl text-green-700 hover:text-green-900 transition" href="#">
              Browse Rides
            </a>
            <a className="text-lg md:text-xl text-green-700 hover:text-green-900 transition" href="#">
             List Your Rides
            </a>
            <a className="text-lg md:text-xl text-green-700 hover:text-green-900 transition" href="#">
             About us
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-2xl text-green-900 mb-4">
            Subscribe to our newsletter
          </h2>

          <div className="space-y-6 max-w-md">
            <p className="text-lg md:text-xl text-green-800/80">
              Get latest offers, updates, and exclusive deals directly in your inbox.
            </p>

            <div className="flex items-center h-14 md:h-16">
<form className="flex items-center w-full max-w-3xl h-14 md:h-16 mt-4">

            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 h-full px-6 text-lg 
              rounded-l-full 
              border border-green-200 
              outline-none text-gray-700
              focus:ring-2 focus:ring-green-400 transition"
            />

            <button
              type="submit"
              className="h-full px-8 md:px-14 text-lg font-semibold
              bg-gradient-to-r from-green-500 to-emerald-500 
              text-white 
              rounded-r-full 
              hover:from-green-600 hover:to-emerald-600 
              transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Subscribe
            </button>

          </form>

            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 
      py-8 border-t mt-14 border-green-200">

        <p className="text-base md:text-lg text-green-800/70 text-center">
         Help Center
        </p>

        <div className="flex items-center gap-6 text-base md:text-lg">
          <a href="#" className="text-green-700 hover:text-green-900 transition">
            Privacy Policy
          </a>
          <a href="#" className="text-green-700 hover:text-green-900 transition">
            Terms of Service
          </a>
          <a href="#" className="text-green-700 hover:text-green-900 transition">
            Insurance
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer
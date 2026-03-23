import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w-full py-28 px-6 flex justify-center">

      <div className="w-full max-w-6xl text-center 
        bg-white/70 backdrop-blur-2xl 
        border border-green-100 
        rounded-[2.5rem] p-12 md:p-16 
        shadow-[0_20px_80px_rgba(0,0,0,0.1)]
        relative overflow-hidden">

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br 
          from-green-200/40 via-emerald-200/30 to-transparent 
          opacity-70 blur-3xl">
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center space-y-6">

          {/* Heading (BIG) */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-900">
            Never Miss a Deal!
          </h1>

          {/* Subtitle (BIGGER) */}
          <p className="text-base md:text-xl text-green-700/80 
            max-w-2xl leading-relaxed">
            Subscribe to get the latest offers, new arrivals, and exclusive discounts
          </p>

          {/* Form (BIG INPUT + BUTTON) */}
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
  )
}

export default NewsLetter
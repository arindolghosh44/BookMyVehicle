import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

  // 🔹 State Management (Controlled Form Inputs)

  // Stores selected pickup city
  const [pickupLocation, setPickupLocation] = useState('')

  // Stores pickup date
  const [pickupDate, setPickupDate] = useState('')

  // Stores return date
  const [returnDate, setReturnDate] = useState('')

  // 🔹 Get today's date in YYYY-MM-DD format
  // Used to prevent selecting past dates
  const today = new Date().toISOString().split("T")[0]

  // 🔹 Form Submission Handler
  const handleSubmit = (e) => {

    // Prevent default form reload behavior
    e.preventDefault()

    // 🔹 Validation Logic
    // Ensure return date is not before pickup date
    if (new Date(returnDate) < new Date(pickupDate)) {
      alert("Return date cannot be before pickup date")
      return
    }

    // 🔹 Business Logic (currently dummy)
    // In real app → send data to backend / filter cars
    console.log({ pickupLocation, pickupDate, returnDate })
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-12 px-6 text-center text-white
      bg-gradient-to-br from-emerald-900 via-emerald-700 to-green-600'>

      {/* 🔹 MAIN HEADING */}
      <h1 className='text-4xl md:text-6xl font-bold leading-tight max-w-3xl'>

        {/* Static + highlighted text */}
        Book Your Ride with{" "}
        <span className='text-yellow-300'>Ease</span>
      </h1>

      {/* 🔹 SUBTEXT */}
      <p className='text-lg md:text-xl text-white/80 max-w-xl'>
        Choose your location and schedule your journey effortlessly.
      </p>

      {/* 🔹 SEARCH FORM */}
      <form 
        onSubmit={handleSubmit}

        // Glassmorphism UI design
        className='w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 
        rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6'
      >

        {/* 🔹 PICKUP LOCATION */}
        <div className='flex flex-col text-left w-full'>

          <label className='text-sm text-white/70 mb-1'>
            Pickup Location
          </label>

          {/* Dropdown Select */}
          <select
            required

            // Controlled input value
            value={pickupLocation}

            // Update state on change
            onChange={(e) => setPickupLocation(e.target.value)}

            className='px-4 py-3 rounded-xl bg-white/10 border border-white/20 
            text-white outline-none focus:ring-2 focus:ring-yellow-300'
          >

            {/* Default option */}
            <option value="" className='text-black'>Select City</option>

            {/* 🔹 Dynamic city list rendering */}
            {cityList.map((city) => (

              // key = city name (unique)
              <option key={city} value={city} className='text-black'>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* 🔹 PICKUP DATE */}
        <div className='flex flex-col text-left w-full'>

          <label className='text-sm text-white/70 mb-1'>
            Pickup Date
          </label>

          <input
            type='date'
            required

            // 🔹 Restrict past dates
            min={today}

            // Controlled value
            value={pickupDate}

            onChange={(e) => {

              // Update pickup date
              setPickupDate(e.target.value)

              // 🔹 Reset return date when pickup changes
              // Prevents invalid date combinations
              setReturnDate('')
            }}

            className='px-4 py-3 rounded-xl bg-white/10 border border-white/20 
            text-white outline-none focus:ring-2 focus:ring-yellow-300 
            [&::-webkit-calendar-picker-indicator]:invert'
          />
        </div>

        {/* 🔹 RETURN DATE */}
        <div className='flex flex-col text-left w-full'>

          <label className='text-sm text-white/70 mb-1'>
            Return Date
          </label>

          <input
            type='date'
            required

            // 🔹 Return date must be ≥ pickup date
            // If pickup not selected → fallback to today
            min={pickupDate || today}

            value={returnDate}

            // Update return date
            onChange={(e) => setReturnDate(e.target.value)}

            className='px-4 py-3 rounded-xl bg-white/10 border border-white/20 
            text-white outline-none focus:ring-2 focus:ring-yellow-300 
            [&::-webkit-calendar-picker-indicator]:invert'
          />
        </div>

        {/* 🔹 SUBMIT BUTTON */}
        <button 
          type='submit'

          className='flex items-center justify-center gap-2 w-full md:w-auto 
          px-8 py-3 rounded-xl bg-yellow-300 text-green-900 
          font-semibold text-lg hover:bg-yellow-400 hover:scale-105 active:scale-95 
          transition-all duration-300 shadow-lg'
        >

          {/* Icon */}
          <img src={assets.search_icon} alt='search' className='w-5 h-5'/>

          {/* Text */}
          Search
        </button>

      </form>

      {/* 🔹 HERO IMAGE */}
      <img 
        src={assets.main_car} 
        alt='car' 

        // Hover animation
        className='max-h-80 drop-shadow-2xl hover:scale-105 transition duration-500'
      />

    </div>
  )
}

export default Hero
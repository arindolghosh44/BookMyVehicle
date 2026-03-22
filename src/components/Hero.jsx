import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  // ✅ Define today's date (FIXED ERROR)
  const today = new Date().toISOString().split("T")[0]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (new Date(returnDate) < new Date(pickupDate)) {
      alert("Return date cannot be before pickup date")
      return
    }

    console.log({ pickupLocation, pickupDate, returnDate })
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-12 px-6 text-center text-white
      bg-gradient-to-br from-emerald-900 via-emerald-700 to-green-600'>

      {/* Heading */}
      <h1 className='text-4xl md:text-6xl font-bold leading-tight max-w-3xl'>
        Book Your Ride with{" "}
        <span className='text-yellow-300'>Ease</span>
      </h1>

      {/* Subtext */}
      <p className='text-lg md:text-xl text-white/80 max-w-xl'>
        Choose your location and schedule your journey effortlessly.
      </p>

      {/* FORM */}
      <form 
        onSubmit={handleSubmit}
        className='w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 
        rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6'>

        {/* Pickup Location */}
        <div className='flex flex-col text-left w-full'>
          <label className='text-sm text-white/70 mb-1'>Pickup Location</label>
          <select
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className='px-4 py-3 rounded-xl bg-white/10 border border-white/20 
            text-white outline-none focus:ring-2 focus:ring-yellow-300'
          >
            <option value="" className='text-black'>Select City</option>
            {cityList.map((city) => (
              <option key={city} value={city} className='text-black'>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Date */}
        <div className='flex flex-col text-left w-full'>
          <label className='text-sm text-white/70 mb-1'>Pickup Date</label>
          <input
            type='date'
            required
            min={today}
            value={pickupDate}
            onChange={(e) => {
              setPickupDate(e.target.value)
              setReturnDate('') // reset return date if pickup changes
            }}
            className='px-4 py-3 rounded-xl bg-white/10 border border-white/20 
            text-white outline-none focus:ring-2 focus:ring-yellow-300 
            [&::-webkit-calendar-picker-indicator]:invert'
          />
        </div>

        {/* Return Date */}
        <div className='flex flex-col text-left w-full'>
          <label className='text-sm text-white/70 mb-1'>Return Date</label>
          <input
            type='date'
            required
            min={pickupDate || today}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className='px-4 py-3 rounded-xl bg-white/10 border border-white/20 
            text-white outline-none focus:ring-2 focus:ring-yellow-300 
            [&::-webkit-calendar-picker-indicator]:invert'
          />
        </div>

        {/* Button */}
        <button 
          type='submit'
          className='flex items-center justify-center gap-2 w-full md:w-auto 
          px-8 py-3 rounded-xl bg-yellow-300 text-green-900 
          font-semibold text-lg hover:bg-yellow-400 hover:scale-105 active:scale-95 
          transition-all duration-300 shadow-lg'>

          <img src={assets.search_icon} alt='search' className='w-5 h-5'/>
          Search
        </button>

      </form>

      {/* Car Image */}
      <img 
        src={assets.main_car} 
        alt='car' 
        className='max-h-80 drop-shadow-2xl hover:scale-105 transition duration-500'
      />

    </div>
  )
}

export default Hero
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CarCards = ({ car }) => {

  // 🔹 Currency from environment variable
  // If not defined → fallback to ₹
  const currency = import.meta.env.VITE_CURRENCY || "₹"

  // 🔹 useNavigate() for programmatic routing
  const navigate = useNavigate()

  // 🔹 Handle "Book Now" button click
  const handleBookNow = (e) => {

    // 🔹 stopPropagation()
    // Prevents parent div click event from firing
    // Without this → clicking button would ALSO open car details page ❌
    e.stopPropagation()

    // 🔹 Navigate to bookings page
    // (Can be improved later to pass car data)
    navigate(`/my-bookings`)
  }

  return (
    <div 

      // 🔹 Card Click → Navigate to Car Details page
      onClick={() => {
        navigate(`/car-details/${car._id}`)

        // 🔹 Scroll to top after navigation
        // Improves UX (user starts from top of new page)
        window.scrollTo(0, 0)
      }}

      className='group rounded-2xl overflow-hidden shadow-xl 
      hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer 
      bg-white/10 backdrop-blur-md'
    >

      {/* 🔹 IMAGE SECTION */}
      <div className='relative aspect-[16/10] overflow-hidden bg-gray-900'>

        {/* 🔹 Car Image */}
        {/* object-contain → shows full image without cropping */}
        {/* group-hover → zoom effect on parent hover */}
        <img 
          src={car.image} 
          alt='car'
          className='w-full h-full object-contain p-2 group-hover:scale-110 transition duration-500'
        />

        {/* 🔹 Availability Badge */}
        {/* Conditional rendering → only show if available */}
        {car.isAvaliable && (
          <p className='absolute top-3 left-3 bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400
                        text-transparent bg-clip-text px-3 py-1.5 rounded text-sm font-medium shadow'>
            Available Now
          </p>
        )}

        {/* 🔹 Price Tag */}
        {/* Positioned bottom-right using absolute */}
        <div className='absolute bottom-3 right-3 bg-black/60 px-4 py-2 rounded-lg 
                        font-semibold text-transparent bg-clip-text 
                        bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400'>

          {/* Dynamic price */}
          {currency}{car.pricePerDay}

          <span className='text-sm text-green-200'>/day</span>
        </div>

      </div>

      {/* 🔹 DETAILS SECTION */}
      <div className='p-5 flex flex-col gap-4'>

        {/* 🔹 Car Name */}
        <h2 className='text-xl md:text-2xl font-bold leading-snug
                       bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400
                       text-transparent bg-clip-text'>
          {car.brand} {car.model}
        </h2>

        {/* 🔹 Basic Info */}
        <p className='text-base md:text-lg
                      bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400
                      text-transparent bg-clip-text'>
          {car.category} • {car.fuel_type} • {car.seating_capacity} seats
        </p>

        {/* 🔹 Features Grid */}
        {/* Grid layout for better alignment */}
        <div className='mt-3 grid grid-cols-2 gap-4 text-base md:text-lg'>

          {/* 🔹 Seating */}
          <div className='flex items-center gap-2'>
            <img src={assets.users_icon} alt="users" className='w-5 h-5'/>
            <span className='bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 text-transparent bg-clip-text'>
              {car.seating_capacity} seats
            </span>
          </div>

          {/* 🔹 Fuel */}
          <div className='flex items-center gap-2'>
            <img src={assets.fuel_icon} alt="fuel" className='w-5 h-5'/>
            <span className='bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 text-transparent bg-clip-text'>
              {car.fuel_type}
            </span>
          </div>

          {/* 🔹 Category */}
          <div className='flex items-center gap-2'>
            <img src={assets.car_icon} alt="car" className='w-5 h-5'/>
            <span className='bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 text-transparent bg-clip-text'>
              {car.category}
            </span>
          </div>

          {/* 🔹 Location */}
          <div className='flex items-center gap-2'>
            <img src={assets.location_icon} alt="location" className='w-5 h-5'/>
            <span className='bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 text-transparent bg-clip-text'>
              {car.location}
            </span>
          </div>

        </div>

        {/* 🔹 Book Now Button */}
        <button 
          onClick={handleBookNow}

          className='mt-5 py-3 text-lg font-semibold rounded-xl 
          bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 
          text-transparent bg-clip-text 
          hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-green-400'
        >
          Book Now
        </button>

      </div>

    </div>
  )
}

export default CarCards
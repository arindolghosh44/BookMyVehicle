import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CarCards = ({ car }) => {

  const currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate()

 

  const handleBookNow = (e) => {
    e.stopPropagation()
    navigate(`/my-bookings`)
  }

  return (
    <div 
      onClick={()=>{navigate(`/car-details/${car._id}`); scrollTo(0,0)}}
      className='group rounded-2xl overflow-hidden shadow-xl 
      hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer 
      bg-white/10 backdrop-blur-md'
    >

      {/* Image Section */}
      <div className='relative aspect-[16/10] overflow-hidden bg-gray-900'>

        <img 
          src={car.image} 
          alt='car'
          className='w-full h-full object-contain p-2 group-hover:scale-110 transition duration-500'
        />

    
        {/* Availability Badge */}
        {car.isAvailable && (
          <p className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 z-0'>
            Available Now
          </p>
        )}

        {/* Price Tag */}
        <div className='absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg text-sm'>
          {currency}{car.pricePerDay} <span className='text-xs'>/day</span>
        </div>

      </div>

      {/* Details Section */}
      <div className='p-4 flex flex-col gap-3 text-white'>

        {/* Car Name */}
        <h2 className='text-lg font-semibold'>
          {car.brand} {car.model}
        </h2>

        {/* Info */}
        <p className='text-sm text-white/70'>
          {car.category} • {car.fuelType} • {car.seating_capacity} seats
        </p>

        {/* Features */}
        <div className='mt-3 grid grid-cols-2 gap-3 text-sm text-amber-100'>

          <div className='flex items-center gap-2'>
            <img src={assets.users_icon} alt="" className='w-4 h-4'/>
            <span>{car.seating_capacity} seats</span>
          </div>

          <div className='flex items-center gap-2'>
            <img src={assets.fuel_icon} alt="" className='w-4 h-4'/>
            <span>{car.fuelType}Gasoline</span>
          </div>

          <div className='flex items-center gap-2'>
            <img src={assets.car_icon} alt="" className='w-4 h-4'/>
            <span>{car.category}</span>
          </div>

          <div className='flex items-center gap-2'>
            <img src={assets.location_icon} alt="" className='w-4 h-4'/>
            <span>{car.location}</span>
          </div>

        </div>

        {/* Button */}
        <button 
          onClick={handleBookNow}
          className='mt-4 py-2 rounded-lg bg-yellow-300 text-green-900 font-semibold 
          hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300'>
          Book Now
        </button>

      </div>

    </div>
  )
}

export default CarCards
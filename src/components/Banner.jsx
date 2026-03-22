import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
 <div className='w-full max-w-[130rem] mx-auto 
flex flex-col md:flex-row items-center justify-between 
bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 
text-white px-14 md:px-32 py-24 rounded-3xl shadow-2xl overflow-hidden'>
      {/* Left Content */}
      <div className='max-w-xl'>
        <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
          Do Your Own <span className='text-emerald-400'>Luxury Rides</span>
        </h2>

        <p className='mt-4 text-green-200 text-lg'>
          Monetize your vehicle easily and earn passive income.
        </p>

        <p className='text-green-300'>
          We take care of insurance & security.
        </p>

        <button className='mt-6 px-6 py-3 
        bg-emerald-500 hover:bg-emerald-600 
        transition rounded-xl text-white font-semibold shadow-lg'>
          List Your Ride
        </button>
      </div>

      {/* Right Image */}
      <div className='mt-10 md:mt-0'>
        <img 
          src={assets.banner_car_image} 
          alt="banner" 
          className='w-full max-w-md object-contain drop-shadow-[0_10px_30px_rgba(16,185,129,0.4)]'
        />
      </div>

    </div>
  )
}

export default Banner
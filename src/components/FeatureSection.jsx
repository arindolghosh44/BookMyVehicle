import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCards from './CarCards'
import { useNavigate } from 'react-router-dom'

const FeatureSection = () => {

  // 🔹 useNavigate()
  // Used to redirect user programmatically (button click navigation)
  const navigate = useNavigate()

  return (
    <div className='px-6 md:px-16 lg:px-24 py-12'>

      {/* 🔹 Title Component */}
      {/* Reusable component for consistent UI */}
      {/* Displays section heading + subtitle */}
      <Title 
        title='Featured Vehicles' 
        subTitle='Explore our selection of premium cars'
      />

      {/* 🔹 Cars Grid Section */}
      {/* Responsive grid layout:
          1 column → mobile
          2 columns → tablet
          3 columns → desktop
      */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>

        {
          // 🔹 Select only first 3 cars
          // slice(0,3) → used to show "featured" subset
          dummyCarData.slice(0, 3).map((car, index) => (

            <div
              key={car._id} // 🔹 Unique key for React optimization

              // 🔹 Animation class (custom Tailwind or CSS)
              className='animate-fadeIn'

              // 🔹 Staggered animation effect
              // Each card appears slightly delayed
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              {/* 🔹 Reusable Car Card Component */}
              {/* Pass individual car data via props */}
              <CarCards car={car} />

            </div>
          ))
        }

      </div>

      {/* 🔹 Explore More Button */}
      <div className='flex justify-center mt-16'>

        <button 

          // 🔹 On Click:
          // 1. Navigate to "/cars" page
          // 2. Scroll to top (UX improvement)
          onClick={() => {
            navigate('/cars')
            window.scrollTo(0, 0)
          }}

          className='flex items-center gap-2 px-6 py-3 border border-gray-300 
          hover:bg-amber-50 hover:scale-105 active:scale-95 
          rounded-md transition-all duration-300 cursor-pointer'
        >

          {/* 🔹 Button Text */}
          Explore all Rides  

          {/* 🔹 Arrow Icon */}
          <img src={assets.arrow_icon} alt="arrow" className='w-4' />
        </button>

      </div>

    </div>
  )
}

export default FeatureSection
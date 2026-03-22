import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCards from './CarCards'
import { useNavigate } from 'react-router-dom'

const FeatureSection = () => {

  const navigate = useNavigate()

  return (
    <div className='px-6 md:px-16 lg:px-24 py-12'>

      {/* Title */}
      <Title 
        title='Featured Vehicles' 
        subTitle='Explore our selection of premium cars'
      />

      {/* Cars Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
        {
          dummyCarData.slice(0, 3).map((car, index) => (
            <div
              key={car._id}
              className='animate-fadeIn'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CarCards car={car} />
            </div>
          ))
        }
      </div>

      {/* Button */}
      <div className='flex justify-center mt-16'>
        <button 
          onClick={() => {
            navigate('/cars')
            window.scrollTo(0, 0)
          }}
          className='flex items-center gap-2 px-6 py-3 border border-gray-300 
          hover:bg-amber-50 hover:scale-105 active:scale-95 
          rounded-md transition-all duration-300 cursor-pointer'
        >
          Explore all Rides  
          <img src={assets.arrow_icon} alt="arrow" className='w-4' />
        </button>
      </div>

    </div>
  )
}

export default FeatureSection
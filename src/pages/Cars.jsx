import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCards from '../components/CarCards'

const Cars = () => {
  const [input, setInput] = useState('')

  // Filter cars based on search input
  const filteredCars = dummyCarData.filter(car =>
    car.brand.toLowerCase().includes(input.toLowerCase()) ||
    car.model.toLowerCase().includes(input.toLowerCase()) ||
    (car.features && car.features.some(f => f.toLowerCase().includes(input.toLowerCase())))
  )

  return (
    <div className="w-full min-h-screen px-8 md:px-16 lg:px-24 py-12 
                    bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50">

      {/* Title */}
      <Title 
        title="Available Rides" 
        subTitle="Find your perfect ride and start your journey with comfort and style 🚗💨" 
        align="center"
      />

      {/* Search Bar */}
      <div className="mt-8 flex items-center gap-4 bg-emerald-200 shadow-lg rounded-3xl p-4 md:p-5 max-w-3xl mx-auto">
        <img src={assets.search_icon} alt="search" className="w-7 h-7 text-emerald-700" />

        <input
          type="text"
          placeholder="Search by make, model, or features"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 outline-none text-xl md:text-2xl font-semibold text-green-900 placeholder:text-green-600 bg-transparent"
        />

        <img src={assets.filter_icon} alt="filter" className="w-7 h-7 cursor-pointer text-emerald-700" />
      </div>

      {/* Showing Cars Count */}
      <p className="mt-6 text-center text-xl md:text-2xl font-bold
                    bg-gradient-to-r from-green-500 via-emerald-600 to-cyan-500
                    text-transparent bg-clip-text">
        Showing {filteredCars.length} Cars
      </p>

      {/* Cars List Section */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <CarCards key={index} car={car} />
          ))
        ) : (
          <p className="col-span-full text-center text-xl md:text-2xl font-semibold text-red-500">
            No rides found matching your search 😕
          </p>
        )}
      </div>

    </div>
  )
}

export default Cars
import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCards from '../components/CarCards'

const Cars = () => {

  // 🔹 State to store search input value
  // This makes the input a "controlled component"
  // → React controls the value instead of DOM
  const [input, setInput] = useState('')

  // 🔹 Filtering Logic
  // Runs on every render when "input" changes
  // filter() → returns only matching cars
  const filteredCars = dummyCarData.filter(car =>

    // 🔹 Convert everything to lowercase
    // Reason: make search case-insensitive
    car.brand.toLowerCase().includes(input.toLowerCase()) ||

    car.model.toLowerCase().includes(input.toLowerCase()) ||

    // 🔹 Check inside features array
    // some() → returns true if ANY feature matches
    (car.features && car.features.some(f =>
      f.toLowerCase().includes(input.toLowerCase())
    ))
  )

  return (
    <div className="w-full min-h-screen px-8 md:px-16 lg:px-24 py-12 
                    bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50">

      {/* 🔹 Title Section */}
      {/* Reusable component for consistent heading UI */}
      <Title 
        title="Available Rides" 
        subTitle="Find your perfect ride and start your journey with comfort and style 🚗💨" 
        align="center"
      />

      {/* 🔹 Search Bar */}
      {/* Acts as filter input for cars */}
      <div className="mt-8 flex items-center gap-4 bg-emerald-200 shadow-lg rounded-3xl p-4 md:p-5 max-w-3xl mx-auto">

        {/* 🔹 Search Icon */}
        <img src={assets.search_icon} alt="search" className="w-7 h-7 text-emerald-700" />

        {/* 🔹 Input Field */}
        {/* Controlled input → value tied to state */}
        <input
          type="text"
          placeholder="Search by make, model, or features"

          // 🔹 Value comes from state
          value={input}

          // 🔹 On typing → update state → triggers re-render
          onChange={(e) => setInput(e.target.value)}

          className="flex-1 outline-none text-xl md:text-2xl font-semibold text-green-900 placeholder:text-green-600 bg-transparent"
        />

        {/* 🔹 Filter Icon (currently UI only) */}
        {/* Can be used later for advanced filtering */}
        <img src={assets.filter_icon} alt="filter" className="w-7 h-7 cursor-pointer text-emerald-700" />
      </div>

      {/* 🔹 Result Count */}
      {/* Dynamically shows how many cars match search */}
      <p className="mt-6 text-center text-xl md:text-2xl font-bold
                    bg-gradient-to-r from-green-500 via-emerald-600 to-cyan-500
                    text-transparent bg-clip-text">

        {/* filteredCars.length updates automatically */}
        Showing {filteredCars.length} Cars
      </p>

      {/* 🔹 Cars Grid Section */}
      {/* Responsive grid layout */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* 🔹 Conditional Rendering */}
        {/* If cars found → show list */}
        {/* Else → show empty state */}
        {filteredCars.length > 0 ? (

          // 🔹 map() → render each car card
          filteredCars.map((car, index) => (

            // 🔹 CarCards is reusable component
            // Each card gets individual car data via props
            <CarCards key={index} car={car} />
          ))

        ) : (

          // 🔹 Empty State UI
          <p className="col-span-full text-center text-xl md:text-2xl font-semibold text-red-500">
            No rides found matching your search 😕
          </p>
        )}
      </div>

    </div>
  )
}

export default Cars
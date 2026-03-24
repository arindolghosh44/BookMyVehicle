import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'
import Loader from '../components/Loader'

const CarDetails = () => {

  // 🔹 useParams()
  // Extract dynamic ID from URL
  // Example: /car-details/123 → id = "123"
  const { id } = useParams()

  // 🔹 useNavigate()
  // Used for programmatic navigation (back, redirect, etc.)
  const navigate = useNavigate()

  // 🔹 State to store selected car details
  // Initially null → shows Loader
  const [car, setCar] = useState(null)

  // 🔹 Get today's date in YYYY-MM-DD format
  // Used to restrict past dates in input fields
  const today = new Date().toISOString().split("T")[0]

  // 🔹 Form state (controlled inputs)
  // Stores booking data
  const [form, setForm] = useState({
    pickupDate: '',
    returnDate: ''
  })

  // 🔹 Fetch car details when component loads or ID changes
  useEffect(() => {

    // 🔹 Find car from dummy data using ID
    // == used because id from URL is string
    const selectedCar = dummyCarData.find(car => car._id == id)

    // 🔹 Update state → triggers re-render
    setCar(selectedCar)

  }, [id])

  // 🔹 Handle input changes (generic handler)
  // Uses "name" attribute to update correct field
  const handleChange = (e) => {

    // Spread previous state + update changed field
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // 🔹 Form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // prevent page reload

    // 🔹 Basic validation
    if (!form.pickupDate || !form.returnDate) {
      alert("Please select both dates")
      return
    }

    // 🔹 Business logic (currently dummy)
    // In real app → send data to backend API
    alert("Booking Confirmed 🚗")
  }

  // 🔹 Conditional Rendering
  // If car data exists → show UI
  // Else → show loading spinner
  return car ? (

    <div className='w-full min-h-screen px-8 md:px-16 lg:px-24 py-12 
                    bg-gradient-to-br from-blue-50 via-emerald-50 to-cyan-50'>

      {/* 🔹 Back Button */}
      {/* navigate(-1) → go to previous page */}
      <button 
        onClick={() => navigate(-1)} 
        className='flex items-center gap-3 mb-10 group'
      >
        <img src={assets.arrow_icon} className='w-5 group-hover:-translate-x-1 transition'/>
        <span className="text-xl font-semibold text-blue-700">
          Back to all Rides
        </span>
      </button>

      {/* 🔹 Main Layout Grid */}
      {/* Left → Car Info */}
      {/* Right → Booking Form */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

        {/* 🚗 LEFT SECTION (Car Details) */}
        <div className='space-y-10'>

          {/* 🔹 Car Image */}
          {/* Fixed height ensures consistent layout */}
          <div className='rounded-3xl overflow-hidden shadow-2xl h-[450px] lg:h-[650px]'>
            <img 
              src={car.image} 
              alt="car"
              className='w-full h-full object-cover'
            />
          </div>

          {/* 🔹 Car Title */}
          <div>
            <h1 className='text-5xl font-extrabold text-slate-900'>
              {car.brand} {car.model}
            </h1>

            <p className='text-xl text-blue-700 mt-3 font-semibold'>
              {car.category} • {car.year}
            </p>
          </div>

          {/* 🔹 Car Specifications */}
          {/* Mapping static + dynamic data */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {[
              { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
              { icon: assets.fuel_icon, text: car.fuel_type },
              { icon: assets.car_icon, text: car.transmission },
              { icon: assets.location_icon, text: car.location }
            ].map(({ icon, text }) => (

              // key = text (unique enough here)
              <div key={text} className='flex items-center gap-3 bg-blue-100 p-4 rounded-xl shadow'>
                <img src={icon} alt="icon" className='w-6' />
                <span className='text-lg text-slate-800'>{text}</span>
              </div>
            ))}
          </div>

          {/* 🔹 Description */}
          <div>
            <h2 className='text-3xl font-bold text-slate-900'>Description</h2>
            <p className='text-lg text-slate-700 mt-3'>
              {car.description}
            </p>
          </div>

          {/* 🔹 Features List */}
          <div>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>
              Features
            </h2>

            {/* 🔹 Fallback if no features */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {(car.features || [
                "Air Conditioning",
                "Bluetooth",
                "GPS Navigation",
                "Music System"
              ]).map((item, index) => (

                <li 
                  key={index}
                  className='flex items-center gap-3 bg-emerald-100 p-4 rounded-xl shadow-sm'
                >
                  <img src={assets.check_icon} alt="check" className='w-5 h-5' />
                  <span className='text-lg text-slate-800 font-medium'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 🧾 RIGHT SECTION (Booking Form) */}
        <div>

          <form 
            onSubmit={handleSubmit}

            // 🔹 Fixed height to match image section
            className='w-full 
                       bg-gradient-to-br from-blue-200 via-emerald-200 to-cyan-200
                       p-12 rounded-3xl shadow-2xl
                       min-h-[650px] flex flex-col justify-between'
          >

            {/* 🔹 Header */}
            <div>
              <h2 className='text-4xl font-extrabold text-slate-900'>
                Book This Ride
              </h2>

              {/* 🔹 Price per day */}
              <div className='mt-4 text-3xl font-bold text-blue-900'>
                ₹{car.pricePerDay}
                <span className='text-lg text-emerald-700'> / day</span>
              </div>
            </div>

            {/* 🔹 Input Section */}
            <div className='mt-10 space-y-7'>

              {/* 🔹 Date Inputs */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {/* 🔹 Pickup Date */}
                <div>
                  <label className='block text-lg font-semibold text-slate-800 mb-2'>
                    Pickup Date
                  </label>

                  <input
                    type="date"
                    name="pickupDate"
                    value={form.pickupDate}

                    // 🔹 Custom logic for validation
                    onChange={(e) => {

                      handleChange(e)

                      // 🔹 If pickup > return → auto-fix return date
                      if (form.returnDate && e.target.value > form.returnDate) {
                        setForm(prev => ({
                          ...prev,
                          pickupDate: e.target.value,
                          returnDate: e.target.value
                        }))
                      }
                    }}

                    // 🔹 Prevent selecting past dates
                    min={today}

                    className='w-full p-5 text-lg rounded-xl bg-blue-50 text-slate-900 border border-blue-300'
                  />
                </div>

                {/* 🔹 Return Date */}
                <div>
                  <label className='block text-lg font-semibold text-slate-800 mb-2'>
                    Return Date
                  </label>

                  <input
                    type="date"
                    name="returnDate"
                    value={form.returnDate}
                    onChange={handleChange}

                    // 🔹 Return date cannot be before pickup
                    min={form.pickupDate || today}

                    className='w-full p-5 text-lg rounded-xl bg-blue-50 text-slate-900 border border-blue-300'
                  />
                </div>

              </div>

            </div>

            {/* 🔹 Submit Button */}
            <button
              type="submit"
              className='mt-10 w-full bg-gradient-to-r from-blue-700 to-emerald-600 
                         text-white py-5 rounded-xl font-bold text-xl'
            >
              Confirm Booking
            </button>

          </form>
        </div>

      </div>

    </div>

  ) : <Loader /> // 🔹 Show loader until data loads
}

export default CarDetails
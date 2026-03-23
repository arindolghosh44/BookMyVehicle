import React, { useEffect, useState } from 'react'
import { assets, dummyMyBookingsData } from '../assets/assets'
import Title from '../components/Title'

const Mybookings = () => {
  const [booking, setBooking] = useState([])

  const fetchMybooking = async () => {
    setBooking(dummyMyBookingsData)
  }

  useEffect(() => {
    fetchMybooking()
  }, [])

  const currency = import.meta.env.VITE_CURRENCY || "₹"

  return (
    <div className="w-full min-h-screen px-8 md:px-16 lg:px-24 py-12 bg-green-50">

      {/* Page Title */}
      <Title 
        title="My Ride Bookings" 
        subTitle="Here are all your confirmed rides 🚗💨" 
        align='left'
      />

      {/* Booking Cards */}
      <div className="mt-8 flex flex-col gap-6">
        {booking.length > 0 ? (
          booking.map((bookings, index) => (
            <div key={bookings._id} 
                 className="flex flex-col md:flex-row items-start md:items-center justify-between 
                            bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-5 
                            hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 gap-4">

              {/* 1️⃣ Column: Car Image (BIGGER) */}
              <div className="flex items-center justify-center md:w-1/3">
                <div className="w-64 h-40 md:w-72 md:h-48 bg-white rounded-xl overflow-hidden flex items-center justify-center shadow-sm">
                  <img src={bookings.car.image} alt="" className="w-full h-full object-contain p-2" />
                </div>
              </div>

              {/* 2️⃣ Column: Car Info */}
              <div className="flex flex-col gap-2 md:w-1/4 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold
                               bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400
                               text-transparent bg-clip-text">
                  {bookings.car.brand} {bookings.car.model}
                </h2>

                <p className="text-sm md:text-lg
                              bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400
                              text-transparent bg-clip-text">
                  {bookings.car.year} • {bookings.car.category} • {bookings.car.location}
                </p>

                <p className="text-sm md:text-base font-medium text-green-800">
                  Pickup: {bookings.pickupDate.split('T')[0]} | Return: {bookings.returnDate.split('T')[0]}
                </p>
              </div>

              {/* 3️⃣ Column: Booking Info */}
              <div className="flex flex-col items-center md:items-end gap-2 md:w-1/6">
                <p className="text-lg md:text-xl font-semibold
                              bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400
                              text-transparent bg-clip-text">
                  Booking #{index + 1}
                </p>

                <p className={`px-4 py-1 rounded-full text-sm font-medium 
                               ${bookings.status === 'confirmed' 
                                 ? 'bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 text-white' 
                                 : 'bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white'}`}>
                  {bookings.status}
                </p>
              </div>

              {/* 4️⃣ Column: Rental Info */}
              <div className="flex flex-col items-start md:items-end gap-2 md:w-1/5">
                {/* Rental Period */}
                <div className="flex items-center gap-2 w-full">
                  <img src={assets.calendar_icon_colored} alt="calendar" className="w-5 h-5 flex-shrink-0" />
                  <div className="text-sm md:text-base text-green-900 font-medium">
                    <p className="font-semibold">Rental Period</p>
                    <p>{bookings.pickupDate.split('T')[0]} → {bookings.returnDate.split('T')[0]}</p>
                  </div>
                </div>

                {/* Rental Location */}
                <div className="flex items-center gap-2 w-full">
                  <img src={assets.location_icon} alt="location" className="w-5 h-5 flex-shrink-0" />
                  <div className="text-sm md:text-base text-green-900 font-medium">
                    <p className="font-semibold">Rental Location</p>
                    <p>{bookings.car.location}</p>
                  </div>
                </div>
              </div>

              {/* 5️⃣ Price & Booking Date */}
              <div className="flex flex-col items-start md:items-end gap-2 md:w-1/6 text-green-900 font-medium">
                <p className="font-semibold">Total Price</p>
                <h1 className="text-lg md:text-xl font-bold">{currency}{bookings.price}</h1>
                <p className="text-sm md:text-base">Booked on {bookings.createdAt.split('T')[0]}</p>
              </div>

            </div>
          ))
        ) : (
          <p className="text-center text-xl md:text-2xl font-semibold text-red-500">
            No bookings found 😕
          </p>
        )}
      </div>

    </div>
  )
}

export default Mybookings
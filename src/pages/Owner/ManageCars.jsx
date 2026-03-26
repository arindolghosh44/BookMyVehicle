import React, { useEffect, useState } from 'react'
import Title from '../../components/Owner/Title'
import { assets, dummyCarData } from '../../assets/assets'

const ManageCars = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    setCars(dummyCarData)
  }, [])

  return (
    <div className='w-full px-4 md:px-10 py-6 
      bg-gradient-to-br from-[#02140f] via-[#052e2b] to-[#021a17] 
      min-h-screen flex justify-center'>

      <div className='w-full max-w-6xl'>

        <Title 
          title="Manage Cars"
          subTitle="Control and manage your fleet"
        />

        {/* Table Container */}
        <div className='mt-8 rounded-2xl overflow-hidden
          bg-[#041c1a]/40 backdrop-blur-xl
          border border-emerald-500/20
          shadow-[0_0_40px_rgba(16,185,129,0.3)]'>

          {/* Horizontal Scroll Wrapper */}
          <div className="overflow-x-auto w-full">
            <table className='w-full min-w-[640px] text-sm text-left'>

              {/* Table Head */}
              <thead className='text-emerald-300 uppercase text-xs border-b border-emerald-500/30'>
                <tr>
                  <th className='px-4 py-3 md:px-6 md:py-4'>Rides</th>
                  <th className='px-4 py-3 md:px-6 md:py-4'>Category</th>
                  <th className='px-4 py-3 md:px-6 md:py-4'>Price</th>
                  <th className='px-4 py-3 md:px-6 md:py-4'>Status</th>
                  <th className='px-4 py-3 md:px-6 md:py-4 text-center'>Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {cars.length === 0 ? (
                  <tr>
                    <td colSpan="5" className='text-center py-10 text-emerald-400'>
                      No Cars Found 🚗
                    </td>
                  </tr>
                ) : (
                  cars.map((car, index) => (
                    <tr 
                      key={index}
                      className='border-b border-emerald-500/10 
                        transform transition-all duration-300
                        hover:scale-[1.02] hover:-translate-y-1
                        hover:bg-[#052420]/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]
                        hover:border-l-4 hover:border-emerald-400'>
                      
                      {/* Car */}
                      <td className='px-4 py-3 md:px-6 md:py-4 flex items-center gap-3'>
                        <img 
                          src={car.image}
                          className='w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl border border-emerald-400/30
                            transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.8)]'
                        />
                        <div>
                          <p className='text-emerald-200 font-semibold text-sm md:text-base'>
                            {car.brand} {car.model}
                          </p>
                          <p className='text-emerald-400 text-xs md:text-sm'>
                            {car.seating_capacity || 5} seats • {car.transmission || "Automatic"}
                          </p>
                        </div>
                      </td>

                      {/* Category */}
                      <td className='px-4 py-3 md:px-6 md:py-4 text-emerald-300 font-medium'>{car.category}</td>

                      {/* Price */}
                      <td className='px-4 py-3 md:px-6 md:py-4 text-emerald-400 font-semibold'>
                        ${car.pricePerDay || car.price}/day
                      </td>

                      {/* Status */}
                      <td className='px-4 py-3 md:px-6 md:py-4'>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium
                          ${car.isAvaliable
                            ? "bg-emerald-500/30 text-emerald-100 border border-emerald-400/50"
                            : "bg-red-500/30 text-red-200 border border-red-400/50"}`}>
                          {car.isAvaliable ? "Available" : "Not Available"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className='px-4 py-3 md:px-6 md:py-4'>
                        <div className='flex justify-center gap-2 md:gap-4'>

                          {/* View */}
                          <button className='p-2 md:p-3 rounded-xl 
                            bg-gradient-to-br from-cyan-600/40 to-cyan-900/40
                            border border-cyan-500/40 shadow-[0_0_8px_rgba(34,211,238,0.5)]
                            transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.9)]'>
                            <img src={assets.eye_icon} className='w-5 h-5 invert brightness-125' />
                          </button>

                          {/* Delete */}
                          <button className='p-2 md:p-3 rounded-xl 
                            bg-gradient-to-br from-red-600/40 to-red-900/40
                            border border-red-500/40 shadow-[0_0_8px_rgba(248,113,113,0.5)]
                            transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(248,113,113,0.9)]'>
                            <img src={assets.delete_icon} className='w-5 h-5 invert brightness-125' />
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ManageCars
import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Title from '../../components/Owner/Title'

const DashBoard = () => {

  const cur = import.meta.env.VITE_CURRENCY

  const [data,setData] = useState({
    totalCars:0,
    totalBookings:0,
    pendingBookings:0,
    completedBookings:0,
    recentBookings:[],
    monthlyRevenue:0
  })

  const dashboardCards = [
    {title :"Total Rides", value: data.totalCars, icon:assets.carIconColored},
    {title :"Total Bookings", value: data.totalBookings, icon:assets.listIconColored},
    {title :"Pending", value: data.pendingBookings, icon:assets.cautionIconColored},
    {title :"Confirmed", value: data.completedBookings, icon:assets.listIconColored},
  ]

  useEffect(()=>{
    setData(dummyDashboardData)
  },[])

  return (
   <div className='w-full px-4 md:px-10 py-6 
   bg-gradient-to-r from-green-950 via-emerald-900 to-green-900 
   min-h-screen flex justify-center'>

    <div className='w-full max-w-6xl'>

      {/* Title */}
      <Title 
        title="Admin Dashboard" 
        subTitle="Manage cars, bookings and track performance" 
      />

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>

        {dashboardCards.map((card,index) =>(

          <div 
            key={index} 
            className='flex items-center justify-between p-5 rounded-2xl 
            bg-green-900/40 backdrop-blur-md border border-green-800 
            shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] 
            transition duration-300 hover:-translate-y-1'
          >

            <div>
              <h1 className='text-green-300 text-sm tracking-wide'>
                {card.title}
              </h1>

              <p className='text-2xl md:text-3xl font-bold text-green-100 mt-1'>
                {card.value}
              </p>
            </div>

            <div className='p-3 rounded-full bg-emerald-500/20'>
              <img 
                src={card.icon} 
                alt="icon" 
                className='w-6 h-6 brightness-200'
              />
            </div>

          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>

        {/* Recent Bookings */}
        <div className='p-6 rounded-2xl 
        bg-green-900/40 backdrop-blur-md border border-green-800 shadow-lg overflow-x-auto'>

          <h1 className='text-xl font-semibold text-green-100'>
            Recent Bookings
          </h1>
          <p className='text-green-300 text-sm mb-5'>
            Latest Customer Bookings
          </p>

          <div className='flex flex-col gap-4 min-w-[300px] md:min-w-full'>

            {data.recentBookings.map((bookings,index)=>(
              <div 
                key={index} 
                className='flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg 
                bg-green-950/40 border border-green-800 
                hover:bg-green-900/40 transition'
              >

                {/* Left */}
                <div className='flex items-center gap-3 mb-2 sm:mb-0'>

                  <div className='p-2 bg-emerald-500/20 rounded-full'>
                    <img 
                      src={assets.listIconColored} 
                      alt="" 
                      className='w-4 h-4 brightness-200'
                    />
                  </div>

                  <div>
                    <p className='text-green-100 text-sm font-medium'>
                      {bookings.car.brand} {bookings.car.model}
                    </p>
                    <p className='text-green-400 text-xs'>
                      {bookings.createdAt.split('T')[0]}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className='text-right'>
                  <p className='text-green-200 text-sm font-semibold'>
                    {cur}{bookings.price}
                  </p>

                  <span className={`text-xs px-2 py-1 rounded-full 
                    ${bookings.status === "Pending" 
                      ? "bg-yellow-500/20 text-yellow-300" 
                      : "bg-emerald-500/20 text-emerald-300"}`}>
                    {bookings.status}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Monthly Revenue */}
        <div className='p-6 rounded-2xl 
        bg-green-900/40 backdrop-blur-md border border-green-800 shadow-lg 
        flex flex-col justify-between'>

          <div>
            <h1 className='text-xl font-semibold text-green-100'>
              Monthly Revenue
            </h1>
            <p className='text-green-300 text-sm'>
              Current Month Earnings
            </p>
          </div>

          <div className='mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>

            <h2 className='text-3xl md:text-4xl font-bold text-emerald-300'>
              {cur}{data.monthlyRevenue}
            </h2>

            <div className='p-4 rounded-full bg-emerald-500/20 self-start sm:self-auto'>
              <img 
                src="https://img.icons8.com/ios-filled/100/34d399/combo-chart.png" 
                alt="chart" 
                className='w-8 h-8'
              />
            </div>

          </div>

          {/* Progress Bar */}
          <div className='mt-6'>
            <div className='w-full h-2 bg-green-950 rounded-full'>
              <div 
                className='h-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-500'
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

        </div>

      </div>

    </div>
   </div>
  )
}

export default DashBoard
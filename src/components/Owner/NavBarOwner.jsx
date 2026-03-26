import React from 'react'
import { Link } from 'react-router-dom'
import { dummyUserData } from '../../assets/assets'

const NavBarOwner = () => {

  const user = dummyUserData

  return (
    <div className='w-full flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 
    bg-gradient-to-r from-green-900 via-emerald-900 to-green-950 
    shadow-lg border-b border-green-800'>

      {/* Logo Section */}
      <Link to='/' className='flex items-center gap-3 group'>
        <img 
          src="https://img.icons8.com/ios-filled/100/a7f3d0/car--v1.png" 
          alt="Car Logo" 
          className='w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110'
        />
        <h1 className='text-xl md:text-2xl font-bold text-green-100 tracking-wide 
        group-hover:text-emerald-300 transition'>
          BookMyRide Owner
        </h1>
      </Link>

      {/* Welcome Section */}
      <div className='flex items-center gap-4'>

        <div className='text-right hidden sm:block'>
          <p className='text-sm text-green-300'>Welcome back</p>
          <h2 className='text-lg font-semibold text-green-100 
          hover:text-emerald-300 transition'>
            {user.name || "Owner"}
          </h2>
        </div>

        {/* Profile Image */}
        <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400 
        shadow-md hover:scale-105 hover:border-emerald-300 transition duration-300'>
          <img 
            src="https://i.pravatar.cc/150?img=3" 
            alt="User" 
            className='w-full h-full object-cover'
          />
        </div>

      </div>

    </div>
  )
}

export default NavBarOwner
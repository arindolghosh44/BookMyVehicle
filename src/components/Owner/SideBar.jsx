import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'

const SideBar = () => {

  const user = dummyUserData
  const location = useLocation()
  const [image, setImage] = useState(null)

  const updateImage = () => {
    user.image = URL.createObjectURL(image)
    setImage(null)
  }

  return (
    <div className='w-[260px] h-screen 
    bg-gradient-to-b from-green-950 via-emerald-900 to-green-900 
    border-r border-green-800 shadow-xl flex flex-col items-center py-6'>

      {/* Profile Section */}
      <div className='flex flex-col items-center gap-3 mb-6'>

        <label htmlFor="image" className='relative cursor-pointer group'>
          
          {/* Profile Image */}
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image || "https://i.pravatar.cc/150?img=12"
            }
            alt="user"
            className='w-24 h-24 rounded-full object-cover 
            border-4 border-emerald-400 shadow-lg 
            group-hover:scale-105 transition duration-300'
          />

          {/* Edit Icon Overlay */}
          <div className='absolute bottom-0 right-0 
          bg-emerald-500 p-2 rounded-full shadow-md 
          group-hover:scale-110 transition'>
            <img src={assets.edit_icon} alt="edit" className='w-4 h-4 invert' />
          </div>

          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        {/* Save Button */}
        {image && (
          <button
            onClick={updateImage}
            className='flex items-center gap-2 
            bg-emerald-500 text-green-950 px-4 py-1.5 
            rounded-full text-sm font-medium shadow-md 
            hover:bg-emerald-400 transition'
          >
            Save
            <img src={assets.check_icon} width={13} alt="check" />
          </button>
        )}

        {/* User Name */}
        <p className='text-lg font-semibold text-green-100'>
          {user?.name || "Owner"}
        </p>
      </div>

      {/* Menu Section */}
      <div className='w-full flex flex-col gap-1 px-4'>

        {ownerMenuLinks.map((link, index) => {

          const isActive = link.path === location.pathname

          return (
            <NavLink
              key={index}
              to={link.path}
              className={`relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200
              ${isActive 
                ? 'bg-emerald-700/40 text-emerald-300 font-semibold shadow-inner' 
                : 'text-green-200 hover:bg-green-800/40 hover:text-emerald-300'}`}
            >

              {/* Icon */}
              <img
                src={isActive ? link.coloredIcon : link.icon}
                alt="icon"
                className='w-5 h-5 brightness-200'
              />

              {/* Text */}
              <span className='text-sm tracking-wide'>{link.name}</span>

              {/* Active Indicator */}
              {isActive && (
                <div className='absolute right-0 top-0 h-full w-1.5 
                bg-emerald-400 rounded-l-full shadow-[0_0_8px_rgba(52,211,153,0.8)]'></div>
              )}
            </NavLink>
          )
        })}
      </div>

    </div>
  )
}

export default SideBar
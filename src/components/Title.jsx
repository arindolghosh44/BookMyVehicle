import React from 'react'

const Title = ({ title, subTitle, align = "center" }) => {
  return (
    <div 
      className={`flex flex-col justify-center gap-3 group
      ${align === "left" ? "items-start text-left" : "items-center text-center"}`}
    >

      {/* Main Title */}
      <h1 className='text-3xl md:text-5xl font-bold leading-tight
        bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400
        text-transparent bg-clip-text
        transition duration-300 group-hover:scale-105'>
        {title}
      </h1>

      {/* Subtitle */}
      <p className='text-sm md:text-lg max-w-2xl
        bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400
        text-transparent bg-clip-text'>
        {subTitle}
      </p>

      {/* Decorative Line */}
      <div 
        className={`h-1 w-16 rounded-full bg-yellow-300 
        transition-all duration-500 group-hover:w-24
        ${align === "left" ? "" : "mx-auto"}`}
      ></div>

    </div>
  )
}

export default Title
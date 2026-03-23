import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 mb-6">

      {/* Title */}
      <h1 className="
        text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight
        bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500
        text-transparent bg-clip-text
      ">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="
        text-base md:text-xl lg:text-2xl max-w-2xl
        text-green-700 font-medium
      ">
        {subTitle}
      </p>

      {/* Decorative Line */}
      <div className="
        h-1.5 w-16 rounded-full 
        bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500
      "></div>

    </div>
  )
}

export default Title
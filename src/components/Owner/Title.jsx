import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 mb-6">

      {/* Title */}
      <h1 className="
        text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight
        bg-gradient-to-r from-green-200 via-emerald-300 to-green-400
        text-transparent bg-clip-text
        drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]
      ">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="
        text-base md:text-xl lg:text-2xl max-w-2xl
        text-green-300 font-medium
      ">
        {subTitle}
      </p>

      {/* Decorative Line */}
      <div className="
        h-1.5 w-16 rounded-full 
        bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500
        shadow-[0_0_10px_rgba(52,211,153,0.6)]
      "></div>

    </div>
  )
}

export default Title
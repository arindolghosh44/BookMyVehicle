import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[60vh]">

      {/* Outer Glow */}
      <div className="relative">

        {/* Spinning Gradient Ring */}
        <div className="w-16 h-16 rounded-full border-4 border-transparent 
                        bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 
                        animate-spin"
             style={{
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
               padding: '3px'
             }}>
        </div>

        {/* Center Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
        </div>

      </div>

      {/* Text */}
      <p className="ml-5 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent animate-pulse">
        Loading your ride...
      </p>

    </div>
  )
}

export default Loader
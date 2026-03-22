import React from 'react'
import { dummyTestimonialData } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className='w-full max-w-[115rem] mx-auto px-8 md:px-20 xl:px-32 py-28'>

      {/* Heading */}
      <div className='text-center'>
        <h2 className='text-green-900 text-4xl md:text-6xl font-bold leading-tight'>
          Loved by <span className='text-emerald-500'>Creators</span>
        </h2>
      <p className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed'>
  Real experiences from people who are already earning and growing with our platform.
</p>
      </div>

      {/* Cards */}
      <div className='flex flex-wrap mt-16 justify-center gap-10'>
        {dummyTestimonialData.map((testimonial, index) => (
          <div 
            key={index} 
            className='group relative p-10 max-w-md rounded-3xl 
            bg-white/70 backdrop-blur-lg 
            border border-green-100 
            shadow-xl 
            hover:-translate-y-4 hover:scale-105 
            transition-all duration-500 cursor-pointer overflow-hidden'
          >

            {/* Glow Effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-green-200/20 to-emerald-300/20 
            opacity-0 group-hover:opacity-100 transition duration-500'></div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg 
                  key={i} 
                  width="20" 
                  height="18" 
                  viewBox="0 0 16 15"
                  className='group-hover:scale-110 transition'
                >
                  <path 
                    fill="#10B981"
                    d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                  />
                </svg>
              ))}
            </div>

            {/* Content */}
            <p className='text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative z-10'>
              “{testimonial.content}”
            </p>

            <hr className='mb-6 border-green-200' />

            {/* User */}
            <div className='flex items-center gap-4 relative z-10'>
              
              {/* Profile with Glow */}
              <div className='p-[2px] rounded-full bg-gradient-to-r from-green-400 to-emerald-500'>
                <img 
                  src={testimonial.image} 
                  className='w-14 h-14 rounded-full object-cover'
                  alt={testimonial.name}
                />
              </div>

              <div>
                <h3 className='font-semibold text-green-900 text-lg'>
                  {testimonial.name}
                </h3>
                <p className='text-sm text-green-600'>
                  {testimonial.title}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Testimonial
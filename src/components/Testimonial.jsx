import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const Testimonial = () => {

  const dummyTestimonialData = [
    {
      image: assets.testimonial_image_1,
      name: "John Doe",
      location: "New York, USA",
      testimonial: "Amazing platform! It helped me earn passive income easily.",
      rating: 4,
    },
    {
      image: assets.testimonial_image_2,
      name: "Jane Smith",
      location: "London, UK",
      testimonial: "Super smooth experience. Listing my car was very easy.",
      rating: 5,
    },
    {
      image: assets.testimonial_image_1,
      name: "David Lee",
      location: "Sydney, Australia",
      testimonial: "Highly recommended! Great UI and excellent support.",
      rating: 4,
    },
  ]

  return (
    <div className='w-full max-w-[115rem] mx-auto px-8 md:px-20 xl:px-32 py-28'>

      {/* Title */}
      <Title 
        title="What Our Customer Says" 
        subTitle="Real experiences from people who are already earning and growing with our platform."
      />

      {/* Cards */}
      <div className='flex flex-wrap mt-16 justify-center gap-10'>
        
        {dummyTestimonialData.map((testimonial, index) => (
          <div 
            key={index} 
            className='group relative p-8 max-w-sm rounded-3xl 
            bg-white/70 backdrop-blur-lg 
            border border-gray-200 
            shadow-lg 
            hover:-translate-y-3 hover:scale-105 
            transition-all duration-500'
          >

            {/* ⭐ Stars */}
            <div className='flex gap-1 mb-4'>
              {Array(testimonial.rating).fill(0).map((_, i) => (
                <img 
                  key={i} 
                  src={assets.star_icon} 
                  alt='star'
                  className='w-5 h-5'
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className='text-gray-700 text-lg leading-relaxed mb-6'>
              “{testimonial.testimonial}”
            </p>

            <hr className='mb-6 border-gray-200' />

            {/* User Info */}
            <div className='flex items-center gap-4'>
              
              {/* Image */}
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className='w-14 h-14 rounded-full object-cover'
              />

              {/* Name + Location */}
              <div>
                <h3 className='font-semibold text-gray-900 text-lg'>
                  {testimonial.name}
                </h3>
                <p className='text-sm text-gray-500'>
                  {testimonial.location}
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
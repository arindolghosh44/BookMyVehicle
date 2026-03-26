import React, { useState } from 'react'
import Title from '../../components/Owner/Title'

const AddCar = () => {

  const [image, setImage] = useState(null)

  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: '',
    pricePerDay: '',
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: '',
    location: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCar(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!image) return alert("Please upload an image")

    const formData = new FormData()
    formData.append("image", image)

    Object.keys(car).forEach(key => {
      formData.append(key, car[key])
    })

    console.log("Submitted Data:")
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1])
    }

    setCar({
      brand: '',
      model: '',
      year: '',
      pricePerDay: '',
      category: '',
      transmission: '',
      fuel_type: '',
      seating_capacity: '',
      location: '',
      description: '',
    })
    setImage(null)
  }

  const inputStyle = `
  w-full px-4 py-2.5 rounded-lg 
  bg-green-950/60 border border-emerald-800 
  text-emerald-200 placeholder-emerald-400
  caret-emerald-300
  focus:outline-none focus:ring-2 focus:ring-emerald-400 
  focus:border-emerald-400
  hover:border-emerald-500 hover:bg-green-900/60
  hover:shadow-[0_0_12px_rgba(52,211,153,0.3)]
  transition duration-300
  `

  return (
    <div className='w-full px-6 md:px-10 py-8 
    bg-gradient-to-r from-green-950 via-emerald-900 to-green-900 min-h-screen'>

      <Title 
        title='Add New Ride' 
        subTitle='Fill in details to list a new Ride for booking'
      />

      <form onSubmit={handleSubmit}>

        {/* Upload */}
        <label className='flex items-center gap-4 mb-6 cursor-pointer group'>
          
          <div className='w-20 h-20 flex items-center justify-center 
          rounded-xl border-2 border-dashed border-emerald-400 
          bg-green-950/60 group-hover:bg-green-900/60 
          group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.6)]
          transition duration-300 overflow-hidden'>

            {image ? (
              <img 
                src={URL.createObjectURL(image)} 
                className='w-full h-full object-cover rounded-xl'
              />
            ) : (
              <img 
  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
  alt="upload file"
  className='w-9 h-9 opacity-90 group-hover:scale-110 transition'
/>
            )}
          </div>

          <input 
            type="file" 
            accept='image/*'
            hidden 
            required
            onChange={(e)=>setImage(e.target.files[0])}
          />

          <p className='text-emerald-300 text-sm group-hover:text-emerald-200 transition'>
            Upload a picture of your Ride
          </p>
        </label>

        {/* Form Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

          <input type="text" required name="brand" value={car.brand} onChange={handleChange} placeholder="Brand" className={inputStyle} />

          <input type="text" required name="model" value={car.model} onChange={handleChange} placeholder="Model" className={inputStyle} />

          <input type="number" min="2000" max="2026" required name="year" value={car.year} onChange={handleChange} placeholder="Year" className={inputStyle} />

          <input type="number" min="0" step="0.01" required name="pricePerDay" value={car.pricePerDay} onChange={handleChange} placeholder="Daily Price" className={inputStyle} />

          {/* Category */}
          <select
            name="category"
            value={car.category}
            onChange={handleChange}
            required
            className={`${inputStyle} appearance-none cursor-pointer text-emerald-200`}
          >
            <option value="" disabled hidden className="bg-green-950 text-emerald-400">
              Select Category
            </option>
            <option className="bg-green-950 text-emerald-200">SUV</option>
            <option className="bg-green-950 text-emerald-200">Sedan</option>
            <option className="bg-green-950 text-emerald-200">Hatchback</option>
            <option className="bg-green-950 text-emerald-200">Luxury</option>
            <option className="bg-green-950 text-emerald-200">Electric</option>
          </select>

          {/* Transmission */}
          <select
            name="transmission"
            value={car.transmission}
            onChange={handleChange}
            required
            className={`${inputStyle} appearance-none cursor-pointer text-emerald-200`}
          >
            <option value="" disabled hidden className="bg-green-950 text-emerald-400">
              Select Transmission
            </option>
            <option className="bg-green-950 text-emerald-200">Manual</option>
            <option className="bg-green-950 text-emerald-200">Automatic</option>
          </select>

          {/* Fuel Type */}
          <select
            name="fuel_type"
            value={car.fuel_type}
            onChange={handleChange}
            required
            className={`${inputStyle} appearance-none cursor-pointer text-emerald-200`}
          >
            <option value="" disabled hidden className="bg-green-950 text-emerald-400">
              Select Fuel Type
            </option>
            <option className="bg-green-950 text-emerald-200">Petrol</option>
            <option className="bg-green-950 text-emerald-200">Diesel</option>
            <option className="bg-green-950 text-emerald-200">Electric</option>
          </select>

          <input type="number" min="1" required name="seating_capacity" value={car.seating_capacity} onChange={handleChange} placeholder="Seating Capacity" className={inputStyle} />

        </div>

        {/* Location */}
        <input 
          type="text"
          required
          name="location"
          value={car.location}
          onChange={handleChange}
          placeholder="Location"
          className={`${inputStyle} mt-5`}
        />

        {/* Description */}
        <textarea 
          required
          name="description"
          value={car.description}
          onChange={handleChange}
          placeholder="Describe your car..."
          rows={4}
          className={`${inputStyle} mt-5 resize-none`}
        />

        {/* Button */}
        <button 
          type="submit"
          className='mt-6 px-6 py-2.5 rounded-lg 
          bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 
          text-green-950 font-semibold shadow-md 
          hover:scale-105 
          hover:shadow-[0_0_25px_rgba(52,211,153,0.9)] 
          active:scale-95
          transition duration-300'>
          ✔ List Your Ride
        </button>

      </form>
    </div>
  )
}

export default AddCar
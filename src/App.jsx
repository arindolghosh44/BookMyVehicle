import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CarDetails from './pages/CarDetails.jsx'
import Cars from './pages/Cars.jsx'
import Mybookings from './pages/Mybookings.jsx'
import Footer from './components/Footer.jsx'
import Layout from './pages/Owner/Layout.jsx'
import DashBoard from './pages/Owner/DashBoard.jsx'
import AddCar from './pages/Owner/AddCar.jsx'
import ManageCars from './pages/Owner/ManageCars.jsx'
import ManageBookings from './pages/Owner/ManageBookings.jsx'

const App = () => {

  // 🔹 State to control login popup visibility
  // showLogin → boolean value (true = show login modal, false = hide)
  // setShowLogin → function to update the state
  const [showLogin, setShowLogin] = useState(false)

  // 🔹 useLocation() gives current URL path
  // Example: "/owner/add-car"
  const location = useLocation()

  // 🔹 Check if current path starts with "/owner"
  // This helps us detect Owner Panel pages
  const isOwnerPath = location.pathname.startsWith('/owner')

  return (
    <>
      {/* 🔹 Navbar should NOT be shown on Owner pages */}
      {/* Example: /owner, /owner/add-car */}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      {/* 🔹 Routes define all page navigation */}
      <Routes>

        {/* 🔹 Home Page Route */}
        {/* URL: "/" */}
        <Route path='/' element={<Home />} />

        {/* 🔹 Car Details Page */}
        {/* Dynamic route using :id */}
        {/* Example: /car-details/123 */}
        <Route path='/car-details/:id' element={<CarDetails />} />

        {/* 🔹 All Cars Listing Page */}
        {/* URL: /cars */}
        <Route path='/cars' element={<Cars />} />

        {/* 🔹 User Bookings Page */}
        {/* URL: /my-bookings */}
        <Route path='/my-bookings' element={<Mybookings />} />

        {/* 🔹 Owner Panel Routes (Nested Routing) */}
        {/* Parent route: /owner */}
        <Route path='/owner' element={<Layout />}>

          {/* 🔹 Default page for /owner */}
          {/* When user visits "/owner", DashBoard will load */}
          <Route index element={<DashBoard />} />

          {/* 🔹 Add Car Page */}
          {/* URL: /owner/add-car */}
          <Route path='add-car' element={<AddCar />} />

          {/* 🔹 Manage Cars Page */}
          {/* URL: /owner/manage-car */}
          <Route path='manage-car' element={<ManageCars />} />

          {/* 🔹 Manage Bookings Page */}
          {/* URL: /owner/manage-bookings */}
          <Route path='manage-bookings' element={<ManageBookings />} />

        </Route>
      </Routes>

      {/* 🔹 Footer should NOT be shown on Owner pages */}
      {!isOwnerPath && <Footer />}

      {/* 🔹 (Optional) You can render Login Modal here using showLogin */}
      {/* Example:
          {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      */}
    </>
  )
}

export default App
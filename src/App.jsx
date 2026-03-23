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

const [showLogin,setShowLogin ] = useState(false)
const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    
    <>
     
    {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

    <Routes>

        <Route path='/' element={<Home/>}/>
         <Route path='/car-details/:id' element={<CarDetails/>}/>
         <Route path='/cars' element={<Cars/>}/>
          <Route path='/my-bookings' element={<Mybookings/>}/>
          <Route path='/owner' element={<Layout/>}>
              <Route index element={<DashBoard/>}/>
              <Route path='add-car' element={<AddCar/>}/>
               <Route path='manage-car' element={<ManageCars/>}/>
                <Route path='manage-bookings' element={<ManageBookings/>}/>

          </Route>
    </Routes>
    
{!isOwnerPath &&  <Footer/>}
   
    </>
  )
}

export default App

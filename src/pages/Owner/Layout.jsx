import React from 'react'
import NavBarOwner from '../../components/Owner/NavBarOwner'
import SideBar from '../../components/Owner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-screen flex flex-col bg-green-50'>

  <NavBarOwner />

  <div className='flex flex-1 overflow-hidden'>

    <SideBar />

    <div className='flex-1 overflow-y-auto p-6 md:p-10'>
      <Outlet />
    </div>

  </div>

</div>
  )
}

export default Layout
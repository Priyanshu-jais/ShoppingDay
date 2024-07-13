import React from 'react'
import  Navbar  from '../Navbar/Navbar'
import  Footer  from '../Footer/Footer'

export const Layout = ({children}) => {
  return (
    <div className=' bg-gray-500 h-screen flex flex-col justify-between'>
      <Navbar/>
      <div className="main-content mt-10">
        {children}
      </div>
      <Footer className=" bottom-0"/>
    </div>
  )
}

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>
            <div className='py-5 px-5 md:px-10 xl:px-20 mt-15 flex items-center justify-center min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SearchResult from './SearchResult';

function Layout() {
    const search = useSelector((state) => state.search.query);
    return (
        <div className='bg-white text-black'>
            <div className=''>
                <Navbar />
            </div>
            
            {search ? (
                <SearchResult />) : (
                <div>
                    <div className='py-5 px-5 md:px-10 xl:px-20 mt-15 flex items-center justify-center min-h-screen'>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Layout

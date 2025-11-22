import React from 'react'
import Products from '../components/HomePage/Products'
import CoustomerCard from '../components/HomePage/CoustomerCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <header>
      <div className=''>
        <div className='text-center py-5 '>
          <h1 className='text-2xl md:text-4xl lg:text-6xl  m-auto py-2'><b>The Best    High-Quality</b> <br /> Home Appliance <b>Products</b></h1>
          <p className='py-4'>200+ Collections for your outfit inspirations in this summer</p>
          <Link to='/allproducts' className='bg-black px-10 py-2 rounded-full text-white hover:bg-gray-900 '>View Category</Link>
        </div>
        <div className='flex-1 md:flex gap-4 py-5 space-y-5'>
          <div>
            <img className='rounded-xl' src="/images/hero-image1.png" alt="hero-image1" />
          </div>
          <div className='text-center space-y-3'>
            <img className='m-auto' src="/images/hero-image2.png" alt="hero-image2" />
            <h3>Electronics Gadgets</h3>
            <Link to='/allproducts' className='border border-[#FC5A31] text-[#FC5A31] px-5 py-1 rounded-full cursor-pointer hover:scale-105 duration-300'> Shop Now ›</Link>
          </div>
        </div>

        <Products />
        <CoustomerCard />
      </div>
    </header >
  )
}

export default Home

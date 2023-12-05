import React from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'



import logo from '../src/images/logo/1 (4).png'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Services = lazy(() => import('./Services'))


const NavBar = () => {
  return (
    <>
        <div className='relative h-40 overflow-hidden overflow-y-hidden bg-fixed bg-center bg-cover bg-BG'>
            <div className='absolute inset-0 bg-color-BG bg-opacity-5 '>
                <div className='flex items-center justify-center space-x-5 font-Raleway'>
                  
                    <Link to='/' className='z-20 hover:text-white'>HOME</Link>
                    <Link to='/about' className='z-20 hover:text-white'>ABOUT</Link>
                    <Link to='/services' className='z-20 hover:text-white'>SERVICES</Link>
                    <Link to='/contact' className='z-20 hover:text-white'>CONTACT</Link>
                </div>
                <div className='absolute z-10 flex items-center justify-center -mt-6 transform -translate-x-1/2 left-1/2 bg-opacity-60'>
                    <Link to='/'>
                        <img className='w-80 h-44 scale-[2]' src={logo} alt='logo'></img>
                    </Link>
            </div>
            </div>
        </div>

        <Suspense fallback={<div className='items-center justify-center'><div>Loading...</div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
      </Suspense>
    </>
  )
}

export default NavBar
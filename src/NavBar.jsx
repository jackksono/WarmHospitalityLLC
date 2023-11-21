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
        <nav className='relative h-36 bg-cover bg-center bg-BG '>
            <div className='absolute fixed bg-white inset-0 bg-opacity-60 '>
                <div className='flex items-center justify-center space-x-7'>
                    <Link to='/' className='z-20'>Home</Link>
                    <Link to='/about' className='z-20'>About</Link>
                    <Link to='/services' className='z-20'>Services</Link>
                    <Link to='/contact' className='z-20'>Contact</Link>
                </div>
                <div className='absolute z-10 flex items-center justify-center left-1/2 transform -translate-x-1/2 -mt-6  bg-opacity-60'>
                    <Link to='/'>
                        <img className='w-80 h-44 scale-[2]' src={logo} alt='logo'></img>
                    </Link>
                </div>
            </div>
        </nav>

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
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
        <nav className='relative'>
            <div className='flex items-center justify-center space-x-5'>
                <Link to='/' className='z-10'>Home</Link>
                <Link to='/about' className='z-10'>About</Link>
                <Link to='/services' className='z-10'>Services</Link>
                <Link to='/contact' className='z-10'>Contact</Link>
            </div>
            <div className='absolute flex items-center justify-center mb-40 left-1/2 transform -translate-x-1/2'>
                <Link to='/'>
                    <img className='w-60 h-36 scale-[2]' src={logo} alt='logo'></img>
                </Link>
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
import React, { useState } from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'



import logo from '../src/images/logo/1 (4).png'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Services = lazy(() => import('./Services'))

//mobile resizing using CSS
const NavBar = () => {

  const [ selectedPage, setSelectedPage ] = useState({
    home: true,
    about: false,
    contact: false,
    services: false
  })
  return (
    <>
        <div className='relative z-10 h-40 overflow-hidden overflow-y-hidden bg-fixed bg-center bg-cover bg-BG'>
            <div className='absolute inset-0 bg-opacity-60 bg-color-BG '>
                <div className='flex items-center justify-center lg:space-x-8 2xl:space-x-10 font-Raleway'>
                  <button className= {selectedPage.home ?'z-20 text-white font-semibold duration-200' : 'z-20 hover:text-white font-semibold duration-200'}
                  onClick={() => {
                    setSelectedPage({
                      home: true,
                      about: false,
                      contact: false,
                      services: false
                    });
                  }}>
                    <Link to='/' className='z-20 hover:text-white'>HOME</Link>
                  </button>
                  <button className= {selectedPage.about ?'z-20 text-white font-semibold duration-200' : 'z-20 hover:text-white font-semibold duration-200'}
                  onClick={() => {
                    setSelectedPage({
                      home: false,
                      about: true,
                      contact: false,
                      services: false
                    });
                  }}>
                    <Link to='/about' className='z-20 hover:text-white'>ABOUT</Link>
                  </button>
                  <button className= {selectedPage.services ?'z-20 text-white font-semibold duration-200' : 'z-20 hover:text-white font-semibold duration-200'}
                  onClick={() => {
                    setSelectedPage({
                      home: false,
                      about: false,
                      contact: false,
                      services: true
                    });
                  }}>
                     <Link to='/services' className='z-20 hover:text-white'>SERVICES</Link>
                  </button>
                  <button className= {selectedPage.contact ?'z-20 text-white font-semibold duration-200' : 'z-20 hover:text-white font-semibold duration-200'}
                  onClick={() => {
                    setSelectedPage({
                      home: false,
                      about: false,
                      contact: true,
                      services: false
                    });
                  }}>
                    <Link to='/contact' className='z-20 hover:text-white'>CONTACT</Link>
                  </button>
                    
                   
                    
                </div>
                <div className='absolute z-10 flex items-center justify-center -mt-6 transform -translate-x-1/2 left-1/2 bg-opacity-60'>
                    <Link to='/'>
                        <img 
                          className='w-80 h-44 scale-[2]' 
                          src={logo} 
                          alt='logo'
                          onClick={() => {
                            setSelectedPage({
                              home: true,
                              about: false,
                              contact: false,
                              services: false
                            });
                          }}>
                        </img>
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
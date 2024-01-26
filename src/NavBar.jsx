import React, { useState } from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'



import logo from '../src/images/logo/1 (4).png'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Services = lazy(() => import('./Services'))

const NavBar = () => {

  const [ selectedPage, setSelectedPage ] = useState({
    home: true,
    about: false,
    contact: false,
    services: false
  })

  const onToggleMenu = () => {
    const navLinks = document.querySelector('.nav-links')
    let tag = document.getElementById("menu")
    tag.name = tag.name === "close" ? "menu" : "close"
    navLinks.classList.toggle('hidden')
  }

  const toggleOff = () => {
    const navLinks = document.querySelector('.nav-links')
    let tag = document.getElementById("menu")
    tag.name = tag.name === "menu" ? "close" : "menu"
    navLinks.classList.toggle('hidden')
  }
  //Configure mobile screening
  return (
    <>
        <div className='items-start justify-start w-1/4 h-screen bg-gray-400 sm:bg-fixed sm:bg-center sm:bg-cover sm:flex-none sm:w-screen sm:overflow-hidden sm:overflow-y-hidden sm:relative sm:z-10 sm:h-40 sm:bg-BG'>
            <div className='sm:absolute sm:inset-0 sm:bg-opacity-60 bg-color-BG sm:justify-center'>
                <div className='sm:items-center sm:justify-center sm:flex lg:space-x-8 2xl:space-x-10 font-Raleway sm:visible nav-links'>
                  <button className= {selectedPage.home ?'z-20 text-white font-semibold duration-200 ' : 'z-20 hover:text-white font-semibold duration-200'}
                  onClick={() => {
                    setSelectedPage({
                      home: true,
                      about: false,
                      contact: false,
                      services: false
                    });
                    toggleOff();
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
                    toggleOff();
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
                    toggleOff();
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
                    toggleOff();
                  }}>
                    <Link to='/contact' className='z-20 hover:text-white'>CONTACT</Link>
                  </button>
                    
                   
                    
                </div>
                <div className="flex pt-10 pl-5 text-2xl text-color-text sm:hidden">
                  <button>
                      <ion-icon name="menu" id="menu" onClick={onToggleMenu} ></ion-icon>
                  </button>
                </div>
                <div className='absolute z-10 flex items-center justify-center -mt-3 transform -translate-x-1/2 left-1/2 bg-opacity-60'>
                    <Link to='/'>
                        <img 
                          className='sm:w-80 sm:h-44 scale-[2]' 
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
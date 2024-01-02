import React from 'react'
import logo from '../src/images/logo/1 (4).png'
import { FaTiktok, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="absolute mt-80 inset-x-0 bottom-0 w-screen h-[75px] lg:h-[200px]">
      <div className='items-center justify-center w-50 h-50'>
        <img className='h-50 w-50' src={logo} alt='logo'></img>
      </div>
      <div className='flex flex-col'> 
        <h1>Follow Us on Social Media!</h1>
        <a href='https://Instagram.com/WarmHospitalityGroup' target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className='cursor-pointer'/>
        </a>
        <a href='https://Tiktok.com/WarmHospitalityGroup' target="_blank" rel="noopener noreferrer">
          <FaTiktok className='cursor-pointer'/>
        </a>
      </div>
    </footer>
    </>
  )
}

export default Footer
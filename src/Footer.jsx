import React from 'react'
import logo from '../src/images/logo/1 (4).png'
import { FaTiktok, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  //need more content 
    //privacy policy
    //terms & conditions
    //another contact thread

  return (
    <>
    <footer className="relative bg-color-BG inset-x-0 bottom-0 w-screen h-[75px] sm:h-[300px] lg:h-[350px] z-10 border-solid border-t-2">
      <div className='flex items-center justify-center'>
        <div className='w-auto'>
          <Link to='/'>
            <img className='h-52 w-68' src={logo} alt='logo'></img>
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mx-32 font-Raleway'> 
        {/* <h4 className=''>Follow Us on Social Media!</h4> */}
        <a className='flex flex-row hover:text-gray-500 w-min' href='https://Instagram.com/WarmHospitalityGroup' target="_blank" rel="noopener noreferrer">
          <a href='https://Instagram.com/WarmHospitalityGroup' target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className='cursor-pointer'></FaInstagramSquare>
          </a>
          <p className='text-sm'>
            /WarmHospitalityGroup
          </p>
        </a>
        <a className='flex flex-row hover:text-gray-500 w-min' href='https://Tiktok.com/WarmHospitalityGroup' target="_blank" rel="noopener noreferrer">
          <a href='https://Tiktok.com/WarmHospitalityGroup' target="_blank" rel="noopener noreferrer">
            <FaTiktok className='cursor-pointer'></FaTiktok>
          </a>
          <p className='text-sm'>
            /WarmHospitalityGroup
          </p>
        </a>
      </div>
    </footer>
    </>
  )
}

export default Footer
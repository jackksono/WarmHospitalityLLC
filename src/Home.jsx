import React from 'react'

import imageOne from '../src/images/stock/1.jpg'
import imageTwo from '../src/images/stock/2.jpg'

const Home = () => {
  return (
    <>
    <div className='relative bg-cover bg-center bg-BG h-screen z-0'>
      <div className='h-full absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center'>
        <div className='flex flex-row justify-center -mt-20'>
            <img className=' h-[700px]  ' src={imageOne} alt='imageOne'></img>
            <img className='h-[700px] ' src={imageTwo} alt='imageTwo'></img>
        </div>
      </div>
      
    </div>
    <div className='flex bg-color-BG h-screen'>
        <h1>Hello</h1>
    </div>
  </>
  );
}

export default Home
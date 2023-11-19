import React from 'react'

import imageOne from '../src/images/stock/1.jpg'
import imageTwo from '../src/images/stock/2.jpg'

const Home = () => {
  return (
    <div className='relative bg-cover bg-center bg-BG h-screen'>
      <div className='absolute inset-0 bg-white bg-opacity-60 flex items-center'>
        <div className='flex flex-row justify-center mt-20'>
            <img className='h-full w-2/6' src={imageOne} alt='imageOne'></img>
            <img className='h-full w-2/6' src={imageTwo} alt='imageTwo'></img>
        </div>
      </div>
    </div>
  );
}

export default Home
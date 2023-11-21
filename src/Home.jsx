import React from 'react'

import imageOne from '../src/images/stock/1.jpg'
import imageTwo from '../src/images/stock/2.jpg'

const Home = () => {
    return (
        <>
          <div className='relative min-h-screen bg-cover bg-center bg-fixed bg-no-repeat bg-BG'>
            <div className='h-full absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center'>
              <div className='flex flex-row justify-center -mt-20  z-0'>
                <img className='h-[700px] mix-blend-multiply' src={imageOne} alt='imageOne'></img>
                <img className='h-[700px] mix-blend-multiply' src={imageTwo} alt='imageTwo'></img>
              </div>
            </div>
          </div>
          <div className='flex bg-color-BG h-screen justify-center items-center relative z-10'>
            <h1>Hello</h1>
          </div>
        </>
      );
      
}

export default Home
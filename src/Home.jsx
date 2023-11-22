import React from 'react'

import imageOne from '../src/images/stock/1.jpg'
import imageTwo from '../src/images/stock/2.jpg'

const Home = () => {
    return (
        <>
          <div className='relative h-screen bg-cover bg-center bg-no-repeat bg-BG bg-fixed'>
            <div className='absolute'>
            <div className='h-full inset-0 bg-white bg-opacity-60 flex items-center justify-center fixed'>
              <div className='flex flex-row justify-center mt-60  z-0'>
                <img className='h-[850px] w-[700px] mix-blend-multiply' src={imageOne} alt='imageOne'></img>
                <img className='h-[850px] w-[700px] mix-blend-multiply' src={imageTwo} alt='imageTwo'></img>
              </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col bg-color-BG h-screen justify-center items-center relative z-10'>
            <div className='large-container flex flex-col items-center text-justify'>
                <h1>WHO WE ARE</h1>
                <p className='pb-80'>
                    Welcome to Warm Hospitality, where passion, expertise, and creativity converge to redefine the world of hospitality. 
                    With a shared love for the art of hospitality and a wealth of experience in food and beverage, we bring a unique blend of 
                    culinary mastery and event planning finesse to the forefront. Our journey through the culinary world has instilled in us an
                    unwavering commitment to excellence, a deep appreciation for flavors, and an understanding of the power of impeccable service. 
                    Now, as we embark on this exciting venture, we are poised to revolutionize the industry. Our dedication to crafting unforgettable 
                    experiences shines through in every aspect of our work, from concierge services that anticipate your every need to event planning 
                    that turns dreams into reality. Join us on a journey where hospitality knows no bounds, guided by expertise and passion.
                </p>
            </div>
          </div>
        </>
      );
      
}

export default Home
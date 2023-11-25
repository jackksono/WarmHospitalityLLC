import React, { useEffect } from 'react'

import imageOne from '../src/images/stock/4.1.jpg'
import imageTwo from '../src/images/stock/4.jpg'


import serviceOne from '../src/images/stock/1.jpg'

const Services = () => {
    useEffect(() => {
       
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const parallaxElements = document.querySelectorAll('.parallax-element');
    
          parallaxElements.forEach((element) => {
            const speed = element.dataset.speed;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
          });
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
    <div className='min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-BG'>
          <div className='fixed inset-0 flex items-center justify-center bg-color-BG bg-opacity-60'>
              <div className='flex flex-row justify-center mt-60 '>
                  <div className='parallax-element ' data-speed='0.05'>
                      <img className='h-[850px] w-[700px] mix-blend-multiply' src={imageOne} alt='imageOne' />
                  </div>
                  <div className='parallax-element' data-speed='0.05'>
                      <img className='h-[850px] w-[700px] mix-blend-multiply' src={imageTwo} alt='imageTwo' />
                  </div>
              </div>
          </div>
    </div>

    <div className='grid grid-cols-2'>
      <img src={imageOne} alt='imageOne'></img>
      <p>Tester</p>
    </div>
    </>
  )
}

export default Services
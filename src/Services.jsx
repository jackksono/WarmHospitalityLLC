import React, { useEffect } from 'react'

import imageOne from '../src/images/stock/4.1.jpg'
import imageTwo from '../src/images/stock/4.jpg'

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
    <div className=' min-h-screen bg-cover bg-center bg-no-repeat bg-BG bg-fixed'>
                <div className='inset-0 bg-color-BG bg-opacity-60 flex items-center justify-center fixed'>
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
  )
}

export default Services
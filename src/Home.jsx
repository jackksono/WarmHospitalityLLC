import React, {useEffect} from 'react'

import imageOne from '../src/images/stock/1.jpg'
import imageTwo from '../src/images/stock/2.jpg'

import Footer from '../src/Footer'

const Home = () => {

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
                            <img className='h-[850px] sm:w-[500px] 2xl:w-[700px] mix-blend-multiply' src={imageOne} alt='imageOne' />
                        </div>
                        <div className='parallax-element' data-speed='0.05'>
                            <img className='h-[850px] sm:w-[500px] 2xl:w-[700px] mix-blend-multiply' src={imageTwo} alt='imageTwo' />
                        </div>
                    </div>
                </div>
          </div>
          <div className='relative z-10 flex flex-col items-center justify-center pt-10 bg-color-BG'>
            <div className='flex flex-col items-center mx-12 text-justify font-Raleway'>
                <h1>WHO WE ARE</h1>
                <h5 className='pb-5'>Las Vegas Professionals ~ Minority Women Owned </h5>
                <p className='mx-32'>
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
       
        <div>
          <Footer></Footer>
        </div>
      </>
      );
      
}

export default Home
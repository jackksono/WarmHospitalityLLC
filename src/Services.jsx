import React, { useEffect } from 'react'

import imageOne from '../src/images/stock/Service1.jpg'
import imageTwo from '../src/images/stock/Service2.jpg'

import EventPlanning from '../src/images/services/EventPhoto.jpg'
import Premier from '../src/images/services/PremierConsulting.jpg'
import WebDevelopment from '../src/images/services/WebDevelopment.jpg'
import SocialMedia from '../src/images/services/SocialMedia.jpg'
import FBConsulting from '../src/images/services/FBConsulting.jpg'
import Footer from './Footer'

//button to each service w requested service for contact
    //Add contact form to bottom of service page 
    
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
                    <img 
                        className='h-[400px] w-[180px] object-cover mix-blend-multiply
                        sm:object-fill sm:h-[850px] sm:w-[500px] 
                        2xl:w-[700px] ' 
                        src={imageOne} 
                        alt='imageOne' />
                    </div>
                    <div className='parallax-element' data-speed='0.05'>
                    <img 
                        className='h-[400px] w-[180px] object-cover mix-blend-multiply
                        sm:object-fill sm:h-[850px] sm:w-[500px] 
                        2xl:w-[700px] ' 
                        src={imageTwo} 
                        alt='imageTwo' />
                    </div>
                </div>
            </div>
      </div>


      <div className='z-10 flex flex-col h-screen mx-12 bg-color-BG'>
        <div className='z-10 bg-color-BG'>
          <div className='z-10 flex items-center justify-center h-full mb-20 text-center bg-color-BG font-Raleway'>
            <h1>OUR SERVICES</h1>
          </div>
        </div>
        
        <div className='z-10 bg-color-BG'>
          <div className='my-10'>
            <div className='z-10 grid grid-cols-2 space-x-10 large-container bg-color-BG font-Raleway'>
              <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center'>SOCIAL MEDIA MANAGEMENT</h2>
                <p className=' bg-color-BG'>Connect with Confidence: Social Media Services unlock the full potential of your business, brand, or influence with our comprehensive offerings, covering Instagram, TikTok, Pinterest, and LinkedIn. </p>
                <p>Our Social Media Management packages empower you to take control of your platforms while ensuring structure and consistency.</p>
                {/* <p>Need captivating content for your business? </p>
                <p>Our Content Creation service has you covered, whether for one-time projects, photoshoots, or events. Elevate your social media game with our Strategy Packages, including brainstorming, content planning, monthly calendars, and trend customization for future success. </p> */}
              </div>
              <div className='flex items-center justify-center'>
                <img className='object-cover w-[682px] rounded-lg h-[450px] ' src={SocialMedia} loading='lazy' alt='imageOne'></img>
              </div>
            </div>
          </div>
        </div>
        
        <div className='z-10 bg-color-BG'>
          <div className='my-10'>
            <div className='z-10 grid grid-cols-2 space-x-10 large-container bg-color-BG font-Raleway'>
              <div className='flex items-center justify-center'>
                <img className='object-cover w-full h-full rounded-lg ' src={Premier} loading='lazy' alt='imageOne'></img>
              </div>
              
              <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center'>PREMIER HOSPITALITY CONSULTING</h2>
                <p className=' bg-color-BG'>At Warm Hospitality, we pride ourselves on delivering comprehensive and unparalleled hospitality consulting services that are tailored to your unique needs and aspirations. </p>
                <p>With years of industry expertise, our team of seasoned professionals possesses an intricate understanding of the hospitality landscape, enabling us to provide you with strategic guidance and solutions that drive excellence and profitability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='z-10 bg-color-BG'>
          <div className='my-10'>
            <div className='z-10 grid grid-cols-2 my-10 space-x-10 large-container bg-color-BG font-Raleway'>
              <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center'>EVENT MANAGEMENT</h2>
                <p className=' bg-color-BG'>At Warm Hospitality, we are not just a destination for exceptional drinks and vibrant ambiance; we are your partners in crafting unforgettable events and celebrations. Our dedicated event planning services are designed to elevate your gatherings, ensuring they are stylish, memorable, and hassle-free.</p>
                <p>We understand that every event is unique. Our goal is to bring your vision to life and create an unforgettable experience for you and your guests. Whether you're celebrating a milestone or hosting a corporate event, let us be your partner in making it truly exceptional. Contact us today to start planning your next memorable gathering.</p>
              </div>

              <div className='flex items-center justify-center'>
                <img className='object-cover w-full h-full rounded-lg ' src={EventPlanning} loading='lazy' alt='imageOne'></img>
              </div>
            </div>
          </div>
        </div>
        <div className='z-10 bg-color-BG'>
          <div className='my-10'>
            <div className='z-10 grid grid-cols-2 space-x-10 large-container bg-color-BG font-Raleway'>
              <div className='flex items-center justify-center'>
                <img className='object-cover w-full h-full rounded-lg ' src={FBConsulting} loading='lazy' alt='imageOne'></img>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center'>Food and Beverage Menu Development</h2>
                <p className=' bg-color-BG'>Our dedicated food and beverage consult at Warm Hospitality goes beyond conventional offerings, specializing in crafting bespoke menus meticulously aligned with your business brand vision.</p>
                <p>Our expert culinary team collaborates closely with clients to understand their unique identity, translating it into a curated gastronomic experience that seamlessly integrates with the brand narrative.</p>

              </div>
            </div>
          </div>
        </div>

        <div className='z-10 bg-color-BG'>
          <div className='my-10'>
            <div className='z-10 grid grid-cols-2 space-x-10 large-container bg-color-BG font-Raleway'>
              <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center'>WEB DEVELOPMENT</h2>
                <p className=' bg-color-BG'>Our custom web development services are tailored to enhance your presence and performance in the ever-evolving hospitality industry. </p>
                <p>Our team of experienced developers specializes in creating bespoke web solutions that not only showcase your brand's unique identity but also optimize user experience and functionality. </p>
                
              </div>
              <div className='flex items-center justify-center'>
                <img className='object-cover w-full h-full rounded-lg ' src={WebDevelopment} loading='lazy' alt='imageOne'></img>
              </div>
            </div> 
          </div>
        </div>

        <div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Services
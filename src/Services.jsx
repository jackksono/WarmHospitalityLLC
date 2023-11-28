import React, { useEffect } from 'react'

import imageOne from '../src/images/stock/4.1.jpg'
import imageTwo from '../src/images/stock/4.jpg'


import serviceOne from '../src/images/services/PracticeConc.jpg'

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


    <div className='z-10 flex flex-col h-screen bg-color-BG'>
      <div className='z-10 bg-color-BG'>
        <div className='z-10 flex items-center justify-center h-full mb-20 text-center bg-color-BG font-Raleway'>
          <h1>OUR SERVICES</h1>
        </div>
      </div>
      
      <div className='z-10 bg-color-BG'>
        <div className='my-10'>
          <div className='z-10 grid grid-cols-2 space-x-10 large-container bg-color-BG font-Raleway'>
            <div className='flex items-center justify-center'>
              <img className='w-full h-auto' src={serviceOne} alt='imageOne'></img>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-center'>CONCIERGE SERVICE</h1>
              <p className=' bg-color-BG'>Local Expertise: With a deep understanding of Las Vegas, our consultants have insider knowledge and connections that ensure you experience the city to the fullest.</p>
              <p>Tailored Experiences: We believe that every client is unique. We pride ourselves on delivering personalized solutions that cater to your specific needs and desires.</p>
              <p>Unparalleled Service: Our commitment to excellence means we go above and beyond to make your stay in Las Vegas unforgettable.</p>
              <p>When you choose Warm Hospitality, you're choosing to take your Las Vegas experience to the next level. Contact us today to start planning your exceptional journey through this extraordinary city.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='z-10 bg-color-BG'>
        <div className='my-10'>
          <div className='z-10 grid grid-cols-2 my-10 space-x-10 large-container bg-color-BG font-Raleway'>
            
            
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-center'>EVENT PLANNING</h1>
              <p className=' bg-color-BG'>At Warm Hospitality, we are not just a destination for exceptional drinks and vibrant ambiance; we are your partners in crafting unforgettable events and celebrations. Our dedicated event planning services are designed to elevate your gatherings, ensuring they are stylish, memorable, and hassle-free.</p>
              <p>Our courteous and attentive staff will ensure that your guests are well taken care of, from the moment they arrive until the event's conclusion.</p>
              <p>Our experienced event planners will handle all the logistics, timelines, and coordination, so you can relax and enjoy your event without worrying about the details.</p>
              <p>At Warm Hospitality, we understand that every event is unique. Our goal is to bring your vision to life and create an unforgettable experience for you and your guests. Whether you're celebrating a milestone or hosting a corporate event, let us be your partner in making it truly exceptional. Contact us today to start planning your next memorable gathering.</p>
            </div>

            <div className='flex items-center justify-center'>
              <img className='w-full h-auto' src={serviceOne} alt='imageOne'></img>
            </div>
          </div>
        </div>
      </div>

      <div className='z-10 bg-color-BG'>
        <div className='my-10'>
          <div className='z-10 grid grid-cols-2 space-x-10 large-container bg-color-BG font-Raleway'>
            <div className='flex items-center justify-center'>
              <img className='w-full h-auto' src={serviceOne} alt='imageOne'></img>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-center'>PREMIER HOSPITALITY CONSULTING</h1>
              <p className=' bg-color-BG'>At Warm Hospitality, we pride ourselves on delivering comprehensive and unparalleled hospitality consulting services that are tailored to your unique needs and aspirations. </p>
              <p>With years of industry expertise, our team of seasoned professionals possesses an intricate understanding of the hospitality landscape, enabling us to provide you with strategic guidance and solutions that drive excellence and profitability.</p>
              <p>When you're ready to grow or diversify, we offer strategic guidance on market expansion, feasibility studies, and property development to help you seize new opportunities.</p>
              <p>At Warm Hospitality, we are committed to your success, and our unwavering dedication to excellence sets us apart in the world of hospitality consulting. </p>
            </div>
          </div>
        </div>
      </div>

      <div className='z-10 bg-color-BG'>
        <div className='my-10'>
          <div className='z-10 grid grid-cols-2 space-x-10 large-container bg-color-BG font-Raleway'>
            
            
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-center'>WEB DEVELOPMENT</h1>
              <p className=' bg-color-BG'>Our custom web development services are tailored to enhance your presence and performance in the ever-evolving hospitality industry. </p>
              <p>Our team of experienced developers specializes in creating bespoke web solutions that not only showcase your brand's unique identity but also optimize user experience and functionality. </p>
              <p>Whether you need a cutting-edge booking platform, a seamless mobile app, or a website that tells your story effectively, our experts are here to bring your vision to life. </p>
              <p>With our custom web development services, you'll gain a competitive edge, increase online visibility, and provide your guests with a seamless and engaging digital experience.</p>
            </div>

            <div className='flex items-center justify-center'>
              <img className='w-full h-auto' src={serviceOne} alt='imageOne'></img>
            </div>
          </div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
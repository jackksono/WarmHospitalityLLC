import React, { useEffect } from 'react'

import imageOne from '../src/images/stock/3.1.jpg'
import imageTwo from '../src/images/stock/3.jpg'

import TeamImage from '../src/images/stock/TeamImage.jpg'

const About = () => {

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


      <div className='relative z-10 flex flex-col items-center justify-center pt-40 min-h-max bg-color-BG'>
            <div className='flex flex-col items-center text-justify large-container font-Raleway'>
                <h1 className=''>ABOUT US</h1>
                <div className='grid grid-cols-3 gap-8 pt-20'>
                  <div className='flex flex-col items-center'>  
                    <h2 className='relative text-center'>MICHELLE TRAN</h2>
                    <label className='absolute pt-16 font-bold text-gray-400'>MANAGING PARTNER</label>
                    <div className='pt-5 space-y-5'>
                      <p>Michelle boasts over a decade of profound expertise in the realm of food and beverage, underpinned by a steadfast 
                        commitment to the principles of hospitality. Her dedication to the art of menu creation is equaled only by her unwavering 
                        prioritization of elevating the guest experience. Michelle's specialization lies in the intricate domains of business
                        operations and strategic marketing, culminating in the establishment of Warm Hospitality—an entity dedicated to empowering
                          businesses in their pursuit of profit maximization, the creation of comprehensive hospitality training materials, the 
                          refinement of operational processes, and the nurturing of culinary excellence.
                      </p>
                      <p>Having diligently cultivated an extensive network of industry peers and experts over the years, Michelle is uniquely 
                        positioned to assist her clients in surmounting operational challenges and strategically capitalizing on a spectrum of 
                        creative possibilities, all while adhering to the highest standards of professionalism and excellence.
                      </p>
                    </div>
                    
                  </div>
                  <img className='lg:mt-10' src={TeamImage} alt='TeamPic'></img>

                  <div className='flex flex-col items-center'>
                    <h2 className='relative text-center'>DORIS CALDERON</h2>
                    <label className='absolute pt-16 font-bold text-center text-gray-400'>MANAGING PARTNER</label>
                    <div className='pt-5 space-y-5'>
                      <p>
                        Doris commenced her remarkable journey in the hospitality sector at the esteemed Wynn Las Vegas in 2016, where she was 
                        exposed to the pinnacle of service excellence. This transformative experience ignited her profound passion for the dynamic
                        realm of hospitality. Doris proceeded to dedicate several years to honing her expertise in Food and Beverage administration
                        at Wynn, and in 2019, she embarked on an impactful role as part of the opening team for Resorts World Las Vegas.
                      </p>
                      <p>
                        During this transformative period, Doris diligently pursued her academic aspirations, culminating in the attainment of her 
                        bachelor's degree in Project and Business Management. Her commitment to excellence was further showcased in her role as 
                        General Manager at the renowned Cafe Lola, where she played a pivotal role in its operations. Doris's trajectory in the 
                        industry continues to evolve, marked by her unwavering dedication to the art of hospitality and her impressive record of 
                        contributions to operational excellence over the years.
                      </p>
                    </div>
                    
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
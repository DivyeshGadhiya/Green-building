// "use client"
// import { useEffect, useState } from "react";
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
// import Image from "next/image";

// const Hero = () => {
//   const autoPlay = true;
 
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   useEffect(() => {
//     let sliderInterval;
//     if (autoPlay) {
//       sliderInterval = setInterval(nextSlide, 4500);
//     }
//     return () => {
//       clearInterval(sliderInterval);
//     };
//   }, [autoPlay]);

//   return (
//     <section
//       id="home"
//       className="relative z-10 overflow-hidden pt-[115px] bg-white"
//     >
//       <div className="relative w-full mx-auto">
//         <div className="overflow-hidden relative  shadow-lg">
//           <Image
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex}`}
//             height={1500}
//             width={2000}
//             className="w-screen h-screen max-sm:h-[200px] transition duration-500 ease-in-out transform max-sm:object-center"
//           />
//           <div className="absolute  top-1/2 left-0 transform -translate-y-1/2 p-4 pl-16 bg-black bg-opacity-50 text-white w-[90%] sm:w-[75%] md:w-[60%] lg:w-[45%]">
//             <h2 className="text-2xl text-green-300 pb-3 sm:text-xl md:text-5xl lg:text-6xl font-bold">{content[currentIndex].title}</h2>
//             <p className="text-sm sm:text-md md:text-xl">{content[currentIndex].description}</p>
//           </div>
//         </div>
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client"
import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

export default function Hero() {
  const images = [
    '/images/hero/slider_img_1.jpg',
    '/images/hero/slider_img_2.jpg',
    '/images/hero/slider_img_3.jpg',
  ];

  const content = [
    {
      title: 'Beautiful Architecture',
      description: `Explore stunning architectural designs from around the world. Discover the intricate details and historical significance behind iconic buildings.`,
    },
    {
      title: 'Scenic View',
      description: `Enjoy breathtaking views of natural landscapes and urban scenes. Immerse yourself in the beauty of untouched wilderness and dynamic cityscapes.`,
    },
    {
      title: 'Green Building',
      description: `Learn about sustainable building practices and eco-friendly architecture. Explore how green buildings contribute to a healthier environment and lower carbon footprint.`,
    },
  ];

  const splideOptions = {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 2500,
    pagination: false,
    arrows: true,
  };

  return (
    <section
      id=""
      className="relative z-10 overflow-hidden pt-[120px] bg-white"
    >
      <Splide aria-label="My Favorite Images" options={splideOptions}>
        {images.map((image, index) => (
          <SplideSlide key={index} className="relative">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              height={1500}
              width={2000}
              className="w-screen h-screen max-sm:h-[300px] transition duration-500 ease-in-out transform max-sm:object-center" 
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 pl-16 text-white w-[90%] sm:w-[75%] md:w-[60%] lg:w-[45%] max-sm:w-[80%]">
              <h2 className="text-2xl text-green-400 sm:text-xl md:text-5xl lg:text-5xl font-bold max-sm:text-[15px] max-sm:pb-1">{content[index].title}</h2>
              <hr className='border-white my-3' />
              <p className="text-sm sm:text-md md:text-xl max-sm:text-[12px]">{content[index].description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}


// components/Portfolio.tsx
import React, { FC, useState, useEffect } from 'react';

interface PortfolioImage {
  src: string;
  alt: string;
}

const Portfolio: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images: PortfolioImage[] = [
    { src: 'images/boondocks.png', alt: 'Tattoo 1' },
    { src: 'images/dragon.png', alt: 'Tattoo 2' },
    { src: 'images/frsnchise.png', alt: 'Tattoo 3' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div id="portfolio" className="section max-w-4xl mx-auto my-20 bg-[#c89d7c] p-6 rounded-lg shadow-md montserrat">
      <h2 className="text-2xl text-white text-center mb-4">Portfolio</h2>
      <div className="slideshow-container relative overflow-hidden">
        <div 
          className="slideshow-wrapper flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide min-w-full">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
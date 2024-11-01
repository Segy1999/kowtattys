import React, { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import BookNowButton from './BookNowButton';
import BookNowForm from './BookNowForm';

gsap.registerPlugin(TextPlugin);

interface HeroProps {
  isOpen: boolean;
  handleOpenBookNow: () => void;
  handleCloseBookNow: () => void;
}

const Hero: FC<HeroProps> = ({ isOpen, handleOpenBookNow, handleCloseBookNow }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = 'KowTattys';
    const textArray = text.split('');
    
    const textTimeline = gsap.timeline({ 
      repeat: -1,
      onRepeat: () => {
        // Reset the text completely before starting again
        gsap.set(textRef.current, { text: '' });
      }
    });

    // Typing animation with varying character speeds
    textArray.forEach((char, index) => {
      textTimeline.to(textRef.current, {
        duration: index === textArray.length - 1 ? 0.7 : 0.3, // Slower last character
        text: textArray.slice(0, index + 1).join(''),
        ease: "power1.inOut"
      });
    });

    // Pause at full text
    textTimeline.to({}, { duration: 4 });

    // Erasing animation with a more natural feel
    textTimeline.to(textRef.current, {
      duration: 1,
      text: '',
      ease: "power2.inOut",
      onStart: () => {
        // Add a subtle fade-out effect
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0.7,
            scale: 0.98,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      },
      onComplete: () => {
        // Reset container styles
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power1.out"
          });
        }
      }
    });

  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen transition-all duration-300"
    >
      <div className='typewriter-container matemasie-regular'>
        <span 
          ref={textRef} 
          className="text-5xl font-bold text-[#c89d7c] inline-block"
        />
      </div>
      <BookNowButton handleOpenBookNow={handleOpenBookNow} />
      <BookNowForm isOpen={isOpen} onClose={handleCloseBookNow} />
    </div>
  );
};

export default Hero;
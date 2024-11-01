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

    // Typing animation
    textArray.forEach((char, index) => {
      textTimeline.to(textRef.current, {
        duration: 0.5,
        text: textArray.slice(0, index + 1).join(''),
      });
    });

    // Pause at full text
    textTimeline.to({}, { duration: 5 });

    // Erasing animation (chalkboard-like effect)
    textTimeline.to(textRef.current, {
      duration: 1,
      text: '',
      ease: "power1.inOut",
      onStart: () => {
        // Add a chalk-like erasing effect
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0.5,
            duration: 1,
            repeat: 1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      }
    });

  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen"
    >
      <div className='typewriter-container matemasie-regular'>
        <span 
          ref={textRef} 
          className="text-5xl font-bold text-[#c89d7c]" 
        />
      </div>
      <BookNowButton handleOpenBookNow={handleOpenBookNow} />
      <BookNowForm isOpen={isOpen} onClose={handleCloseBookNow} />
    </div>
  );
};

export default Hero;
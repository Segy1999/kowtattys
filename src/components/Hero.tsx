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
  const eraserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = 'KowTattys';
    
    const textTimeline = gsap.timeline({ repeat: -1 });
    const eraserTimeline = gsap.timeline({ repeat: -1 });

    // Text typing animation
    textTimeline
      .to(textRef.current, {
        duration: 2,
        text: text,
        ease: "none"
      })
      .to({}, { duration: 3 }); // Pause at full text

    // Eraser animation
    if (eraserRef.current) {
      eraserTimeline
        .fromTo(
          eraserRef.current, 
          { 
            left: '-170%',
            opacity: 1
          },
          {
            duration: 2,
            left: '-30%',
            ease: "power1.out",
            onComplete: () => {
              // Reset text when eraser animation completes
              if (textRef.current) {
                gsap.set(textRef.current, { text: '' });
              }
            }
          }
        );
    }

    // Sync timelines
    textTimeline.sync(eraserTimeline);

  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div 
        className="relative w-[400px] mx-auto my-[125px] p-2 overflow-hidden"
        style={{ position: 'relative' }}
      >
        <span 
          ref={textRef} 
          className="relative z-[1] text-5xl font-bold text-[#c89d7c]"
        />
        <div 
          ref={eraserRef}
          className="absolute left-[-30%] top-2 h-full w-[130%] rounded-[135px/65px] z-[2]"
          style={{
            boxShadow: '0 0 100px 50px rgba(255, 255, 255, .8)',
            background: 'radial-gradient(#fff, rgba(255, 255, 255, .95))',
            borderRadius: '135px/65px'
          }}
        />
      </div>
      <BookNowButton handleOpenBookNow={handleOpenBookNow} />
      <BookNowForm isOpen={isOpen} onClose={handleCloseBookNow} />
    </div>
  );
};

export default Hero;
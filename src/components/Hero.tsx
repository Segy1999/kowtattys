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

  useEffect(() => {
    const text = 'KowTattys';
    const textArray = text.split('');
    const textTimeline = gsap.timeline({ repeat: -1 });

    textArray.forEach((char, index) => {
      textTimeline.to(textRef.current, {
        duration: 0.5,
        text: textArray.slice(0, index + 1).join(''),
      });
    });

    textTimeline.to({}, { duration: 5 }); // add 5 seconds delay before repeating
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='typewriter-container matemasie-regular'>
        <span ref={textRef} className="text-5xl font-bold" />
      </div>
      <BookNowButton handleOpenBookNow={handleOpenBookNow} />
      <BookNowForm isOpen={isOpen} onClose={handleCloseBookNow} />
    </div>
  );
};

export default Hero;
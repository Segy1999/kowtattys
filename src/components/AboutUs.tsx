// components/AboutUs.tsx
import React, { FC } from 'react';

const AboutUs: FC = () => {
  return (
    <div id="about-us" className="oswald section max-w-4xl mx-auto my-20 bg-[#c89d7c] p-6 rounded-lg shadow-md">
      <h2 className="text-4xl mb-4">About Us</h2>
      <p className="text-2xl mb-4">"Hi, my name is ____. I've been an artist for __ years."</p>
    </div>
  );
};

export default AboutUs;
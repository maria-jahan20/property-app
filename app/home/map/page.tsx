"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// NOTE: Since I can't access your uploaded files directly, 
// I'll assume you have a single map image (the bright one) 
// and we'll use a CSS filter for the dark/unloaded state.

// 1. Placeholder for the dark logo/icon in the center
const JcxLogo = () => (
  // This is a placeholder for the JCX logo image in the center.
  // Replace the inline SVG with your actual logo component or Image
  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
    <span className="text-xl font-bold text-indigo-700">JCX</span>
  </div>
);

export default function InteractiveMapSection() {
  // State to manage the hover effect (and simulate the 'unloaded' state)
  const [isHovered, setIsHovered] = useState(false);

  
  // NOTE on Image: In a real scenario, the "loaded" map would be the interactive
  // Google Map embed, but here we simulate it with the bright image.

  return (
    <section 
      className="w-full h-[600px] overflow-hidden bg-black" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full cursor-pointer">
        
        {/* The Base Map Image (Simulates the loaded map) */}
        {/* We use the Next.js Image component for optimization */}
        <Image
          src='/images/homeImages/map.png'
          alt="Map of Dhaka"
          fill={true} // Image fills the parent div
          style={{ 
            objectFit: 'cover', 
            // Optional: You could use the CSS filter to simulate the 
            // dark map (screenshot 1) if you only have one image.
            // filter: isHovered ? 'brightness(0.6) grayscale(0.5)' : 'none',
            transition: 'filter 0.3s ease',
          }}
        />

        {/* The Dark Overlay and Content Wrapper */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500`}
        >
          {/* Semi-transparent Dark Layer (The fading effect) */}
          <div 
            className={`absolute inset-0 bg-black/70 transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0' 
            }`}
          ></div>
          
          {/* The Content: Logo and Text */}
          <div 
  className={`relative z-10 flex flex-col items-center justify-center text-white transition-opacity duration-500 ${
    isHovered ? 'opacity-100' : 'opacity-0'
  }`}
>
  <button  
    className="mt-4 px-6 py-2 border border-white rounded-md text-white text-sm tracking-widest transition-colors duration-300 hover:bg-white hover:text-blue-600"
  >
    CLICK TO LOAD THE MAP
  </button>
</div>

        </div>

      </div>
    </section>
  );
}
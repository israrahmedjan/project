'use client';

import { useState } from 'react';

export default function Ticker() {
  const [speed, setSpeed] = useState('animate-marquee-slow');

  return (

//     <div
//     className="overflow-hidden whitespace-nowrap bg-gray-50 py-4"
//     onMouseEnter={() => setSpeed('animate-marquee-fast')}
//     onMouseLeave={() => setSpeed('animate-marquee-slow')}
//   >
    <div
      className="overflow-hidden whitespace-nowrap bg-gray-50 py-4"
      onMouseEnter={() => setSpeed('animate-marquee-slow')}
      onMouseLeave={() => setSpeed('animate-marquee-slow')}
    >
      <div className={`inline-block ${speed}`}>
        <span className="mx-8 text-primary text-base font-normal">There are many variations of passages of 
            
            Lorem Ipsum available, but the majority have suffered alteration in some form</span>
        <span className="mx-8 text-base font-normal">It is a long established fact that a reader will be distracted by the readable content of a page when looking</span>
        <span className="mx-8 text-base font-normal">de Finibus Bonorum et Malorum" (The Extremes of Good )"</span>
        <span className="mx-8 text-base font-normal">Latin words, combined with a handful of model sentence structures</span>
      </div>
    </div>
  );
}

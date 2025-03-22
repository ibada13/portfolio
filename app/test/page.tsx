'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import nap from './napoleon.png';
import thut from './pharoh.png';
import khalid from './khalid.png';
import julus from './julus.png';
import erwin from './erwin.png';

const figures = [
  { name: 'Napoleon Bonaparte', description: 'French Emperor & Military Leader', image: nap },
  { name: 'Thutmose III', description: 'Greatest Warrior Pharaoh of Egypt', image: thut },
  { name: 'Khalid ibn al-Walid', description: 'Greatest Muslim General', image: khalid },
  { name: 'Julius Caesar', description: 'Roman General & Dictator', image: julus },
  { name: 'Erwin Rommel', description: 'German Field Marshal', image: erwin }
];

export default function HistoricalTimeline() {
  const [index, setIndex] = useState(0);
  const figureRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setIndex((prev) => (prev + 1) % figures.length),
    });

    timeline.to(figureRef.current, { opacity: 1, duration: 1 })  
            .to(figureRef.current, { opacity: 0.3, duration: .9, repeat: 5, yoyo: true })  
            .to(figureRef.current, { opacity: 0, duration: 2, delay: 2 }); 

  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r  text-white p-10">
      <div className="relative w-full h-64 flex flex-col items-center" ref={figureRef} style={{ opacity: 0 }}>
        <div className="text-3xl hidden sm:block font-bold">{figures[index].name}</div>
        <div className="mt-2 text-lg hidden sm:block italic text-yellow-400">{figures[index].description}</div>
        <Image src={figures[index].image} alt={figures[index].name} width={256} height={256} className="mt-4 rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

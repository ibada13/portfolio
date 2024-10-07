'use client'
import React, { useEffect } from 'react';
import { cardData } from './lib/Skills&projects'; 
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const Skil = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#skillbox",
      start: "top top",         
      end: "120% bottom",
      pin: "#left",        
      pinSpacing: true,   
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div id="skillbox" className="min-h-screen w-full p-2 flex ">
      <div id="left" className="flex w-1/2 justify-center items-center h-screen ">
        <h1 id="ptc" className="uppercase text-white text-center">
          Programming Toolbox <span className="">&</span> Certs
        </h1>
      </div>

      {/* Card Grid */}
      <div id='right' className="container mx-auto flex-grow w-1/2">
        <div className="flex flex-col">
          {cardData.map((card, idx) => (
            <div key={idx} id={`box-${idx}`}>
              <div className="mt-64 p-3 flex flex-col justify-center items-center shadow-custom  bg-dark rounded-lg">
                {card.icon}
                <div className="uppercase text-center">
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

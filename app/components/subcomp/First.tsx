'use client'
import React, { useEffect } from 'react';
import { BsGithub, BsWhatsapp } from 'react-icons/bs'
import { SiLichess } from "react-icons/si";
import { gsap, Expo } from 'gsap';
import { Typewriter } from 'react-simple-typewriter'
import ghidraicon from './ghidra.256x256.png'
import main from './coding-svgrepo-com.svg';
import Image from 'next/image';

export const First = () => { 
    const words = ["youcef", "A Web-Developer", "A University Student", "Human", "Malware-Developer"]

    useEffect(() => {
        const tl = gsap.timeline();
        const duration = 1.5; // Total duration for each animation step
  
        tl.to('#pop', { opacity: 0.7, ease: Expo.easeInOut, rotateX: 360, scale: 1.1, duration, delay: 0.1 })
          .to('#pop', { opacity: 0.5, scale: 1.0, duration: 0.3 })
          .to('#pop', { rotateY: -360, opacity: 0.7, scale: 1.1, duration, ease: Expo.easeInOut }, '+=0.2')
          .to('#pop', { opacity: 0.5, scale: 1.0, duration: 0.3 })
          .to('#pop', { rotateZ: 360, opacity: 0.7, scale: 1.1, duration, ease: Expo.easeInOut }, '+=0.2')
          .to('#pop', { opacity: 0.5, scale: 1.0, duration: 0.3 })
          .repeat(-1);
    }, []);
    
    return (
        <>
            {/* Main icon animation */}
            <div id="popo" className="flex overflow-hidden justify-center items-center absolute inset-0 p-2">
                <div className="shadow-lg">
                    <Image src={ghidraicon} id="pop" alt="" />
                </div>
            </div>

            {/* Header with navigation and icons */}
            <div className="absolute top-0 w-full h-1/4 flex justify-end items-center z-20">
                <div className="w-full h-3/4">
                    <div className="w-full h-1/2 hidden justify-center items-center">
                        <div className="flex justify-around w-3/4 ">
                            <h6 className="text-white cursor-not-allowed">ask youcef</h6>
                            <h6 className="text-white cursor-not-allowed">request a service</h6>
                            <h6 className="text-white cursor-not-allowed">العربية</h6>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex justify-center items-center">
                        <div className="flex justify-around w-3/4">
                            <a href="https://github.com/ibada13" target="_blank" rel="noreferrer" className="mx-2">
                                <BsGithub className="text-white text-2xl" />
                            </a>
                            <a href="https://lichess.org/@/ibada" target="_blank" rel="noreferrer" className="mx-2">
                                <SiLichess className="text-white text-2xl" />
                            </a>
                            <a href="https://wa.me/213559781806" target="_blank" rel="noreferrer" className="mx-2">
                                <BsWhatsapp className="text-green-500 text-2xl" />
                            </a>
 
                        </div>
                    </div>
                </div>
            </div>

            {/* Under maintenance banner */}
            <div className="hidden w-full absolute inset-0 bg-red-400 bg-opacity-80 text-6xl uppercase text-center  justify-around items-center">
                this website is under maintenance
                <Image className="bg-opacity-100" width={50} src={main} alt="" />
            </div>

            {/* Main content area */}
            <div className="h-screen flex items-center justify-center ">
                <div className="w-full h-1/2 flex items-start">
                    <div className="w-full flex flex-col justify-center items-start px-4  h-full">
                        <div className="flex items-end mb-4  flex-grow w-full ">
                            <h1 className="text-white text-4xl z-20">
                                <span className="text-green-500">:~$</span> Hello World
                            </h1>
                        </div>
                        <div className="flex items-start flex-grow">
                            <h1 className="text-white text-4xl z-20">
                                <span className="text-green-500">:~$</span> I&apos;m{' '}
                                <Typewriter
                                    loop={0}
                                    cursor
                                    cursorColor="#00ff00"
                                    words={words}
                                    cursorStyle="_"
                                />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

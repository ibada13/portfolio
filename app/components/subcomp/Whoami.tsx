'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ColorAnimation, moveXAnimation, moveYAnimation } from "./lib/animation";

export const Whoami = () => { 
gsap.registerPlugin(ScrollTrigger)

    const info = ["youcef,", "algerian,", "university student,","21 years old,"," front-end web-developer,"," malware developer"]

    useEffect(() => { 
        // moveXAnimation("#ls");
        moveXAnimation("#qm", 200, "#st","top center" , "bottom center");
        moveXAnimation("#info-0", 200, "#nd","50% center" , "bottom center", "#rd");
        moveYAnimation("#info-1", -300 , "#nd","50% center" , "bottom center","#rd");
        moveYAnimation("#info-2", 300, "#nd","50% center" , "bottom center", "#rd");
        moveXAnimation("#info-4", -200, "#nd","50% center" , "bottom center", "#rd");
        ColorAnimation("#info-5","#000000","#00ff00" , "#nd " , "bottom center" , "bottom center","#rd")

    },[])
    return (
        <div id="st" className="h-screen bg-[#070606] text-4xl" style={{zIndex:2}}>
    <div id="nd" className="h-1/4 w-full  flex   ">
                <div className="flex-grow flex items-center justify-end ">
                    
                <h1 id="cd"  className="text-white uppercase text-center text-6xl p-2">
                    who am i
                </h1>
                </div>
                <div className="flex-grow flex justify-start items-center ">

                <h1   id="qm" className="text- text-6xl"> ? </h1>
                </div>
    </div>
    <div id="rd" className="h-3/4 w-full flex justify-center items-center">
                <div className="h-3/4 flex flex-wrap justify-center items-center uppercase">
                    {info.map((e,index) => (
                        <h4 id={`info-${index}`} key={index} className="inline-block mx-1 my-1 text-xl ">
                            {e}</h4>
                    ))}
        </div>
    </div>
</div>

    );
};

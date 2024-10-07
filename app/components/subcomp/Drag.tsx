'use client'
import React, { useState, useEffect } from "react";
import Cmd from './Cmd'
const Draggable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHide, setIsHide] = useState<string | null>("right");
  const CMD :string = "CMD";

  let divWidth: number, divheight: number; 
  const center_div = () => { 
    const windowWidth = window.innerWidth;
     divWidth =  0.9*windowWidth;
    const windowHeight = window.innerHeight;
     divheight = windowHeight * 0.8;
    setPosition({
      x: (windowWidth - divWidth) / 2,
      y: (windowHeight - divheight) /2, 
    });
  }
  useEffect(() => {
    console.log("test")
    center_div();
    const cmd_animation = () => { 
      const c = document.getElementsByClassName("c") as HTMLCollectionOf<HTMLParagraphElement>;
      let i = 0;
      
      const animation = setInterval(() => { 
        // Revert the previous element (i-1) to normal styles
        if (i > 0) {
          c[i - 1].classList.replace("text-gl", "text-white");
          c[i - 1].classList.remove("text-xl", "text-2xl");
        } else {
          // Handle the case when i is 0 to avoid accessing c[-1]
          c[c.length - 1].classList.replace("text-gl", "text-white");
          c[c.length - 1].classList.remove("text-xl", "text-2xl");
        }
    
        // Apply new styles to the current element (i)
        c[i].classList.replace("text-white", "text-gl");
        c[i].classList.add("text-xl", "text-2xl");
        
        // Increment index and wrap around
        i = (i + 1) % c.length;
      }, 1000);
      
      return () => clearInterval(animation);
    }
    
    cmd_animation();
    const handleResize = () => {

      const newX = Math.min(position.x, window.innerWidth - divWidth);
      setPosition((prev) => ({ x: newX, y: prev.y })); 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, );

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = e.type === "mousedown" ? (e as React.MouseEvent).clientX : (e as React.TouchEvent).touches[0].clientX;
    const clientY = e.type === "mousedown" ? (e as React.MouseEvent).clientY : (e as React.TouchEvent).touches[0].clientY;

    setIsDragging(true);
    document.body.style.overflowX = "hidden";
    setOffset({
      x: clientX - position.x,
      y: clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (isDragging) {
      const clientX = e.type === "mousemove" ? (e as MouseEvent).clientX : (e as TouchEvent).touches[0].clientX;
      const clientY = e.type === "mousemove" ? (e as MouseEvent).clientY : (e as TouchEvent).touches[0].clientY;

      const newX = Math.min(Math.max(0, clientX - offset.x), window.innerWidth - 128); 

      setPosition(() => {
        const newY = clientY - offset.y;//nothing
        return { x: newX, y: newY };
      });
      console.log(position)
      const onLeftEdge = position.x === 0;
      const onRightEdge = position.x + 0.9*window.innerWidth >= window.innerWidth ; ;
      console.log(window.innerWidth - divWidth)
      if (onLeftEdge) {
        setIsHide("left");
        setIsDragging(false);
      } else if (onRightEdge) {
        setIsHide("right");
        setIsDragging(false);

      }
    }
  };

  const handleHideDiv = () => {
    setIsHide(null);
    center_div();
    const input = document.getElementById("input") as HTMLInputElement
    input.focus()
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.overflowX = "auto";
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => handleMouseMove(e);
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  },[isDragging]);

  return (
    <div
      className="w-full "
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onMouseMove={()=>handleMouseMove} 
    >
      <div
        className={`fixed z-50   text-white  cursor-${isDragging ? 'grabbing' : 'grab'} transition-transform duration-100 ${
          isHide ? "hidden" : "block"
        }`}
        style={{
          top: `${position.y}px`,
          left:  `${position.x}px`,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <Cmd setIsHide={ setIsHide} />
      </div>

      <div
        onClick={handleHideDiv}
        className={`bg-inherit border-2 cursor-pointer border-green-400 text-green-400 w-auto min-w-16 h-auto min-h-4 fixed text-center m-2  rounded-md z-50 ${
          isHide ? (isHide === "left" ? "left-0" : "right-0") : "hidden"
        }`}
        style={{
          top: position.y + 32,
          transform: "rotate(90deg) translateY(-50%)",
        }}
      >
        {CMD.split("").map((e, i) => { 
          return <span key={`k-${i}`} className="text-white c text-xl transition-all duration-500  " id={`c`}>{e}</span>
        })}
      </div>
    </div>
  );
};

export default Draggable;

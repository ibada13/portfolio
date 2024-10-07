'use client'
import React, { useEffect } from "react";
import "./css/quot.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export const Quot = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    gsap.to("#do", {
      scrollTrigger: {
        trigger: "#maindiv",
        toggleActions: "restart reverse restart reverse",
        start: "top center",
        end: "100% center",
        pinSpacing:false,
      },
      opacity: 1,
      duration: 2,
      
    });
  });

  return (
    <div
      id="maindiv"
      className="h-screen flex justify-center items-center"
      style={{ backgroundColor: "#070606" }}
    >
      <div className="specialh1 ">
        <blockquote
          className="blockquote text-white text-center "
          id="do"
          style={{ opacity: 0 }}
        >
          <p className="m-3 text-4xl">
            {" "}
            The best way to predict the future is to invent it
          </p>
          <footer className="blockquote-footer text-2xl">Someone famous </footer>
        </blockquote>
      </div>
    </div>
  );
};

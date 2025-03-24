'use client';
import React, { useEffect, useState } from "react";
import "./css/quot.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getRandomQuote } from "./lib/function"; 
export const Quot = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [quote, setQuote] = useState({ quote: '', whoSaidIt: '' });
  useEffect(() => {
  const randomquote = getRandomQuote();
    setQuote(randomquote)
    gsap.to("#do", {
      scrollTrigger: {
        trigger: "#maindiv",
        toggleActions: "restart reverse restart reverse",
        start: "top center",
        end: "100% center",
        pinSpacing: false,
      },
      opacity: 1, 
      duration: 2, 
    });
  }, []); 

  return (
    <div
      id="maindiv"
      className="h-screen flex justify-center items-center"
      style={{ backgroundColor: "#070606" }}
    >
      <div className="specialh1">
        <blockquote
          className="blockquote text-white text-center"
          id="do"
          style={{ opacity: 0 }}
        >
          <p className="m-3 text-4xl">{quote.quote}</p>
          <footer className="blockquote-footer text-2xl text-green-400">
            {quote.whoSaidIt}
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

'use client';
import { Quot } from './subcomp/Quot';
// import { Emailsender } from './subcomp/Email';
import { Con } from './subcomp/Conatc';
import { Whoami } from './subcomp/Whoami';
import { Skil } from './subcomp/Skills';
import { First } from './subcomp/First';
import Draggable from './subcomp/Drag';
import Lenis from 'lenis';
import Projects from './subcomp/Projects';
import './App.css';
import { useEffect } from 'react';
const App = () => {
  useEffect(() => { 
    const lenis = new Lenis()
    
    
    
    function raf(time:DOMHighResTimeStamp) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  },[])

  return (
    <div className='h-100 w-100 position-relative'>

    
      <First />
      <Whoami />
      <Skil />
      <Projects />
      <Quot />
      {/* <Emailsender /> */}
      <Con />
      {/* <Cmd /> */}
      <Draggable  />

    </div>
  );
  
  
  
}
export default App;

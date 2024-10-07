'use client'
import { useEffect } from "react";
import { FrontEndProject ,BackEndProjects } from "./lib/Skills&projects";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Projects = () => { 
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => { 
      const trigger =   ScrollTrigger.create({
            trigger: "#projectsbox",
            start: "top top",
            end: "120% bottom",
            pin: "#middle",
            pinSpacing: true,
        })
        return () => {
            trigger.kill()
        }
    },[])
    return (
        <div className="min-h-screen p-2 w-screen flex flex-row" id="projectsbox">
            <div className="flex-grow h-full " id="left">
            {BackEndProjects.map((bp, index) => (
  <a
    key={index}
    className="flex flex-col justify-center items-center  w-full p-4 shadow-lg rounded-lg mb-6 mt-52"
    href={bp.link}
    target="_blank"
  >
    {/* Main Icon and Title */}
    <div className="flex flex-col justify-center items-center  p-4 rounded-lg w-full text-center">
      <div className="text-4xl mb-2">{bp.mainicon}</div>
      <h3 className="text-xl font-semibold">{bp.title}</h3>
    </div>

    {/* Technologies Used */}
    <div className="flex flex-col mt-4 w-full">
      <span className="text-gray-600 font-medium mb-2">Made with:</span>
      <div className="flex flex-row flex-wrap gap-2 justify-around ">
        {bp.techs.map((tech, techIndex) => (
          <div
            key={techIndex}
            className="flex justify-center items-center  pt-2"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  </a>
))}

            </div>
            <div className="w-1/3 h-screen  flex flex-col justify-around items-center " id="middle">
                <div className=" flex-grow flex flex-col justify-center items-center space-y-2">
                    <h1 className="uppercase text-2xl">Front-end projects</h1>
                    <FaArrowRight size={50} color="#00ff00"/>
                </div>
                <div className=" flex-grow flex flex-col  justify-center items-center space-y-2">
                    <FaArrowLeft size={50} color="#00ff00"/>
                    <h1 className="uppercase text-2xl">Back-end projects</h1>
                </div>

            </div>
            <div className="flex-grow h-full flex flex-row gap-52" id="right">
            {FrontEndProject.map((fp, index) => (
  <a
                    key={index}
                    className="flex flex-col justify-center items-center  w-full p-4 shadow-lg rounded-lg mb-6 mt-96"
                    href={fp.link}
                    target="_blank"
  >
    {/* Main Icon and Title */}
    <div className="flex flex-col justify-center items-center  p-4 rounded-lg w-full text-center">
      <div className="text-4xl mb-2">{fp.mainicon}</div>
      <h3 className="text-xl font-semibold">{fp.title}</h3>
    </div>

    {/* Technologies Used */}
    <div className="flex flex-col mt-4 w-full">
      <span className="text-gray-600 font-medium mb-2">Made with:</span>
      <div className="flex flex-row flex-wrap gap-2 justify-around ">
        {fp.techs.map((tech, techIndex) => (
          <div
            key={techIndex}
            className="flex justify-center items-center  pt-2"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  </a>
))}

            </div>
            
        </div>
    );


}


export default Projects
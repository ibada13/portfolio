'use client'
import React from 'react'
import {  FaLaravel } from 'react-icons/fa'
import {BiLogoDjango} from 'react-icons/bi'
import { GiBouncingSword ,GiTechnoHeart} from "react-icons/gi";
import { RiNextjsFill, RiNotionFill, RiTailwindCssFill } from 'react-icons/ri'
import { FaNoteSticky, FaTableCells } from 'react-icons/fa6'
import { TbUniverse } from "react-icons/tb";
interface Project { 
    mainicon: JSX.Element, 
    title: string, 
    techs: JSX.Element[],
    link:string ,
}
const color={
    
    evilexpert : '#730073',
    cssbleu: '#0074e4',
    reactcolor: '#61DBFB',
    htmlcolor: '#e34c26',
    djangocolor: '#187F58',
    tscolor: '#007acc',
    jscolor: '#F0DB4F',
    pythoncoloe: '#306998',
    impred: '#ed2939',
    bootcolor: '#563d7c',
    ciscocolor: '#00bceb',
    microcolor: '#00ADEF',
    tailwind: "#06B6D4",
    laravel:"#f05340"
}
const techs = {
    NextJs: <RiNextjsFill className="animate-pulse drop-shadow-[0_0_20px_white] brightness-200" size={75} color="white" />,
    Django: <BiLogoDjango className="animate-pulse drop-shadow-[0_0_20px_#187F58] brightness-200" size={75} color={color.djangocolor} />,
    Tailwind: <RiTailwindCssFill className="animate-pulse drop-shadow-[0_0_20px_#06B6D4] brightness-200" size={75} color={color.tailwind} />,
    Laravel: <FaLaravel className="animate-pulse drop-shadow-[0_0_30px_#f05340] brightness-200" size={75} color={color.laravel} />,
}


export const BackEndProjects: Project[] = [
    {
        mainicon:<GiBouncingSword />,
        title: "Hussam_Al-Hikma",
        techs: [techs.NextJs, techs.Tailwind, techs.Laravel],
        link :"https://github.com/ibada13/Hussam_Al-Hikma",
    },
    {
        mainicon: <RiNotionFill />,
        title:"Notion Api",
        techs: [techs.NextJs, techs.Tailwind],
        link:"https://github.com/ibada13/notion-api"
    }, {
        mainicon: <FaNoteSticky />,
        title: "Notes Project",
        techs: [techs.Laravel, techs.Tailwind],
        link:"https://github.com/ibada13/Laravel_daily_project"
        
    }
] 
export const FrontEndProject: Project[] = [
    {
        mainicon: <GiTechnoHeart size={75} color='white' />,
        title: "Tech Care",
        techs: [techs.Tailwind, techs.NextJs],
        link:"https://tech-care-kappa.vercel.app/"
    },
        {
        mainicon: <TbUniverse size={75} color='cyan' />,
        title: "FrontVerse",
        techs: [techs.Tailwind, techs.NextJs],
        link:"https://frontverse.vercel.app/"
    },
    {
        mainicon: <FaTableCells size={75} color='white' />,
        title: "flash memory",
        techs: [techs.Tailwind, techs.NextJs],
        link:"https://memory-flash-it5hmxhzr-ibada13s-projects.vercel.app/"
    }
]
export interface cars  { 
    title: string|React.ReactElement,
    description?: string,
    icon: React.ReactElement,
 
  }
export const cardData: cars[] = [
    
  
    {
        title: <span style={{ color: 'white' }}>next</span>,
        icon: techs.NextJs,

    },
  
    {
        title: <span style={{ color: color.djangocolor }}>django</span>,
        icon:techs.Django ,

    },
    {
        title:<span style={{color:color.tailwind}}>tailwind</span> , 
        icon: techs.Tailwind
    },
    {
        title: <span style={{color:color.laravel}}>Laravel</span>,
        icon: techs.Laravel

    }

  ];
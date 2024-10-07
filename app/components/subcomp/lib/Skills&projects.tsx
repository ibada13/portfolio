'use client'
import React from 'react'
import {  FaLaravel } from 'react-icons/fa'
import {BiLogoDjango} from 'react-icons/bi'

import { RiNextjsFill, RiNotionFill, RiTailwindCssFill } from 'react-icons/ri'
import { FaNoteSticky, FaTableCells } from 'react-icons/fa6'
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
    NextJs: <RiNextjsFill className=' shadow-md' size={75} color='white' />,
    Django:<BiLogoDjango className=' shadow-md' color={color.djangocolor} size={75} />,
    Tailwind:<RiTailwindCssFill className=' shadow-md' color={ color.tailwind} size={75} />,
    Laravel:<FaLaravel className=' shadow-md' color={color.laravel } size={ 75} />,
}
export const BackEndProjects: Project[] = [
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
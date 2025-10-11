'use client'
import React from 'react'
import {  FaLaravel } from 'react-icons/fa'

import { GiBouncingSword ,GiTechnoHeart} from "react-icons/gi";
import { RiNextjsFill,  RiTailwindCssFill } from 'react-icons/ri'
import { FaReact,FaNoteSticky, FaTableCells } from 'react-icons/fa6'
import { SiFastapi } from "react-icons/si";
import { TbUniverse } from "react-icons/tb";
import { BsJournals } from "react-icons/bs";

import { Poppins,Dancing_Script , El_Messiri , Audiowide ,Bangers } from "next/font/google";
import Image from 'next/image';
import logo from '@/app/components/subcomp/logo.png'

const dancing = Dancing_Script({ subsets: ["latin"] });
const el_messiri = El_Messiri({weight:"400" ,  subsets: ["latin"] });
const audiowide = Audiowide({ weight: "400", subsets: ["latin"], });
const bangers = Bangers({ subsets: ['latin']  , weight:"400"});
const poppins = Poppins({subsets:['latin' ] , weight:"400"});
interface Project { 
    mainicon: JSX.Element, 
    title: string|JSX.Element, 
    techs: JSX.Element[],
    link:string ,
}

const color={
    
    evilexpert : '#730073',
    cssbleu: '#0074e4',
    reactcolor: '#61DBFB',
    htmlcolor: '#e34c26',
    fastApicolor: '#33B8A3',
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
    react: <FaReact className="animate-pulse drop-shadow-[0_0_20px_#61DBFB] brightness-200" size={75} color={color.reactcolor} />,
    fastApi: <SiFastapi className="animate-pulse drop-shadow-[0_0_20px_#33B8A3] brightness-200" size={75} color={color.fastApicolor} />,
    Tailwind: <RiTailwindCssFill className="animate-pulse drop-shadow-[0_0_20px_#06B6D4] brightness-200" size={75} color={color.tailwind} />,
    Laravel: <FaLaravel className="animate-pulse drop-shadow-[0_0_30px_#f05340] brightness-200" size={75} color={color.laravel} />,
}


export const BackEndProjects: Project[] = [
    {
        mainicon:<GiBouncingSword />,
        title: <p className={`${el_messiri.className} text-3xl mt-4`}>Hussam Al-Hikma</p>,
        techs: [techs.NextJs, techs.Tailwind, techs.Laravel],
        link :"https://github.com/ibada13/Hussam_Al-Hikma",
    },
    {
        mainicon: <BsJournals />,
        title: <p className={`${dancing.className} text-4xl mt-4`}>Only Yours Journals</p>,
        techs: [techs.react, techs.Tailwind, techs.Laravel],
        link:"https://github.com/ibada13/OnlyYoursJournal"

    }, {
        mainicon: <Image src={logo} alt='asklea logo' width={120} height={120}/>,
        title: <p className={`${poppins.className} text-3xl uppercase`}>Asklea</p>,
        techs: [techs.NextJs, techs.Tailwind , techs.fastApi],
        link:"https://github.com/ibada13/Asklea"
        
    }
] 
export const FrontEndProject: Project[] = [
    {
        mainicon: <GiTechnoHeart size={75} color='white' />,
        title: <p className={`${audiowide.className} text-3xl mt-4`}>Tech Care</p>,
        techs: [techs.Tailwind, techs.NextJs],
        link:"https://tech-care-kappa.vercel.app/"
    },
    {
        mainicon: <TbUniverse size={75} color='cyan' />,
        title: <p className={ `${audiowide.className} text-3xl`}>FrontVerse</p>,
        techs: [techs.Tailwind, techs.NextJs],
        link:"https://frontverse.vercel.app/"
    },
    {
        mainicon: <FaTableCells size={75} color='white' />,
        title: <p className={ `${bangers.className } text-3xl`}>Flash Game</p>,
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
        title: <span style={{ color: color.fastApicolor }}>FastApi</span>,
        icon:techs.fastApi ,

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
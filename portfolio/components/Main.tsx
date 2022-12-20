import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from "./BackgroundCircles"
import Link from 'next/link'
type Props = {}

export default function Main({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Raed elmajdoub",
            "Full stack developer",
            "MERN Stack"
        ],
        loop:true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
            className='relative rounded-full object-cover h-32 w-32 mx-auto' 
            src="https://mm.leadshook.com/api/v4/users/i6mij48djtra3x8gohxy74bftr/image" 
            alt="Raed elmajdoub" 
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Full stack Js </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7ABBA' />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='mainButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='mainButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='mainButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='mainButton'>Projects</button>
                </Link>
            </div>
        </div>
       
    </div>
  )
}
import React from 'react'
import { SkillCircle } from './icons'

export default function Contentsection() {
  return (
    <div className={`bg-sky-100  h-[100vh] flex flex-col md:flex-row   relative font-iceberg overflow-hidden`}>
        <div className='z-0 absolute m-12'>
          <SkillCircle/>
        </div>
        <div className='flex flex-col absolute z-10 md:flex-row mt-14  w-screen'>
          <div className='p-14'>
            <h1 className='text-white text-5xl'>Skills</h1>
          </div>
          <div className='flex z-10 absolute mt-40 md:mt-0 flex-col w-screen text-xl tracking-[0.3rem]  font-bold pl-[20%] lg:pl-[40%] md:pt-20  '>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>NEXT JS 13</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>JavaScript</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>TypeScript</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>Node JS</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>Html</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>CSS</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>Chakra UI</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>Tailwind CSS</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>Framer Motion</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>C++</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>php</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>MySQL</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>XML</h1>
            <h1 className='hover:scale-105 delay-100 transition cursor-pointer hover:pb-2'>UX/UI Design</h1>
          </div>
        </div>
    </div>
  )
}

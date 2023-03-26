import React from 'react'
import { Wave,Cap } from './icons'
import { Project1, Project2, Project3, Project4 } from './projects'

export default function Projectsection() {
  return (
    <div className={`bg-sky-500 z-0 h-[100vh] flex flex-col  md:flex-row  relative font-iceberg overflow-hidden`}>
        <div className='-z-10 absolute h-[100%] flex flex-col justify-between w-screen '>
            <div className='flex pt-5 pr-5 justify-end '>
                <Cap/>
            </div>
            <div className=' w-[100%] '>               
                <Wave/>
            </div>
        </div>
        <div className='z-0 absolute mt-32 md:mt-24 h-[100%]  w-screen  '>
          <div className='flex flex-col  space-y-4   lg:justify-center align-middle'>
            <h1 className='text-white text-5xl self-center'>My Projects</h1>
            <div className='self-center hover:scale-110 delay-75 transition'>
              <Project4/>
            </div>
            <div className='self-center hover:scale-110 delay-75 transition'>
              <Project3/>
            </div>
            <div className='self-center hover:scale-110 delay-75 transition'>
              <Project2/>
            </div>
            <div className='self-center hover:scale-110 delay-75 transition'>
              <Project1/>
            </div>
          </div>
          {/* <div className='flex flex-col w-screen text-xl tracking-wider  font-bold pl-[20%] lg:pl-[40%] md:pt-40 text-slate-900'> */}
            
          {/* </div> */}
        </div>
    </div>
  )
}

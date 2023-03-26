import React from 'react'
import Image from 'next/image'
import { Linkedin, Twitter } from './icons'

export default function Herosection() {
  return (
    <div className={`bg-slate-900 h-[100vh] relative font-iceberg overflow-hidden`}>
        
            <div className='flex flex-col justify-evenly absolute z-0 h-[100vh]'>
                <div className='self-end lg:mr-10  '>
                <Image src={'/assets/backgrounds/circle.svg'} width={0} height={0} alt={'circle bg'} className='w-56 lg:w-72 xl:w-96 '/>
                </div>
                <div className='flex flex-row justify-evenly w-screen h-96'>
                    <Image src={'/assets/backgrounds/circle.svg'} width={0} height={0} alt={'circle bg'} className='w-40  xl:w-72 mt-10 '/>
                    <div className='self-end '>
                      <Image src={'/assets/backgrounds/circle.svg'} width={0} height={0} alt={'circle bg'} className='w-20 xl:w-32 sm:pb-24 md:pb-0'/>
                    </div>  
                </div>
                
            </div>   
            <div className='absolute z-10 flex flex-col md:flex-row justify-evenly align-middle  w-screen h-screen'>
              <div className=' text-emerald-200 mt-12 h-32 font-bold text-xl lg:text-6xl md:text-4xl md:space-y-4  self-center md:mt-[15%] md:self-start'>
                <h1 className='text-white '>
                  {"I'm"}
                </h1>
                <h1>
                  Muhammad Burhan
                </h1>
                <h1 className='md:tracking-[0.5em] text-2xl lg:text-3xl underline  text-white '>
                  Software Engineering
                </h1>
              </div>
              <div className='self-center'>
                <Image src={'/assets/illustrations/profilepic.png'} width={200} height={400} alt={'profile image'} className=''/>
              </div>  
            </div>
            <div className='absolute z-20 flex flex-col space-y-2 pr-2 md:pr-6 md:flex-row md:space-x-2  justify-end   w-screen h-screen'>
              <div className=' h-16 self-end'>
                <Twitter/>
              </div>
              <div className=' h-16 self-end'>
                <Linkedin/>
              </div>
            </div>
  

    </div>
  )
}

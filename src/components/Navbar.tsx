"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="w-full flex justify-center">
      <div className='fixed top-2 lg:top-10 h-11 md:h-[74px] xl:w-3/4 w-[96vw] mx-auto rounded bg-white z-50 flex justify-between p-1 lg:p-2'>
        <Image alt='logo' src="/images/logo.png" width={300} height={300} className='w-20 md:w-40'/>
        <div className='flex items-center md:gap-5 gap-3 text-sm md:text-base mr-2 lg:mr-0'>
          <Link className={`${path=='/'?'text-[#1f2fd8]': 'hover:scale-110 duration-200'} hidden lg:block`} href='/'>Home</Link>
          <Link className={`${path=='/about'?'text-[#1f2fd8]': 'hover:scale-110 duration-200'}`} href='/about'>About</Link>
          <Link className={`${path=='/services'?'text-[#1f2fd8]': 'hover:scale-110 duration-200'}`} href='/services'>Services</Link>
          <Link className={`${path=='/caseStudy'?'text-[#1f2fd8]': 'hover:scale-110 duration-200'}`} href='/caseStudy'>Case-Study</Link>
          <Link className='hidden md:block' href='/contact'><Button button='Free Consultation' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
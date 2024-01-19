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
      <div className='fixed top-10 h-[74px] w-3/4 mx-auto rounded bg-white z-50 flex justify-between p-2'>
        <Image alt='' src="/images/logo.png" width={300} height={300} className='w-40'></Image>
        <div className='flex items-center gap-5'>
          <Link className={`${path=='/'?'text-[#1f2fd8]': 'hover:scale-110 duration-200'}`} href='/'>Home</Link>
          <Link className={`${path=='/about'?'text-[#1f2fd8]': 'hover:scale-110 duration-200'}`} href='/about'>About</Link>
          <Link className={`${path=='/services'?'text-[#1f2fd8]': 'hover:scale-110 duration-200'}`} href='/services'>Services</Link>
          <Link className={`${path=='/caseStudy'?'text-[#1f2fd8]': 'hover:scale-110 duration-200'}`} href='/caseStudy'>Case Study</Link>
          <Link href='/contact'><Button button='Free Consultation' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
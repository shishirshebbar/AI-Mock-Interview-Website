"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();
    useEffect(()=>{
        console.log(path);
    },[])
  return (
    
    <div className='flex p-4 justify-between items-center bg-gray-100 shadow-md'>
    <Image src={'/logo.svg'} width={40} height={20} alt='logo'/>
    <ul className=' gap-8 hidden md:flex text-black font-bold'>
      <li
        className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
          path === '/Dashboard' && 'text-primary font-bold'
        }`}
      >
        Home
      </li>
      <li
        className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
          path === '/Dashboard/FAQ' && 'text-primary font-bold'
        }`}
      >
        FAQs
      </li>
      <li
        className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
          path === '/Dashboard/Premium' && 'text-primary font-bold'
        }`}
      >
        Premium
      </li>
      <li
        className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
          path === '/Dashboard/Guide' && 'text-primary font-bold'
        }`}
      >
        Guide
      </li>
    </ul>

  
        <UserButton/>
    </div>
  )
}

export default Header
"use client"
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function Header() {
    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]); // Add `path` as a dependency to update when the route changes

    return (
        <div className='flex p-4 justify-between items-center bg-gray-100 shadow-md'>
            {/* Logo and MockAI text in a flex container */}
            <div className='flex items-center gap-2'>
                <Image src={'/logo.png'} width={40} height={20} alt='logo' />
                <h2 className='text-lg font-semibold text-red-500'>Mock<strong>AI</strong></h2>
            </div>
            <ul className='gap-8 hidden md:flex text-black font-bold'>
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                        path === '/Dashboard' && 'text-primary font-bold'
                    }`}
                >
                    <Link href="/Dashboard">Home</Link>
                </li>
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                        path === '/Dashboard/FAQ' && 'text-primary font-bold'
                    }`}
                >
                    <Link href="/Dashboard/FAQ">FAQs</Link>
                </li>
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                        path === '/Dashboard/Premium' && 'text-primary font-bold'
                    }`}
                >
                    <Link href="/Dashboard/Premium">Premium</Link>
                </li>
                <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                        path === '/Dashboard/Guide' && 'text-primary font-bold'
                    }`}
                >
                    <Link href="/Dashboard/Guide">Guide</Link>
                </li>
            </ul>
            <UserButton />
        </div>
    );
}

export default Header;



// "use client"
// import { UserButton } from '@clerk/nextjs'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import React, { useEffect } from 'react'

// function Header() {
//     const path = usePathname();
//     useEffect(()=>{
//         console.log(path);
//     },[])
//   return (
    
//     <div className='flex p-4 justify-between items-center bg-gray-100 shadow-md'>
//     <Image src={'/logo.svg'} width={40} height={20} alt='logo'/>
//     <ul className=' gap-8 hidden md:flex text-black font-bold'>
//       <li
//         className={hover:text-primary hover:font-bold transition-all cursor-pointer ${
//           path === '/Dashboard' && 'text-primary font-bold'
//         }}
//       >
//         Home
//       </li>
//       <li
//         className={hover:text-primary hover:font-bold transition-all cursor-pointer ${
//           path === '/Dashboard/FAQ' && 'text-primary font-bold'
//         }}
//       >
//         FAQs
//       </li>
//       <li
//         className={hover:text-primary hover:font-bold transition-all cursor-pointer ${
//           path === '/Dashboard/Premium' && 'text-primary font-bold'
//         }}
//       >
//         Premium
//       </li>
//       <li
//         className={hover:text-primary hover:font-bold transition-all cursor-pointer ${
//           path === '/Dashboard/Guide' && 'text-primary font-bold'
//         }}
//       >
//         Guide
//       </li>
//     </ul>

  
//         <UserButton/>
//     </div>
//   )
// }
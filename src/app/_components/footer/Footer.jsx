import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
 
  
  <footer className="w-full bg-gray-100 py-6 px-4 md:px-16 mt-8">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Logo */}
    <div className="flex justify-center md:justify-start">
      <Image 
        src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/logo.svg`} 
        alt="Company Logo"
        width={100}
        height={100}
        className="h-10 w-auto"
      />
    </div>

    {/* Copyright text */}
    <div className="text-gray-600 text-center text-sm md:text-base">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </div>

  </div>
</footer>

  </>

  
  )
}

export default Footer
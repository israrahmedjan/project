import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
 
{/* medium devices */}
<footer className="hidden md:block w-full bg-gray-100 py-10 px-4 md:px-16 mt-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Logo Section */}
    <div className="flex flex-col items-center md:items-start">
      <Image 
        src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/logo.svg`} 
        alt="Company Logo"
        width={100}
        height={100}
        className="h-10 w-auto mb-4"
      />
      <p className="text-gray-600 text-sm text-center md:text-left">
        Best Company for your needs. Delivering excellence since 2020.
      </p>
    </div>

    {/* Column 1 */}
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-800 font-semibold mb-2">Company</h3>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">About Us</a>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Careers</a>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Press</a>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Blog</a>
    </div>

    {/* Column 2 */}
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-800 font-semibold mb-2">Support</h3>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Help Center</a>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Safety Center</a>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Community Guidelines</a>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Contact Us</a>
    </div>

    {/* Column 3 */}
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-800 font-semibold mb-2">Legal</h3>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Cookies Policy</a>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Privacy Policy</a>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Terms of Service</a>
      <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Law Enforcement</a>
    </div>

  </div>

  {/* Bottom copyright */}
  <div className="mt-10 text-center text-gray-600 text-xs">
    © {new Date().getFullYear()} Your Company. All rights reserved.
  </div>
</footer>


{/* small devices */}

<footer className="block md:hidden w-full bg-gray-100 ">
<div className=' py-10 px-4 mt-8 mx-4'>
  <div className="max-w-7xl mx-auto flex flex-col gap-8">

    {/* Logo Section */}
    <div className="flex flex-col items-center">
      <Image 
        src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/logo.svg`} 
        alt="Company Logo"
        width={100}
        height={100}
        className="h-10 w-auto mb-4"
      />
      <p className="text-gray-600 text-sm text-center">
        Best Company for your needs. Delivering excellence since 2020.
      </p>
    </div>

    {/* Links Section */}
    <div className="grid w-full grid-cols-1 gap-1">
      
      {/* Column 1 */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-800 font-semibold mb-2">Company</h3>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">About Us</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Careers</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Press</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Blog</a>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-800 font-semibold mb-2">Support</h3>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Help Center</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Safety Center</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Community Guidelines</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Contact Us</a>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-2 col-span-2">
        <h3 className="text-gray-800 font-semibold mb-2">Legal</h3>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Cookies Policy</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Privacy Policy</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Terms of Service</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">Law Enforcement</a>
      </div>

    </div>

    {/* Bottom copyright */}
    <div className="mt-10 text-center text-gray-600 text-xs">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </div>

  </div>
  </div>
</footer>




  </>

  
  )
}

export default Footer
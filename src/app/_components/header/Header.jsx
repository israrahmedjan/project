'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Menu open/close icons
import Ticker from '../Ticker';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
        <>
     
     {/* lg devices */}
            <header className="fixed top-0 left-0 bg-white right-0 hidden md:flex border-gray-200 border h-auto justify-between px-16">
                <div className="flex justify-center pt-4"><Image src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/logo.svg`} alt="Some description"
                            width={100}
                            height={100}
                             className="h-12 w-auto"
                            /></div>

                <nav className="flex items-center justify-center">
                    <a href="#" className="text-primary text-lg font-semibold hover:text-secondary h-20 flex items-center justify-center px-6 border-gray-100 border-r">
                        Drive
                    </a>
                    <a href="#" className="text-primary text-lg font-semibold hover:text-secondary h-20 flex items-center justify-center px-6 border-gray-100 border-r">
                        Ride
                    </a>
                    <a href="#" className="text-primary text-lg font-semibold hover:text-secondary h-20 flex items-center justify-center px-6 border-gray-100 border-r">
                        Business
                    </a>
                    <a href="#" className="text-primary text-lg font-semibold hover:text-secondary h-20 flex items-center justify-center px-6">
                        About
                    </a>
                </nav>

            </header>

<section className='hidden md:block relative mt-[90px]'>
            <Ticker  />
            </section>
            
    


  {/* small devices */}
  <header className="fixed top-0 left-0 w-full md:hidden bg-white flex flex-col border-gray-200 border px-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center h-20">
          <Image
            src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/logo.svg`}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Menu Button */}
        <nav className="flex items-center">
          <button onClick={toggleMenu} className="p-2">
            {menuOpen ? (
              <X className="w-8 h-8 text-primary" />
            ) : (
              <Menu className="w-8 h-8 text-primary" />
            )}
          </button>
        </nav>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
      <div
      key="dropdown" // yeh important hai
      className="flex flex-col bg-white rounded-md animate-slidein">
        <a href="#" className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b">Home</a>
          <a href="#" className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b ">Drive</a>
          <a href="#" className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b">Ride</a>
          <a href="#" className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b">Business</a>
          <a href="#" className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b">About</a>
        </div>
      )}
    </header>

        </>
    );
}

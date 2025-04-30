'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Menu open/close icons
import Ticker from '../Ticker';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { UserButton } from '@clerk/nextjs';
import Breadcrumb from '../Breadcrumb';
import { usePathname } from "next/navigation";
import { getHeader } from '@/helper/helper';







export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const hommeUrl = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
    const pathname = usePathname(); // e.g., '/user1'
    const [headerData, setheaderData] = useState(null);
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
 
  

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    useEffect(()=>
    {
      setMenuOpen(false);
      
    },[pathname])

    const getData = async () => {
      const data = await getHeader();
      console.log("Header", data);
      setheaderData(data.data);
      //setcompleteData(data.data.Section1);
    };
  
    useEffect(() => {
    
      getData();
    }, []);
  
    
    return (
        <>
     
     {/* lg devices */}
            <header className="fixed top-0 left-0 bg-white right-0 hidden md:flex border-gray-200 border h-auto justify-between px-16 z-50">
                <div className="flex justify-center pt-4">
                  <Link href={`${hommeUrl}`}>
                  {headerData?.Header && (
                    
                    <>
            
                            <div className='h-[65px] w-[150px] '>
                    {headerData?.Header?.logo?.url ? (<Image
                                  src={`${headerData?.Header?.logo?.url}`}
                                  alt={`${headerData?.Header?.logo?.url}`}
                                  width={150}
                                  height={125}
                  
                                />
                                ) : (<span className=''>Site Logo</span>)}
                                </div>

                            
                  </>
                  )}
                            </Link>
                            </div>

                <nav className="flex items-center justify-center">
                <Link href={`${hommeUrl}`} className="text-primary text-lg font-medium hover:text-secondary h-20 flex items-center justify-center px-6 border-gray-100 border-r">
                        Home
                   </Link>
                   <Link href={`${hommeUrl}/user1`} className="text-primary text-lg font-medium hover:text-secondary h-20 flex items-center justify-center px-6 border-gray-100 border-r">
                        User 1
                   </Link>    
                    <Link href={`${hommeUrl}/user2`} className="text-primary text-lg font-medium hover:text-secondary h-20 flex items-center justify-center px-6 border-gray-100 border-r">
                        User 2
                   </Link>
                     <Link href={`${hommeUrl}/paymentModel`} className="text-primary text-lg font-medium hover:text-secondary h-20 flex items-center justify-center px-6 border-gray-100 border-r">
                        Payment Model
                   </Link>
                   <Link href={`${hommeUrl}/careers`} className="text-primary text-lg font-medium hover:text-secondary h-20 flex items-center justify-center px-6 border-gray-100 border-r">
                        Careers
                   </Link>
                   <Link href={`${hommeUrl}/about`} className="text-primary text-lg font-medium hover:text-secondary h-20 flex items-center justify-center px-6 border-gray-100 border-r">
                        About
                   </Link>
                 

        
                </nav>

            </header>
            
       {/* Breadcrumbs */}
      
  

<div className='w-full mt-20'> <Breadcrumb /></div>
{/* <section className='hidden md:block relative mt-[90px]'>
            <Ticker  />
            </section> */}
            
    


  {/* small devices */}
  <header className="fixed top-0 left-0 w-full md:hidden bg-white flex flex-col border-gray-200 border px-4 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center h-20">
        <Link href={`${hommeUrl}`}>
                  {headerData?.Header && (
                    
                    <>
            
                         
                    {headerData?.Header?.logo?.url ? (<Image
                                  src={`${headerData?.Header?.logo?.url}`}
                                  alt={`${headerData?.Header?.logo?.url}`}
                                  width={150}
                                  height={100}
                  
                                />
                                ) : (<span className=''>Site Logo</span>)}
                               

                            
                  </>
                  )}
                            </Link>
                
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
       <Link href={`${hommeUrl}`}  className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b">Home</Link>
       <Link href={`${hommeUrl}/user1`} className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b ">User1</Link>
       <Link href={`${hommeUrl}/user2`}  className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b">User2</Link>
       <Link href={`${hommeUrl}/paymentModel`}  className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b">Payment Model</Link>
       <Link href={`${hommeUrl}/careers`}  className="px-4 py-2 text-primary hover:bg-gray-100 border-gray-100 border-b">Careers</Link>
        </div>
      )}
    </header>

        </>
    );
}


'use client'
import { Home, ChevronRight, LogIn, LogOut, LogInIcon, LogOutIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

import { usePathname } from "next/navigation";



function Breadcrumb() {
    const hommeUrl = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
    const { isSignedIn, user } = useUser();
    const pathname = usePathname(); // e.g., '/user1'

  const pageName = pathname.split("/")[1]; // 'user1'
  return (
    <>
 
    <div className="w-full bg-gray-50 mb-0 md:mb-16  h-14">
    <div className="mx-4 md:mx-16 flex justify-between items-center">

  {/* Breadcrumbs */}
  <nav className="flex items-center space-x-2 text-gray-700 text-base font-medium">
    <Link href={`${hommeUrl}`} className="flex items-center gap-1 hover:text-primary transition">
      <Home size={20} />
      <span>Home</span>
    </Link>
    <ChevronRight size={16} />
   {pageName && (  <a href="/user1" className="flex items-center gap-1 hover:text-primary transition">
{pageName}
</a>)}
  
    {/* <div>{JSON.stringify(user,null,2)}</div> */}
  
  </nav>

  {/* Welcome Text */}
  <div className="flex items-center gap-2 text-gray-700 font-medium text-base">
  <div className="w-50 h-14 relative overflow-hidden rounded-full flex items-center">
 
  {isSignedIn && (<div className="flex gap-1 md:gap-2 items-center ">
    <span>Welcome, {user.fullName}!</span>
     <UserButton /></div>)}

     {!isSignedIn && (<div className="flex gap-1 items-center italic">

      <Link href={`${hommeUrl}/SignUp`} className="text-sm md:text-base font-medium hover:text-secondary h-14 flex items-center justify-center px-2 border-gray-100 border-r">
                        <span className="flex gap-0 md:gap-2 items-center"><span className="flex gap-1 md:gap-2 items-center">Sign Up</span><User size={18} className="text-secondary" /></span>
                   </Link>
                  
                   <Link href={`${hommeUrl}/SignIn`} className="text-sm md:text-base font-medium hover:text-secondary h-14 flex items-center justify-center px-2 border-gray-100 border-r">
                  <span className="flex gap-1 md:gap-2 items-center"><span>Sign IN</span> <LogOutIcon size={18} className="text-secondary" /></span>
                   </Link>
      </div>)}

  </div>
  
 
</div>


</div>
</div>
</>
  )
}


export default Breadcrumb;

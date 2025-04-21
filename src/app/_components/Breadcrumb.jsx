
'use client'
import { Home, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Breadcrumb({user,name}) {
    const hommeUrl = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  return (
    <>
    <div className="w-full bg-gray-50 mb-16">
    <div className="mx-4 md:mx-16 flex justify-between items-center h-20">

  {/* Breadcrumbs */}
  <nav className="flex items-center space-x-2 text-gray-700 text-sm md:text-base font-medium">
    <Link href={`${hommeUrl}`} className="flex items-center gap-1 hover:text-primary transition">
      <Home size={18} />
      <span>Home</span>
    </Link>
    <ChevronRight size={16} />
    <a href="/user1" className="flex items-center gap-1 hover:text-primary transition">
  
      <span>{user}</span>
    </a>
  </nav>

  {/* Welcome Text */}
  <div className="flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base">
  <div className="w-12 h-12 relative overflow-hidden rounded-full">
    <Image
      src="https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740"
      alt="User Profile"
      fill
      className="object-cover"
    />
  </div>
  <span>Welcome, {name}!</span>
</div>


</div>
</div>
</>
  )
}


export default Breadcrumb;

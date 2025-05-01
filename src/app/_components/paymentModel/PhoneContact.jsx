"use client";

import GooglePayButton from "@/lib/GooglePayButton";
import { Phone, Mail } from "lucide-react"; // Lucide se icons import karna hai
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
export default function PhoneContact({data}) {
   const price = useSelector((state) => state.counter.giftitem);

   const amount = "350"; 
const [sendPrice,setsendPrice] = useState(0);
   useEffect(()=>
  {
setsendPrice(price);
  },[price])

  
  return (
    <div className="p-6 rounded-md w-full max-w-md mx-auto mt-10 border-gray-100">
    
      {/* Phone Number Field */}
    
      <div className="relative mb-6">
        {price}
        <select
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none outline-none text-gray-600 text-sm"
        >
          <option>+92</option>
          <option>+1</option>
          <option>+44</option>
          <option>+91</option>
        </select>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border pl-16 pr-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <Mail className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
      </div>
      

    <div className="h-20">  
  <GooglePayButton amount={amount} />
  </div>
    </div>
  );
}

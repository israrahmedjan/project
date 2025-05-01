"use client";

import GooglePayButton from "@/lib/GooglePayButton";
import { Phone, Mail } from "lucide-react"; // Lucide se icons import karna hai

export default function PhoneContactSmall() {
  return (
    <div className="p-1 rounded-md w-full max-w-md mx-auto mt-0">
     <div className="bg-red-500"><GooglePayButton amount="5.00" />
     testing222
     </div>
      {/* Phone Number Field */}
      <div className="relative mb-1">
     
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

    <div className="h-10 border-red-500 border bg-black">Gooogle</div>
    </div>
  );
}

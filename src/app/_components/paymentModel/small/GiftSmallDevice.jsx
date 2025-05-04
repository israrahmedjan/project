'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react';
import GooglePayButton from '@/lib/GooglePayButton';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, giftItemLoad } from '@/redux/slices/counterSlice'; // path adjust karein
import GooglePayButtonSmall from '@/lib/GooglePayButtonSmall';


function GiftSmallDevice({data}) {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const [price,setprice] = useState(null)

  const [location, setLocation] = useState("New York");
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const dispatch = useDispatch();
const count = useSelector((state) => state.counter.value);


  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(()=>
  {
setprice(data?.headingSmall*count);

  },[count,price])

  useEffect(()=>
  {
    dispatch(giftItemLoad(parseInt(data?.headingSmall*count)));
  },[count])
if(!count) return null
if(!location) return null
if(!price) return null
if(!data) return null
  return (
    <div>     <div className='md:hidden w-full bg-gray-50 mt-4 animate-fade-in-down mb-16'>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">
    <div className="bg-white p-2 rounded-lg shadow-lg w-[90%] mx-auto">
                 <div className='mx-auto order-2 flex flex-col items-center'>
                  <div className=''><Image
                     src={`${domain}/images/gift/gift.png`}
                     alt="No Image"
                     width={50}
                     height={50}
     
                   /></div>
                   <div><h3 className='text-base pt-2  font-semibold'>{data.heading}</h3></div>
                   <div><p className='text-center text-sm mt-2'>{data.content}!</p></div>
                 </div>
                 <div className='flex order-1 justify-center flex-col items-center mt-1'>
                  
                 <div className='flex flex-col justify-between items-center gap-2'>
    <div className='flex flex-col items-center gap-2'>
        <div><h3 className='text-base font-semibold'>Item Name</h3></div>
        <div>
        {/* <Image
                src={`${domain}/images/gift/location.png`}
                alt="no image"
                width={50}
                height={50}

              /> */}

<div className="w-full flex justify-center">
        <iframe
          title="Google Maps"
          width="100%"
          height="200"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        ></iframe>
      </div>

        </div>
    </div>
    <div className="space-y-6 p-6 border rounded-md w-full max-w-md mx-auto mt-2">
      
  

      {/* Text field for location with icon */}
      <div className="relative">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
        onChange={handleChange}
          className="w-full border pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <MapPin className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <span className='text-sm '>Lorem Ipsum is not simply random.</span>
      </div>
          {/* Item fields increment/decrement */}
          <div className="flex flex-col items-center gap-2 text-center">
        <div className='w-full mx-auto'>
            <span className='mx-4'>${price}</span>
        <button onClick={() => dispatch(decrement())} className="px-auto  h-5 w-5 bg-primary hover:bg-secondary text-white rounded-full ">-</button>
        <span className="text-lg font-semibold items-center mx-2">{count}</span> {/* Quantity */}
        <button onClick={() => dispatch(increment())} className="px-auto  h-5 w-5 bg-primary hover:bg-secondary text-white rounded-full">+</button>
        </div>
      </div>

      {/* Listing like ul text */}
      <div className=' '>
        <div><h3 className='text-base'>The places you could go...</h3></div>
       
        <ul className=" list-inside   text-gray-700 flex flex-wrap items-center justify-start gap-2 text-sm">
  <li className=" border flex gap-2 items-center justify-start">
    <Image src={`${domain}/images/gift/place1.jpg`} alt="no image" width={25} height={25} />
    <span>Place</span>
  </li>
  <li className="flex gap-2 items-center justify-start">
    <Image src={`${domain}/images/gift/place1.jpg`} alt="no image" width={25} height={25} />
    <span>Tempale</span>
  </li>

 
  
  {/* Baqi li items bhi waise hi */}
</ul>

      </div>

    </div>

  </div>
  <div className="p-1 rounded-md w-full max-w-md mx-auto mt-0 ">
 
 {/* Phone Number Field */}
 <div className="relative mb-1 ">

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

{/* <div className="h-10 font-semibold text-lg flex mt-4 justify-center"> <GooglePayButton  amount={"256"} /> </div> */}
</div>
                 </div>
             
<div className=' mx-auto flex items-center justify-center mt-5'>
                  { price > 0 && (<GooglePayButtonSmall key={price} amount={(price).toString()} className="mx-auto"  />  )} 
               </div>
               </div>
    
    
    </div>
    
    </div></div>
  )
}

export default GiftSmallDevice
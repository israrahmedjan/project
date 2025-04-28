'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { Crosshair, CrossIcon, MapPin } from "lucide-react"; // Location icon lucide-react se

function Items({data,dataArray}) {
    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
    const [location, setLocation] = useState("New York");
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  
  
    const handleChange = (e) => {
      setLocation(e.target.value);
    };
  
  return (
    <>
     <div className='border-gray-200 border-l-2  pl-6 pr-2 flex flex-row justify-between items-center gap-2'>
    <div className='flex flex-col items-center gap-2'>
      {/* {JSON.stringify(data,null,2)} */}
        <div><h3 className='text-base font-semibold'>{data?.heading}</h3></div>
        <div>
        {/* <Image
                src={`${domain}/images/gift/location.png`}
                alt="no image"
                width={250}
                height={150}

              /> */}
<div className="flex justify-center">
  <div className="w-[200px] h-[200px]">
    <iframe
      title="Google Maps"
      width="200"
      height="250"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={mapSrc}
      className="w-full h-full"
    ></iframe>
  </div>
</div>

        </div>
    </div>
    <div className="space-y-6 p-6 rounded-md w-full max-w-md mx-auto mt-10">
      
      {/* Item fields increment/decrement */}
      <div className="flex items-center gap-2 border-gray-100 border-b-[1px] pb-3 text-center">
        <div className='w-full mx-auto'>
            <span className='mx-4'>${data?.headingSmall}</span>
            <button className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-full ">-</button>
        <span className="text-lg font-semibold items-center mx-4">1</span> {/* Quantity */}
        <button className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-full">+</button>
        </div>
      </div>

      {/* Text field for location with icon */}
      <div className="relative border-gray-100 border-b-[1px] pb-3">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
        onChange={handleChange}
      
          className="w-full border pl-10 pr-1 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <MapPin className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <p className='text-sm italic'>Lorem Ipsum is not simply random.</p>
      </div>

      {/* Listing like ul text */}
      <div className='border-gray-100 border-b-[1px] pb-3'>
        <div><h3 className='text-base'>The places you could go...</h3></div>
       
        <ul className=" list-inside   text-gray-700 flex flex-wrap items-center justify-start gap-2 text-sm">
  

  {dataArray.map((listing, index) => (
                      <div key={index}>  
                     <li className="flex gap-2 items-center justify-start pb-2">
    {listing?.image?.url ? (<Image
                          src={`${listing?.image.url}`}
                          alt={`${listing?.image.url}`}
                          width={25}
                          height={25}

                        />
                        ) : (<Crosshair size={25} />)} 

    <span>{listing.heading}</span>
  </li> </div>
                    ))}

 
  
  {/* Baqi li items bhi waise hi */}
</ul>

      </div>

    </div>

  </div>
    </>
  )
}

export default Items
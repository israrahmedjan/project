'use client'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Image from 'next/image';
import { Crosshair, Mail, MapPin, Phone } from 'lucide-react';
import GooglePayButton from '@/lib/GooglePayButton';
import { increment, decrement, giftItemLoad } from '@/redux/slices/counterSlice'; // path adjust karein



function GiftlargeDevice({data,dataListing}) {
    const [showLightbox, setShowLightbox] = useState(false);
    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  //const price = useSelector((state) => state.counter.giftitem);
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

    useEffect(() => {
        setShowLightbox(true); // page load pe modal open ho
      }, []);
  return (
    <div>
{showLightbox && (<div><div className="hidden md:flex fixed inset-0 bg-black bg-opacity-60  justify-center items-center z-50 text-gray-600">

<div className=" bg-white p-2 rounded-lg shadow-lg w-[90%] md:w-[800px]  h-[630px]">
  <div className='mx-auto flex flex-col items-center border-gray-100 border-b-2 border'>
    <div>


      {data.image?.url ? (<Image
        src={`${data?.image.url}`}
        alt={`No Image`}
        width={100}
        height={100}

      />
      ) : (<Image
        src={`${domain}/images/noimage.jpg`}
        alt={`No Image`}
        width={100}
        height={100} />)}

    </div>
    <div><h3 className='text-base md:text-lg mt-2 font-semibold'> {data.heading}</h3></div>
    <div><p className='text-center text-sm mb-2'>{data.content}</p></div>
  </div>
  <div className='flex justify-center flex-col md:flex-row items-center mt-0 gap-2'>
    <div>   <div className="p-6 rounded-md w-full max-w-md mx-auto mt-10 border-gray-100">
    
    {/* Phone Number Field */}
  
    <div className="relative mb-6">
     
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
    

  <div className="h-20 absolut">  
    {/* {price > 0 ? "Greate":"Less than"} */}
    { price > 0 && (<GooglePayButton key={price} amount={(price).toString()} />  )} 
   
    

</div>
  </div></div>
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
        <div className='w-[250px] mx-auto'>
            <span className='mx-4'>${price}</span>
            <button onClick={() => dispatch(decrement())} className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-full ">-</button>
        <span className="text-lg font-semibold items-center w-[10px] mx-4">{count}</span> {/* Quantity */}
        <button  onClick={() => dispatch(increment())}  className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded-full">+</button>
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
  

  {dataListing.map((listing, index) => (
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
  </div>
  <div className='flex justify-between mx-20 border-gray-100 border-t-[1px] h-[10px] pt-2 items-center  gap-10 mt-0'>
    <div>  <button onClick={() => setShowLightbox(false)} className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
      Cancel
    </button></div>
    <div><button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
      Pay ${price}
    </button></div>



  </div>
</div>

</div></div>)}

    </div>
  )
}

export default GiftlargeDevice
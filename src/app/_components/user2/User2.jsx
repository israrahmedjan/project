'use client'
import { ArrowRight, Camera, Clock, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Ticker from '../Ticker';
import ServiceSlider from '../ServiceSlider';
import { ChevronRight } from 'lucide-react'


import { motion } from 'framer-motion';
import Breadcrumb from '../Breadcrumb'
import { getUser1, getUser2 } from '@/helper/helper'
import Loading from '../Loading'

function User2({user2Data}) {


    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  


    return (
        <>
       
          <div>
               {/* Row 1 */}
               {user2Data.Row1 && (<motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-10 animate-fade-in-down">
            <div className="col-span-2 rounded-md  flex justify-center items-center">
              {user2Data.Row1?.image?.url ? (<Image
                src={`${user2Data.Row1?.image.url}`}
                alt={`${user2Data.Row1?.image.url}`}
                width={450}
                height={400}

              />
              ) : (<Image
                src={`${domain}/images/noimage.jpg`}
                alt={`No Image`}
                width={450}
                height={400} />)}



            </div>

            <div className="col-span-2 border border-gray-50 rounded-lg shadow-sm p-2 md:p-6">
              <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">

                {user2Data.Row1?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {user2Data.Row1?.content} </p>


              <Link href={user2Data?.Row1?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {user2Data?.Row1?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div>

          </div></motion.section>)}



        {/* Row 2 */}
        {user2Data.Row2Listing&& (<motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full bg-gray-50 md:pt-16 md:pb-16 animate-fade-in-down'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

              <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r  p-2 md:p-6">
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{user2Data?.Row2?.heading}</h1>
                <p className="text-base text-gray-600 mb-2">
                  {user2Data.Row2?.content}
                </p>
                {user2Data.Row2Listing && (
                  <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                    {user2Data.Row2Listing.map((listing, index) => (
                      <div key={index}>  <li className="flex gap-2 items-start text-gray-700 italic">
                        {listing?.image?.url ? (<Image
                          src={`${listing?.image.url}`}
                          alt={`${listing?.image.url}`}
                          width={20}
                          height={20}

                        />
                        ) : (<ArrowRight size={22} />)}
                        <div className='flex flex-col'><p>{listing?.content}</p>
                        </div>
                      </li>
                                           </div>
                    ))}


                  </ul>
                )}

                <div className='flex text-base flex-col md:flex-row  justify-between items-center gap-2'>
                  <button className="px-4 py-2 md:px-4 md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                    {user2Data?.Row2?.btnLabel || "Get it More"}
                  </button>
                  <Link href= {user2Data?.Row2?.btnAction || "/gosite"} className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                </div>
              </div>

              <div className="col-span-2 order-1 md:order-2 flex justify-center items-center">
                {user2Data.Row2?.image?.url ? (<Image
                  src={`${user2Data.Row2?.image.url}`}
                  alt={`${user2Data.Row2?.image.url}`}
                  width={450}
                  height={400}

                />
                ) : (<Image
                  src={`${domain}/images/noimage.jpg`}
                  alt={`No Image`}
                  width={450}
                  height={400} />)}
              </div>



            </div>
          </div></motion.section>
        )}

 {/* Row 3 Mobiles and bg for medium devices */}
 {user2Data.Row3 && (
 <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
 <div className="hidden md:block  mt-40  mb-40 relative w-full h-[230px] overflow-visible bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/detdjaspz/image/upload/v1745327663/other_plugins_woovmw.jpg')" }}>
                <div className='flex justify-between items-center gap-6'>
                 
                    <div className="absolute right-1/3 -bottom-16 ">
                   
{user2Data.Row3?.image?.url ? (<Image
                src={`${user2Data.Row3?.image.url}`}
                alt={`${user2Data.Row3?.image.url}`}
                width={200}
                height={350}

              />
              ) : (<Image
                src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/images/3dImage.png`}
                alt={`No Image`}
                width={200}
                height={350} />)}
                    </div>
                    <div className="absolute left-0 -bottom-44   w-[100%] shadow-md z-0  ">
                    <div className='flex justify-between'>
                      <div className='text-gray-600 mx-10 w-1/2'>
                      <h2 className='text-2xl text-primary pt-3 pb-3'>{user2Data.Row3.headingSmall}</h2>
                      <p className='pb-6'>{user2Data.Row3?.content}</p>
                      </div>
                      <div><h3 className='mx-16 text-3xl'>{user2Data.Row3.heading}</h3></div>
                    </div>
                      </div>
                </div>
            </div>
            
            
            </motion.section>)}
 {/* Row 3 Mobiles and bg for small devices */}

 {user2Data.Row3 && (
 <motion.section
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mb-20"
            >
 <div className="md:hidden mt-20  mb-40 relative w-full h-[150px] overflow-visible bg-cover z-10 bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/detdjaspz/image/upload/v1745327663/other_plugins_woovmw.jpg')" }}>
                <div className='flex justify-between items-center gap-6'>
                 
                    <div className="absolute right-1/3 -bottom-4 ">
                   
{user2Data.Row3?.image?.url ? (<Image
                src={`${user2Data.Row3?.image.url}`}
                alt={`${user2Data.Row3?.image.url}`}
                width={100}
                height={150}

              />
              ) : (<Image
                src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/images/3dImage.png`}
                alt={`No Image`}
                width={100}
                height={150} />)}
                    </div>
                    <div className="absolute left-0 -bottom-0 w-[43%] shadow-md z-0  ">
                    <div className='flex justify-between flex-col'>
                      <div className='text-gray-600 mx-10 w-full'>
                      <h2 className='text-lg text-white pt-3 pb-3'>{user2Data.Row3.headingSmall}</h2>
                      <p className='pb-6 text-white text-sm'>{user2Data.Row3?.content.substring(0,75)}</p>
                      </div>
                      {/* <div><h3 className='mx-16 text-lg'>{user2Data.Row3.heading}</h3></div> */}
                    </div>
                      </div>
                </div>
            </div>
            
            
            </motion.section>)}
{/* Row7 position or Row4 */}

{user2Data.Row7 && (<motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >    <div
        className="w-[95%] mt-80 mx-auto h-64 md:h-80 bg-cover  mb-80 bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-shot-amazing-cityscape-sunset_181624-45857.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740')" }}
      >
        <div className="col-span-2 flex justify-center  items-center h-full">
      
          <div className="text-white text-base p-10 md:p-28">
              <h3 className='text-3xl'>{user2Data.Row7.heading} </h3>
              <p>{user2Data.Row7.content}</p></div>
        </div>

        <div  className='pb-12'>  <div className="col-span-2 border border-gray-50 rounded-lg shadow-sm p-2 md:p-14">
              <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">

                {user2Data.Row7?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {user2Data.Row7?.content} </p>


              <Link href={user2Data?.Row7?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {user2Data?.Row7?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div></div>
      </div></motion.section>)}

{/* Row 4 */}
{user2Data.Row4 && (<motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full bg-gray-50 md:pt-16 md:pb-16 animate-fade-in-down'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

              <div className="col-span-2 order-2 md:order-2  border-gray-100 border-r  p-2 md:p-6">
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{user2Data?.Row4?.heading}</h1>
                <p className="text-base text-gray-600 mb-2">
                  {user2Data.Row4?.content}
                </p>
                {user2Data.Row4Listing && (
                  <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                    {user2Data.Row4Listing.map((listing, index) => (
                      <div key={index}>  <li className="flex gap-2 items-start text-gray-700 italic">
                        {listing?.image?.url ? (<Image
                          src={`${listing?.image.url}`}
                          alt={`${listing?.image.url}`}
                          width={20}
                          height={20}

                        />
                        ) : (<ArrowRight size={22} />)}
                        <div className='flex flex-col'><p>{listing?.content}</p>
                        </div>
                      </li>
                                           </div>
                    ))}


                  </ul>
                )}

                <div className='flex text-base flex-col md:flex-row  justify-between items-center gap-2'>
                  <button className="px-4 py-2 md:px-4 md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                    {user2Data?.Row4.btnLabel || "Get it More"}
                  </button>
                  <Link href= {user2Data?.Row4.btnAction || "/gosite"} className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                </div>
              </div>

              <div className="col-span-2 order-1 md:order-1 flex justify-center items-center">
                {user2Data.Row4?.image?.url ? (<Image
                  src={`${user2Data.Row4?.image.url}`}
                  alt={`${user2Data.Row4?.image.url}`}
                  width={450}
                  height={400}

                />
                ) : (<Image
                  src={`${domain}/images/noimage.jpg`}
                  alt={`No Image`}
                  width={450}
                  height={400} />)}
              </div>



            </div>
          </div></motion.section>
        )}

        


   
{/* Row 5 */}
{user2Data.Row5 && (<motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
            <div className='w-full mb-30 bg-gray-50'>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 md:pt-14  mx-4 md:mx-16 mb-10 mt-20 animate-fade-in-down">
            <div className="col-span-2 rounded-md  flex justify-center items-center">
            
              {user2Data.Row5?.image?.url ? (<Image
                src={`${user2Data.Row5?.image.url}`}
                alt={`${user2Data.Row5?.image.url}`}
                width={450}
                height={400}

              />
              ) : (<Image
                src={`${domain}/images/noimage.jpg`}
                alt={`No Image`}
                width={450}
                height={400} />)}



            </div>

            <div className="col-span-2 border border-gray-50 rounded-lg shadow-sm p-2 md:p-6">
              <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">

                {user2Data.Row5?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {user2Data.Row5?.content} </p>


              <Link href={user2Data?.Row5?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {user2Data?.Row5?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div>

          </div></div></motion.section>)}

                 {/* Row 6 */}
                 {user2Data.Row6 && (<motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
                <div className='w-full mb-30 p-10  bg-white'>
                    <div className='w-full flex flex-col'>
                        <h1 className='text-2xl mx-auto md:text-3xl font-semibold'>{user2Data.Row6?.heading}</h1>
                        <h1 className='mx-auto md:text-lg'>{user2Data.Row6?.headingSmall}</h1>
                        {/* <p className='mx-auto'>{user2Data.Row6?.content}</p> */}
                    </div>
                   
                    
                              {(user2Data.Row6Listing.length != 0) && (
                                <ServiceSlider services={user2Data.Row6Listing} />
                               
                              )}
                  


                </div>
            </motion.section>)}    
       
     {/* Row 8 bg - image */}
     
     {user2Data.Row8 && (<motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >    <div
        className="w-full mx-auto h-64 md:h-80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-shot-amazing-cityscape-sunset_181624-45857.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740')" }}
      >
        <div className="col-span-2 flex justify-center  items-center h-full">
      
          <div className="text-white text-base p-10 md:p-28">
              <h3 className='text-3xl'>{user2Data.Row8.heading} </h3>
              <p>{user2Data.Row8.content}</p></div>
        </div>
      </div></motion.section>)}

 
            </div>
        </>
    )
}

export default User2
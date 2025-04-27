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
import { getUser1 } from '@/helper/helper'
import Loading from '../Loading'

function User1() {


    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
    const [user1Data, setuser1Data] = useState(null);
    const icons = {
        'vector': `${domain}/images/icons/Vector.png`,
        'vector2': `${domain}/images/icons/Vector2.png`,
        'camera': `${domain}/images/icons/camera.png`,
        'handsdot': `${domain}/images/icons/handsdot.png`,
        'handshake': `${domain}/images/icons/handshake.png`,
        'pie': `${domain}/images/icons/pie.png`,
        'circlearrow': `${domain}/images/icons/circlearrow.png`,
        'graph': `${domain}/images/icons/graph.png`,
        'heart': `${domain}/images/icons/heart.png`,
    }
    const servicesIcons = {
        'user': `${domain}/images/services/user.png`,
        'siezer': `${domain}/images/services/siezer.png`,
        'map': `${domain}/images/services/map.png`,
        'usersearch': `${domain}/images/services/usersearch.png`,
        'like': `${domain}/images/services/like.png`,

    }

    const services = [
        {
            title: 'Web Development',
            image: servicesIcons.user, // apni image path daalna
            name: 'Custom Websites',
            description: 'Building responsive and modern websites tailored to your needs.',
        },
        {
            title: 'Mobile Apps',
            image: servicesIcons.siezer,
            name: 'iOS & Android Apps',
            description: 'High-performance apps with great user experience.',
        },
        {
            title: 'UI/UX Design',
            image: servicesIcons.map,
            name: 'Creative Designs',
            description: 'Beautiful and functional designs that engage your audience.',
        },
        {
            title: 'SEO Services',
            image: servicesIcons.usersearch,
            name: 'Boost Ranking',
            description: 'Improve your site ranking and visibility on search engines.',
        },
        {
            title: 'Wordpress Developer',
            image: servicesIcons.like,
            name: 'Custom Theme',
            description: 'Beautiful and functional designs that engage your audience.',
        },
    ];

const getData = async () => {
    const data = await getUser1();
    console.log("User 1 Data", data);
    setuser1Data(data.data);
    //setcompleteData(data.data.Section1);
    };
  
    useEffect(() => {
      console.log("Url live:",process.env.NEXT_PUBLIC_STRAPI_API_URL)
      getData();
    }, []);


    return (
        <>
            {/* Breadcrumbs */}
            <Breadcrumb user="User1" name="John" />
            {user1Data ? (<div>
               {/* Row 1 */}
               {user1Data.Row1 && (<motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-10 animate-fade-in-down">
            <div className="col-span-2 rounded-md  flex justify-center items-center">
              {user1Data.Row1?.image?.url ? (<Image
                src={`${user1Data.Row1?.image.url}`}
                alt={`${user1Data.Row1?.image.url}`}
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

                {user1Data.Row1?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {user1Data.Row1?.content} </p>


              <Link href={user1Data?.Row1?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {user1Data?.Row1?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div>

          </div></motion.section>)}



        {/* Row 2 */}
        {user1Data.Row2Listing&& (<motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full bg-gray-50 md:pt-16 md:pb-16 animate-fade-in-down'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

              <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r  p-2 md:p-6">
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{user1Data?.Row2?.heading}</h1>
                <p className="text-base text-gray-600 mb-2">
                  {user1Data.Row2?.content}
                </p>
                {user1Data.Row2Listing && (
                  <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                    {user1Data.Row2Listing.map((listing, index) => (
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
                    {user1Data?.Row2.btnLabel || "Get it More"}
                  </button>
                  <Link href= {user1Data?.Row2.btnAction || "/gosite"} className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                </div>
              </div>

              <div className="col-span-2 order-1 md:order-2 flex justify-center items-center">
                {user1Data.Row2?.image?.url ? (<Image
                  src={`${user1Data.Row2?.image.url}`}
                  alt={`${user1Data.Row2?.image.url}`}
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
 {user1Data.Row3 && (
 <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
 <div className="hidden md:block  mt-40  mb-40 relative w-full h-[230px] overflow-visible bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/detdjaspz/image/upload/v1745327663/other_plugins_woovmw.jpg')" }}>
                <div className='flex justify-between items-center gap-6'>
                 
                    <div className="absolute right-1/3 -bottom-16 ">
                   
{user1Data.Row3?.image?.url ? (<Image
                src={`${user1Data.Row3?.image.url}`}
                alt={`${user1Data.Row3?.image.url}`}
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
                      <h2 className='text-2xl text-primary pt-3 pb-3'>{user1Data.Row3.headingSmall}</h2>
                      <p className='pb-6'>{user1Data.Row3?.content}</p>
                      </div>
                      <div><h3 className='mx-16 text-3xl'>{user1Data.Row3.heading}</h3></div>
                    </div>
                      </div>
                </div>
            </div>
            
            
            </motion.section>)}
 {/* Row 3 Mobiles and bg for small devices */}

 <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
 <div className="md:hidden  mt-20  mb-10 relative w-full h-[130px] overflow-visible bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/detdjaspz/image/upload/v1745327663/other_plugins_woovmw.jpg')" }}>
                <div className='flex justify-between items-center gap-2'>
                    <div></div>
                    <div className="absolute  -top-14 right-7 ">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/images/3dImage.png`}
                            alt="Mobile"
                            width={100}
                            height={120}
                            className=""
                        />
                    </div>
                </div>
            </div></motion.section>


{/* Row 4 */}
{user1Data.Row4 && (<motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full bg-gray-50 md:pt-16 md:pb-16 animate-fade-in-down'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

              <div className="col-span-2 order-2 md:order-2  border-gray-100 border-r  p-2 md:p-6">
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{user1Data?.Row4?.heading}</h1>
                <p className="text-base text-gray-600 mb-2">
                  {user1Data.Row4?.content}
                </p>
                {user1Data.Row4Listing && (
                  <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                    {user1Data.Row4Listing.map((listing, index) => (
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
                    {user1Data?.Row4.btnLabel || "Get it More"}
                  </button>
                  <Link href= {user1Data?.Row4.btnAction || "/gosite"} className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                </div>
              </div>

              <div className="col-span-2 order-1 md:order-1 flex justify-center items-center">
                {user1Data.Row4?.image?.url ? (<Image
                  src={`${user1Data.Row4?.image.url}`}
                  alt={`${user1Data.Row4?.image.url}`}
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

        


            {/* Row 6 */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
                <div className='w-full p-10  bg-white'>
                    <div className='w-full flex flex-col'>
                        <h1 className='text-2xl mx-auto md:text-3xl font-semibold'>Our Services</h1>
                        <h1 className='mx-auto md:text-lg'>Our Services</h1>
                    </div>
                   
                    
                              {(user1Data.Row6Listing.length != 0) && (
                                <ServiceSlider services={user1Data.Row6Listing} />
                               
                              )}
                  


                </div>
            </motion.section>
{/* Row 5 */}
{user1Data.Row5 && (<motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
            <div className='w-full bg-gray-50'>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 md:pt-14  mx-4 md:mx-16 mb-10 mt-20 animate-fade-in-down">
            <div className="col-span-2 rounded-md  flex justify-center items-center">
            
              {user1Data.Row5?.image?.url ? (<Image
                src={`${user1Data.Row5?.image.url}`}
                alt={`${user1Data.Row5?.image.url}`}
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

                {user1Data.Row5?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {user1Data.Row5?.content} </p>


              <Link href={user1Data?.Row5?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {user1Data?.Row5?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div>

          </div></div></motion.section>)}

            
       
     {/* Row 7 bg - image */}
     
     {user1Data.Row7 && (<motion.section
          initial={{ opacity: 0, y: 100 }}
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
              <h3 className='text-3xl'>{user1Data.Row7.heading} </h3>
              <p>{user1Data.Row7.content}</p></div>
        </div>
      </div></motion.section>)}

 
            </div>):<div><Loading /></div>}
        </>
    )
}

export default User1
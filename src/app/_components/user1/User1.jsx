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
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{user1Data?.Row2Listing?.heading}</h1>
                <p className="text-base text-gray-600 mb-2">
                  {user1Data.Row2Listing?.content}
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

 <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
 <div className="hidden md:block  mt-40  mb-20 relative w-full h-[230px] overflow-visible bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/detdjaspz/image/upload/v1745327663/other_plugins_woovmw.jpg')" }}>
                <div className='flex justify-between items-center gap-6'>
                    <div></div>
                    <div className="absolute right-10 -bottom-16 ">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/images/3dImage.png`}
                            alt="Mobile"
                            width={200}
                            height={350}
                            className="drop-shadow-xl"
                        />
                    </div>
                </div>
            </div></motion.section>
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
<div className='w-full bg-gray-50 md:mt-12  md:pb-16 '>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">
                        <div className="col-span-2 order-2 md:order-1 flex justify-center items-center">


                            <Image
                                src="https://img.freepik.com/free-photo/fresh-green-plant-twig-with-smartphone_23-2148104488.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740"
                                alt="Landing page"
                                width={450}
                                height={400}

                            />
                        </div>
                        <div className="col-span-2 order-1 md:order-2  border-gray-100 border-r  p-2 md:p-6">
                            <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">Where does it come from standard?</h1>
                            <p className="text-base text-gray-600 mb-2">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            </p>
                            <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                                <li className="flex gap-2 items-start text-gray-700 italic">
                                    <Image src={icons.circlearrow} alt="vector icon" width={20} height={20} className='' />
                                    <div className='flex flex-col'><span className=''>It is a long established fact that</span>
                                        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
                                    </div>
                                </li>

                                <li className="flex gap-2 items-start text-gray-700 italic">
                                    <Image src={icons.graph} alt="vector icon" width={20} height={20} className='' />
                                    <div className='flex flex-col'><span className=''>It is a long established fact that</span>
                                        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
                                    </div>
                                </li>
                                <li className="flex gap-2 justify-center items-start text-gray-700 italic">
                                    <Image src={icons.heart} alt="vector icon" width={25} height={25} className='mt-1' />
                                    <div className='flex flex-col '><span className=''>Five centuries, but also the leap into </span>
                                        <span className=''>Electronic typesetting</span>
                                    </div>
                                </li>



                            </ul>
                            <div className='flex text-base flex-col md:flex-row  justify-between gap-4 mb-4 items-center'>
                                <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                                    More About It
                                </button>
                                <Link href="#" className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                            </div>
                        </div>







                    </div>
                </div>

        

            {/* Row 5 */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
                <div className='w-full bg-white md:mt-12  md:pb-16 '>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">
                        <div className="col-span-2 order-2 md:order-1 flex justify-center items-center">


                            <Image
                                src="https://img.freepik.com/free-photo/fresh-green-plant-twig-with-smartphone_23-2148104488.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740"
                                alt="Landing page"
                                width={450}
                                height={400}

                            />
                        </div>
                        <div className="col-span-2 order-1 md:order-2  border-gray-100 border-r  p-2 md:p-6">
                            <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">Where does it come from standard?</h1>
                            <p className="text-base text-gray-600 mb-2">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            </p>
                            <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                                <li className="flex gap-2 items-start text-gray-700 italic">
                                    <Image src={icons.circlearrow} alt="vector icon" width={20} height={20} className='' />
                                    <div className='flex flex-col'><span className=''>It is a long established fact that</span>
                                        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
                                    </div>
                                </li>

                                <li className="flex gap-2 items-start text-gray-700 italic">
                                    <Image src={icons.graph} alt="vector icon" width={20} height={20} className='' />
                                    <div className='flex flex-col'><span className=''>It is a long established fact that</span>
                                        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
                                    </div>
                                </li>
                                <li className="flex gap-2 justify-center items-start text-gray-700 italic">
                                    <Image src={icons.heart} alt="vector icon" width={25} height={25} className='mt-1' />
                                    <div className='flex flex-col '><span className=''>Five centuries, but also the leap into </span>
                                        <span className=''>Electronic typesetting</span>
                                    </div>
                                </li>



                            </ul>
                            <div className='flex text-base flex-col md:flex-row  justify-between gap-4 mb-4 items-center'>
                                <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                                    More About It
                                </button>
                                <Link href="#" className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                            </div>
                        </div>







                    </div>
                </div></motion.section>

            {/* Row 6 */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
                <div className='w-full p-10  bg-gray-50'>
                    <div className='w-full flex flex-col'>
                        <h1 className='text-2xl mx-auto md:text-3xl font-semibold'>Our Services</h1>
                        <h1 className='mx-auto md:text-lg'>Our Services</h1>
                    </div>

                    {(services.length != 0) && (
                        <ServiceSlider services={services} />
                    )}



                </div>
            </motion.section>
            {/* Row 7 */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-1 pt-10 md:gap-2 mx-4 md:mx-16 mb-10 ">
                    <div className="col-span-2 rounded-md  flex justify-center items-center">


                        <Image
                            src="https://img.freepik.com/free-photo/arabic-mobiles-front-side_187299-38069.jpg?t=st=1745160534~exp=1745164134~hmac=681c47b88c51e0d121f194ab6508583c27bd6fd38c7a8db35e7388f195a60fba&w=996"
                            alt="Landing page"
                            width={450}
                            height={400}

                        />

                    </div>

                    <div className="col-span-2 border border-gray-50 rounded-lg shadow-sm mb-2 p-2 md:p-6">
                        <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">Why do we use it?</h1>
                        <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters </p>



                        <button className="px-4 float-right py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                            Get a Ride
                        </button>

                    </div>
                </div>
            </motion.section>
            {/* Row 8 */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
                <div className='w-full bg-gray-50 md:mt-12  md:pb-16 md:pt-16 '>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">
                        <div className="col-span-2 order-1 md:order-2 flex justify-center items-center">


                            <Image
                                src="https://img.freepik.com/free-photo/fresh-green-plant-twig-with-smartphone_23-2148104488.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740"
                                alt="Landing page"
                                width={450}
                                height={400}

                            />
                        </div>
                        <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r mt-4 p-2 md:p-6">
                            <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">Where does it come from standard?</h1>
                            <p className="text-base text-gray-600 mb-2">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            </p>
                            <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                                <li className="flex gap-2 items-start text-gray-700 italic">
                                    <Image src={icons.circlearrow} alt="vector icon" width={20} height={20} className='' />
                                    <div className='flex flex-col'><span className=''>It is a long established fact that</span>
                                        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
                                    </div>
                                </li>

                                <li className="flex gap-2 items-start text-gray-700 italic">
                                    <Image src={icons.graph} alt="vector icon" width={20} height={20} className='' />
                                    <div className='flex flex-col'><span className=''>It is a long established fact that</span>
                                        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
                                    </div>
                                </li>
                                <li className="flex gap-2 justify-center items-start text-gray-700 italic">
                                    <Image src={icons.heart} alt="vector icon" width={25} height={25} className='mt-1' />
                                    <div className='flex flex-col '><span className=''>Five centuries, but also the leap into </span>
                                        <span className=''>Electronic typesetting</span>
                                    </div>
                                </li>



                            </ul>
                            <div className='flex text-base flex-col md:flex-row  justify-between items-center gap-4'>
                                <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                                    More About It
                                </button>
                                <Link href="#" className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                            </div>
                        </div>







                    </div>
                </div>
            </motion.section>
            </div>):<div><Loading /></div>}
        </>
    )
}

export default User1
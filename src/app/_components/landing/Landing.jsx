'use client'
import { ArrowRight, Camera, CheckCircle, Clock, Mail, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ServiceSlider from '../ServiceSlider';


import { motion } from 'framer-motion';

function Landing({ homeData }) {
  //const [homeData, sethomeData] = useState(null);


  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const strapiDomain = process.env.NEXT_PUBLIC_STRAPI_API_URL;


  return (
    <>

      {/* <MapWithSearch /> */}

      <div>






        {/* <pre>{JSON.stringify(homeData, null, 2)}</pre> */}
        {/* <div>{strapiDomain}{homeData?.image?.url}</div> */}
        {/* Row 1 */}
        {homeData.Row1 && (<motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-10 animate-fade-in-down">
            <div className="col-span-2 rounded-md  flex justify-center items-center">
              {homeData.Row1?.image?.url ? (<Image
                src={`${homeData.Row1?.image.url}`}
                alt={`${homeData.Row1?.image.url}`}
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

                {homeData.Row1?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {homeData.Row1?.content} </p>


              <Link href={homeData?.Row1?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {homeData?.Row1?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div>

          </div></motion.section>)}



        {/* Row 2 */}
        {homeData.Row2 && (<motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full bg-gray-50 md:pt-16 md:pb-16 animate-fade-in-down'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

              <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r  p-2 md:p-6">
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{homeData?.Row2?.heading}</h1>
                <p className="text-base text-gray-600 mb-2">
                  {homeData.Row2?.content}
                </p>
                {homeData.Row2Listing && (
                  <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                    {homeData.Row2Listing.map((listing, index) => (
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
                    {homeData?.Row2.btnLabel || "Get it More"}
                  </button>
                  <Link href={homeData?.Row2.btnAction || "/gosite"} className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                </div>
              </div>

              <div className="col-span-2 order-1 md:order-2 flex justify-center items-center">
                {homeData.Row2?.image?.url ? (<Image
                  src={`${homeData.Row2?.image.url}`}
                  alt={`${homeData.Row2?.image.url}`}
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


        {/* Row 3 */}
        {homeData.Row3 && (<motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full p-10'><h1 className='text-3xl flex justify-center animate-fade-in-down'>{homeData.Row3.heading}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-4 ">

              <div className="col-span-4 md:col-span-4 mt-10 mb-10 flex flex-col md:flex-row justify-center gap-2 items-center">

                {homeData.Row3Listing.map((row3listing, index) => (
                  <div key={index}>
                    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-80">
                      {/* <img src="https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-businessman-model-dressed-elegant-black-classic-suit-posing-metrosexual_158538-9181.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740" alt="Profile Image" className="w-24 h-24 rounded-full object-cover mb-4" /> */}
                      {row3listing?.image?.url ? (<Image
                        src={`${row3listing?.image.url}`}
                        alt={`${row3listing?.image.url}`}
                        width={100}
                        height={100}
                        className="w-30 h-30 rounded-full object-cover mb-4"

                      />
                      ) : (<Image
                        src={`${domain}/images/noimage.jpg`}
                        alt={`No Image`}
                        width={50}
                        height={50} />)}

                      <h2 className="text-lg font-medium mb-2">{row3listing?.heading}</h2>
                      <p className="text-gray-600 text-center mb-4">
                        {row3listing?.content.substring(0, 50)}
                      </p>

                      <Link href={row3listing?.btnAction || "/goSite"} >
                        <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                          {row3listing?.btnlabel || "See More"}
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}


                {/* <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-80">
                  <img src="https://img.freepik.com/free-photo/person-job-male-college-men_1150-1779.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740" alt="Profile Image" className="w-24 h-24 rounded-full object-cover mb-4" />
                  <h2 className="text-lg font-medium mb-2">John</h2>
                  <p className="text-gray-600 text-center mb-4">
                    Yeh thoda description ya text hoga jo image ke neeche dikhayega.
                  </p>
                  <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                    More About It
                  </button>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-80">
                  <img src="https://img.freepik.com/free-photo/stylish-guy-jacket-office-simple-wooden-surface_78826-2378.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740" alt="Profile Image" className="w-24 h-24 rounded-full object-cover mb-4" />
                  <h2 className="text-lg font-medium mb-2">Mitchel Star</h2>
                  <p className="text-gray-600 text-center mb-4">
                    Yeh thoda description ya text hoga jo image ke neeche dikhayega.
                  </p>
                  <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                    More About It
                  </button>
                </div> */}
              </div>

            </div>

          </div></motion.section>)}

        {/* Row 4 */}
        {homeData.Row4 && (<motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full bg-gray-50 md:pt-16 md:pb-16 animate-fade-in-down'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

              <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r  p-2 md:p-6">
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{homeData?.Row4?.heading}</h1>
                <p className="text-base text-gray-600 mb-2">
                  {homeData.Row4?.content}
                </p>
                {homeData.Row4Listing && (
                  <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                    {homeData.Row4Listing.map((listing, index) => (
                      <div key={index}>  <li className="flex gap-2 items-start text-gray-700 italic">
                        {listing?.image?.url ? (<Image
                          src={`${listing?.image.url}`}
                          alt={`${listing?.image.url}`}
                          width={20}
                          height={20}

                        />
                        ) : (<ArrowRight size={30} />)}
                        <div className='flex flex-col'><p>{listing?.content}</p>
                        </div>
                      </li>
                      </div>
                    ))}


                  </ul>
                )}

                <div className='flex text-base flex-col md:flex-row  justify-between items-center gap-2'>
                  <button className="px-4 py-2 md:px-4 md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                    {homeData?.Row4.btnLabel || "Get it More"}


                  </button>
                  <Link href={homeData?.Row4.btnAction || "/gosite"} className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                </div>
              </div>

              <div className="col-span-2 order-1 md:order-2 flex justify-center items-center">
                {homeData.Row4?.image?.url ? (<Image
                  src={`${homeData.Row4?.image.url}`}
                  alt={`${homeData.Row4?.image.url}`}
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
        {homeData.Row5 && (<motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full bg-white md:mt-12  md:pb-16 '>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">
              <div className="col-span-2 order-2 md:order-1 flex justify-center items-center">


                {homeData.Row5?.image?.url ? (<Image
                  src={`${homeData.Row5?.image.url}`}
                  alt={`${homeData.Row5?.image.url}`}
                  width={450}
                  height={400}

                />
                ) : (<Image
                  src={`${domain}/images/noimage.jpg`}
                  alt={`No Image`}
                  width={450}
                  height={400} />)}
              </div>
              <div className="col-span-2 order-1 md:order-2  border-gray-100 border-r  p-2 md:p-6">
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{homeData?.Row5?.heading}?</h1>
                <p className="text-base text-gray-600 mb-2">
                  {homeData.Row5?.content}
                </p>
                {homeData.Row5Listing && (
                  <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                    {homeData.Row5Listing.map((listing, index) => (
                      <div key={index}>  <li className="flex gap-2 items-start text-gray-700 italic">
                        {listing?.image?.url ? (<Image
                          src={`${listing?.image.url}`}
                          alt={`${listing?.image.url}`}
                          width={20}
                          height={20}

                        />
                        ) : (<ArrowRight />)}
                        <div className='flex flex-col'><p>{listing?.content}</p>
                        </div>
                      </li>
                        {/* <li className="flex gap-2 items-start text-gray-700 italic">
               <Clock size={20} className='mt-1' />
                <div className='flex flex-col'><span className=''>The point of using Lorem Ipsum is that  normal  using</span>
                <span className=''>distribution of letters, as opposed to</span>
                </div>
              </li>
              <li className="flex gap-2 justify-center items-start text-gray-700 italic">
                <Image src={icons.camera} alt="vector icon" width={25} height={25} className='mt-1' />
                <div className='flex flex-col '><span className=''>It is a long established fact that</span>
                <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
                </div>
              </li> */}
                      </div>
                    ))}


                  </ul>
                )}
                <div className='flex text-base flex-col md:flex-row  justify-between gap-4 mb-4 items-center'>
                  <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                    More About It
                  </button>
                  <Link href="#" className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                </div>
              </div>







            </div>
          </div>
        </motion.section>)}


        {/* Row 6 */}
        {homeData.Row6 && (<motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full p-10  bg-gray-50'>
            <div className='w-full flex flex-col'>
              <h1 className='text-2xl mx-auto md:text-3xl font-semibold'>{homeData.Row5?.heading}</h1>
              <h1 className='mx-auto md:text-lg'>{homeData.Row5?.headingSmall}</h1>
            </div>

            {(homeData.Row6Listing.length != 0) && (
              <ServiceSlider services={homeData.Row6Listing} />
            )}



          </div>
        </motion.section>)}
        {/* Row 7 */}
        {homeData.Row7 && (<motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-10 animate-fade-in-down">
            <div className="col-span-2 rounded-md  flex justify-center items-center">
              {homeData.Row7?.image[0]?.url ? (<Image
                src={`${homeData.Row7?.image[0]?.url}`}
                alt={`${homeData.Row7?.image[0]?.url}`}
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

                {homeData.Row7?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {homeData.Row7?.content} </p>


              <Link href={homeData?.Row7?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {homeData?.Row7?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div>

          </div></motion.section>)}
        {/* Row 8 */}
        {homeData.Row8 && (<motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full bg-gray-50 md:pt-16 md:pb-16 animate-fade-in-down'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

              <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r  p-2 md:p-6">
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{homeData?.Row8?.heading}</h1>
                <p className="text-base text-gray-600 mb-2">
                  {homeData.Row8?.content}
                </p>
                {homeData.Row8Listing && (
                  <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                    {homeData.Row8Listing.map((listing, index) => (
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
                    {homeData?.Row8.btnLabel || "Get it More"}
                  </button>
                  <Link href={homeData?.Row8.btnAction || "/gosite"} className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                </div>
              </div>

              <div className="col-span-2 order-1 md:order-2 flex justify-center items-center">
                {homeData.Row8?.image?.url ? (<Image
                  src={`${homeData.Row8?.image.url}`}
                  alt={`${homeData.Row8?.image.url}`}
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
      </div>
    </>
  )
}

export default Landing
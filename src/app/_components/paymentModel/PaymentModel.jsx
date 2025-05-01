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
import { getpaymentModel, getUser2 } from '@/helper/helper'
import Loading from '../Loading'
import PhoneContact from './PhoneContact'
import Items from './Items'
import PhoneContactSmall from './PhoneContactSmall'
import ItemsSmall from './ItemsSmall'
import GooglePayButton from '@/lib/GooglePayButton'
import { useSelector } from 'react-redux'

function PaymentModel({paymentData}) {

  //const [paymentData, setpaymentData] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const price = useSelector((state) => state.counter.giftitem).toString();

  
  useEffect(() => {
    setShowLightbox(true); // page load pe modal open ho
  }, []);


  return (
    <>
      {/* Breadcrumbs */}
   


    
    <div>

{/* Row 1 */}
{paymentData.Row1 && (<motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1  md:gap-2 mx-4 md:mx-16 mb-10 animate-fade-in-down">
            <div className="col-span-2 rounded-md  flex justify-center items-center ">
              {paymentData.Row1?.image?.url ? (<Image
                src={`${paymentData.Row1?.image.url}`}
                alt={`${paymentData.Row1?.image.url}`}
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

                {paymentData.Row1?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {paymentData.Row1?.content} </p>


              <Link href={paymentData?.Row1?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {paymentData?.Row1?.btnLabel || "Get a ride"}
                </button>
              </Link>
             

            </div>

          </div></motion.section>)}




{/* Row3 */}
      {/* Light Box Gift Items */}
      {/* Medium and large devices */}
      {paymentData.Row3 && (<div>{showLightbox && (<div><div className="flex fixed inset-0 bg-black bg-opacity-60  justify-center items-center z-50 text-gray-600">

<div className="bg-white p-2 rounded-lg shadow-lg w-[90%] md:w-[800px]  h-[630px]">
  <div className='mx-auto flex flex-col items-center border-gray-100 border-b-2 border'>
    <div>


 {paymentData.Row3?.image?.url ? (<Image
                src={`${paymentData.Row3?.image.url}`}
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
    <div><h3 className='text-base md:text-lg mt-2 font-semibold'>The Gift Shop</h3></div>
    <div><p className='text-center text-sm mb-2'>Get that hardworking man the best gift, a night out with his future forever buddy!</p></div>
  </div>
  <div className='flex justify-center flex-col md:flex-row items-center mt-0 gap-2'>
    <div><PhoneContact data= {paymentData.Row3} /></div>
    <Items data= {paymentData.Row3} dataArray= {paymentData.Row3Listing}  />
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

</div></div>)}</div>)}
  
{/* Small devices */}
{showLightbox && (
           <div className="hidden fixed inset-0 bg-black bg-opacity-60 justify-center items-center z-50 text-gray-600">

           <div className="bg-white p-2 rounded-lg shadow-lg w-[90%] md:w-[800px] border-red-400 border h-[660px] mx-auto relative">
             <div className='mx-auto order-2 flex flex-col items-center'>
               <div className=''><Image
                 src={`${domain}/images/gift/gift.png`}
                 alt="No Image"
                 width={50}
                 height={50}
 
               /></div>
               <div><h3 className='text-base pt-2  font-semibold'>The Gift Shop</h3></div>
               <div><p className='text-center text-sm mt-2'>Get that hardworking man the best gift, a night out with his future forever buddy!</p></div>
             </div>
             <div className='flex order-1 justify-center flex-col items-center mt-1'>
              
               <ItemsSmall />
               <div className=''><PhoneContactSmall /></div>
             </div>
             <div className='flex justify-center border-gray-100 border-t pt-0 items-center gap-0 mt-0'>
               <div>  <button onClick={() => setShowLightbox(false)} className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                 Cancel
               </button></div>
               <div><button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                 Pay $250
               </button></div>
             </div>
           </div>
     
         </div>
      )}


      {/* Row 2 */}
      {paymentData.Row2 && (<motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className='w-full bg-gray-50 md:pt-16 md:pb-16 animate-fade-in-down'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

              <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r  p-2 md:p-6">
                <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{paymentData?.Row2?.heading}</h1>
                <p className="text-base text-gray-600 mb-2">
                  {paymentData.Row2?.content}
                </p>
                {paymentData.Row2Listing && (
                  <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
                    {paymentData.Row2Listing.map((listing, index) => (
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
                    {paymentData?.Row2.btnLabel || "Get it More"}
                  </button>
                  <Link href= {paymentData?.Row2.btnAction || "/gosite"} className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
                </div>
              </div>

              <div className="col-span-2 order-1 md:order-2 flex justify-center items-center">
                {paymentData.Row2?.image?.url ? (<Image
                  src={`${paymentData.Row2?.image.url}`}
                  alt={`${paymentData.Row2?.image.url}`}
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

        {/* Row 8 */}
        {paymentData.Row8 && (
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
                   
{paymentData.Row8?.image?.url ? (<Image
                src={`${paymentData.Row8?.image.url}`}
                alt={`${paymentData.Row8?.image.url}`}
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
                      <h2 className='text-2xl text-primary pt-3 pb-3'>{paymentData.Row8.headingSmall}</h2>
                      <p className='pb-6'>{paymentData.Row8?.content}</p>
                      </div>
                      <div><h3 className='mx-16 text-3xl'>{paymentData.Row8.heading}</h3></div>
                    </div>
                      </div>
                </div>
            </div>
            
            
            </motion.section>)}


        {/* Row 5 */}
        {paymentData.Row5 && (<motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >    <div
        className="w-[90%] mt-60 mx-auto h-64 md:h-80 bg-cover mb-60 bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-shot-amazing-cityscape-sunset_181624-45857.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740')" }}
      >
        <div className="col-span-2 flex justify-center  items-center h-full">
      
          <div className="text-white text-base p-10 md:p-28">
              <h3 className='text-3xl'>{paymentData.Row5.heading} </h3>
              <p>{paymentData.Row5.content}</p></div>
        </div>

        <div  className='pb-12'>  <div className="col-span-2 border border-gray-50 rounded-lg shadow-sm p-2 md:p-14">
              <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">

                {paymentData.Row5?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {paymentData.Row5?.content} </p>


              <Link href={paymentData?.Row5?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {paymentData?.Row5?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div></div>
      </div></motion.section>)}

        {/* Row 6 */}
        {paymentData.Row6 && (<motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className="grid grid-cols-1 mt-44 md:grid-cols-4 gap-1  md:gap-2 mx-4 md:mx-16 mb-44 animate-fade-in-down">
            <div className="col-span-2 rounded-md  flex justify-center items-center ">
              {paymentData.Row6?.image?.url ? (<Image
                src={`${paymentData.Row6?.image.url}`}
                alt={`${paymentData.Row6?.image.url}`}
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

                {paymentData.Row6?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {paymentData.Row6?.content} </p>


              <Link href={paymentData?.Row6?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {paymentData?.Row6?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div>

          </div></motion.section>)}

        {/* Row 7 */}
        {paymentData.Row7 && (<motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1  md:gap-2 mx-4 md:mx-16 mb-10 animate-fade-in-down">
            <div className="col-span-2 order-2 rounded-md  flex justify-center items-center ">
              {paymentData.Row7?.image?.url ? (<Image
                src={`${paymentData.Row7?.image.url}`}
                alt={`${paymentData.Row7?.image.url}`}
                width={450}
                height={400}

              />
              ) : (<Image
                src={`${domain}/images/noimage.jpg`}
                alt={`No Image`}
                width={450}
                height={400} />)}
            </div>

            <div className="col-span-2 order-1 border border-gray-50 rounded-lg shadow-sm p-2 md:p-6">
              <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">

                {paymentData.Row7?.heading}</h1>
              <p className="text-base text-gray-600 mb-6 md:mt-6 ">
                {paymentData.Row7?.content} </p>


              <Link href={paymentData?.Row7?.btnAction || "/gosite"} >
                <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                  {paymentData?.Row7?.btnLabel || "Get a ride"}
                </button>
              </Link>

            </div>

          </div></motion.section>)}

        {/* Row 7 - Row7 Lisging */}
        {paymentData.Row6Listing && (<motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className=""
            >
                <div className='w-full mb-30 p-10  bg-white'>
                    <div className='w-full flex flex-col'>
                        <h1 className='text-2xl mx-auto md:text-3xl font-semibold'>Our Services</h1>
                        <h1 className='mx-auto md:text-lg'>our Services</h1>
                        {/* <p className='mx-auto'>{paymentData.Row6Listing?.content}</p> */}
                    </div>
                   
                    
                              {(paymentData.Row6Listing.length != 0) && (
                                <ServiceSlider services={paymentData.Row6Listing} />
                               
                              )}
                  


                </div>
            </motion.section>)}   
        
       {/* Row 8 bg - image */}
         
       {paymentData.Row8 && (<motion.section
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
                  <h3 className='text-3xl'>{paymentData.Row7.heading} </h3>
                  <p>{paymentData.Row7.content}</p></div>
            </div>
          </div></motion.section>)}
    
      </div>
    </>
  )
}

export default PaymentModel
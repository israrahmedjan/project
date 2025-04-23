'use client'
import { ArrowRight, Camera, Clock, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Ticker from '../Ticker';
import ServiceSlider from '../ServiceSlider';


import { motion } from 'framer-motion';
import { getHome } from '@/helper/helper'

function Landing() {
const [homeData, sethomeData] = useState(null);
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const icons = {
    'vector': `${domain}images/icons/Vector.png`,
    'vector2': `${domain}images/icons/Vector2.png`,
    'camera': `${domain}images/icons/camera.png`,
    'handsdot': `${domain}images/icons/handsdot.png`,
    'handshake': `${domain}images/icons/handshake.png`,
    'pie': `${domain}images/icons/pie.png`,
    'circlearrow': `${domain}images/icons/circlearrow.png`,
    'graph': `${domain}images/icons/graph.png`,
    'heart': `${domain}images/icons/heart.png`,
  }
  const servicesIcons = {
    'user': `${domain}images/services/user.png`,
    'siezer': `${domain}images/services/siezer.png`,
    'map': `${domain}images/services/map.png`,
    'usersearch': `${domain}images/services/usersearch.png`,
    'like': `${domain}images/services/like.png`,
    
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
    const data = await getHome();
    console.log("Home Data 11", data);
    sethomeData(data);
    };
  
    useEffect(() => {
      console.log("Url live:",process.env.NEXT_PUBLIC_STRAPI_API_URL)
      getData();
    }, []);


  return (
    <>

<div>
  
  <pre>{JSON.stringify(homeData,null,2)}</pre></div>
  
      {/* Row 1 */}
      {homeData && (<motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className=""
      >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-10 animate-fade-in-down">
        <div className="col-span-2 rounded-md  flex justify-center items-center">


          <Image
            src={`${homeData.imageLilnk}`}
            alt="Landing page"
            width={450}
            height={400}

          />



        </div>

        <div className="col-span-2 border border-gray-50 rounded-lg shadow-sm p-2 md:p-6">
          <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">{homeData.heading}</h1>
          <p className="text-base text-gray-600 mb-6 md:mt-6 ">
          {homeData.content} </p>
          


          <button className="px-4 py-2 md:px-4 float-right md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
            Get a Ride
          </button>

        </div>

      </div></motion.section>)}
  
  

      {/* Row 2 */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className=""
      >
      <div className='w-full bg-gray-50 md:pt-16 md:pb-16 animate-fade-in-down'>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

          <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r  p-2 md:p-6">
          <h1 className="text-xl md:text-3xl md:pb-2 font-normal text-primary">Where does it come from standard?</h1>
            <p className="text-base text-gray-600 mb-2">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
            </p>
            <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-sm'>
              <li className="flex gap-2 items-start text-gray-700 italic">
                <Image src={icons.vector} alt="vector icon" width={20} height={20} className='' />
                <div className='flex flex-col'><span className=''>It is a long established fact that</span>
                <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
                </div>
              </li>
              <li className="flex gap-2 items-start text-gray-700 italic">
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
              </li>
            </ul>
            <div className='flex text-base flex-col md:flex-row  justify-between items-center gap-2'>
              <button className="px-4 py-2 md:px-4 md:py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                More About It
              </button>
              <Link href="#" className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
            </div>
          </div>

          <div className="col-span-2 order-1 md:order-2 flex justify-center items-center">


            <Image
              src="https://img.freepik.com/free-photo/fresh-green-plant-twig-with-smartphone_23-2148104488.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740"
              alt="Landing page"
              width={450}
              height={400}

            />
          </div>



        </div>
      </div></motion.section>


      {/* Row 3 */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className=""
      >
      <div className='w-full p-10'><h1 className='text-3xl flex justify-center animate-fade-in-down'>Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-4 ">

          <div className="col-span-4 md:col-span-4 mt-10 mb-10 flex flex-col md:flex-row justify-center gap-2 items-center">



            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-80">
              <img src="https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-businessman-model-dressed-elegant-black-classic-suit-posing-metrosexual_158538-9181.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740" alt="Profile Image" className="w-24 h-24 rounded-full object-cover mb-4" />
              <h2 className="text-lg font-medium mb-2">Micheal</h2>
              <p className="text-gray-600 text-center mb-4">
                Yeh thoda description ya text hoga jo image ke neeche dikhayega.
              </p>
              <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
                More About It
              </button>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-80">
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
            </div>
          </div>

        </div>
     
      </div></motion.section>

         {/* Row 4 */}
         <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className=""
      >
         <div className='w-full bg-gray-50 md:pt-16 md:pb-16'>

<div className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-2 mx-4 md:mx-16  mb-4 ">

  <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r md:mt-20 ">
  <h1 className="text-xl md:text-3xl md:pb-2 mt-4 mb-2 font-normal text-primary"> Where can I get some?</h1>
    <p className="text-base text-gray-600 mb-2">
    There are many variations of passages of Lorem Ipsum available, but the majority have 
    suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
    </p>
    <ul className='flex flex-col justify-start items-start gap-3 mb-8 text-gray-700 text-sm italic'>
      <li className="flex gap-2 items-start">
        <Image src={icons.vector} alt="vector icon" width={20} height={20} className='' />
        <div className='flex flex-col'><span className=''>It is a long established fact that</span>
        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
        </div>
      </li>
      <li className="flex gap-2 justify-center items-start text-gray-700 italic">
        <Image src={icons.handsdot} alt="vector icon" width={25} height={25} className='mt-1' />
        <div className='flex flex-col '><span className=''>It is a long established fact that</span>
        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
        </div>
      </li>
      <li className="flex gap-2 justify-center items-start text-gray-700 italic">
        <Image src={icons.handshake} alt="vector icon" width={25} height={25} className='mt-1' />
        <div className='flex flex-col '><span className=''>It is a long established fact that</span>
        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
        </div>
      </li>
      <li className="flex gap-2 items-start">
        <Image src={icons.pie} alt="vector icon" width={20} height={20} className='' />
        <div className='flex flex-col'><span className=''>It is a long established fact that</span>
        <span className=''>over 2000 years old. Richard McClintoc It is a long established</span>
        </div>
      </li>
    </ul>
    <div className='flex text-base flex-col md:flex-row justify-between items-center gap-2 pb-3 w-full'>
      <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
        More About It
      </button>
      <Link href="#" className='flex'><h2 className='font-normal text-primary hover:text-secondary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
    </div>
  </div>

  <div className="col-span-3 order-1 md:order-2 flex justify-center items-center ">


    <Image
      src="https://img.freepik.com/free-photo/smartphones-marble-table_23-2150837819.jpg?t=st=1745122512~exp=1745126112~hmac=623ac2fdbbed9e1c5ea3023e3d80af74debc7df27c520443237ece34e80f3c96&w=740"
      alt="Landing page"
      width={600}
      height={500}

    />
  </div>



</div>
</div></motion.section>

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

    </>
  )
}

export default Landing
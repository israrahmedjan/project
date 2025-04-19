import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Landing() {
  return (
    <>
{/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-10">
        <div className="col-span-2 rounded-md  flex justify-center items-center">


          <Image
            src="https://res.cloudinary.com/detdjaspz/image/upload/v1745027433/1_umaiqt.png"
            alt="Landing page"
            width={450}
            height={400}

          />
        </div>

        <div className="col-span-2 border border-gray-50 rounded-lg shadow-sm p-2 md:p-6">
          <h1 className="text-base md:text-3xl pb-2 font-normal text-primary">Why do we use it?</h1>
          <p className="text-base text-gray-500 mb-6 md:mt-6 ">
          It is a long established fact that a reader will be distracted by the readable content of a 
          page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters </p>
          <button className="px-4 float-right py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
      Get a Ride
    </button>
        </div>

      </div>

      {/* Row 2 */}
      
     <div className='w-full bg-gray-50 md:pt-16 md:pb-16'>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16  mb-4">
     
      <div className="col-span-2 order-2 md:order-1  border-gray-100 border-r  p-2 md:p-6">
      <h1 className="text-base md:text-4xl pb-2 font-normal text-primary md:w-[500px]">Where does it come from standard?</h1>
          <p className="text-base text-gray-500 mb-6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
          piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
          </p>
          <div className='flex text-base  justify-between items-center'>
          <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
      More About It
    </button>
          <Link href="#" className='flex'><h2 className='font-semibold text-primary md:text-[18px]'>Learn more about our app</h2><ArrowRight /></Link>
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
    </div>

  {/* Row 3 */}
  <div className='w-full p-10'><h1 className='text-3xl flex justify-center'>Meet Our Team</h1>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-4">
  
          <div className="col-span-4 md:col-span-4 mt-10 mb-10 flex flex-col md:flex-row justify-center gap-2 items-center">
         
 

          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-80">
    <img src="https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-businessman-model-dressed-elegant-black-classic-suit-posing-metrosexual_158538-9181.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740" alt="Profile Image" className="w-24 h-24 rounded-full object-cover mb-4" />
    <h2 className="text-xl font-semibold mb-2">Micheal</h2>
    <p className="text-gray-600 text-center mb-4">
      Yeh thoda description ya text hoga jo image ke neeche dikhayega.
    </p>
    <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
      More About It
    </button>
  </div>
  <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-80">
    <img src="https://img.freepik.com/free-photo/person-job-male-college-men_1150-1779.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740" alt="Profile Image" className="w-24 h-24 rounded-full object-cover mb-4" />
    <h2 className="text-xl font-semibold mb-2">John</h2>
    <p className="text-gray-500 text-center mb-4">
      Yeh thoda description ya text hoga jo image ke neeche dikhayega.
    </p>
    <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
      More About It
    </button>
  </div>
  <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-80">
    <img src="https://img.freepik.com/free-photo/stylish-guy-jacket-office-simple-wooden-surface_78826-2378.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740" alt="Profile Image" className="w-24 h-24 rounded-full object-cover mb-4" />
    <h2 className="text-xl font-semibold mb-2">Mitchel Star</h2>
    <p className="text-gray-500 text-center mb-4">
      Yeh thoda description ya text hoga jo image ke neeche dikhayega.
    </p>
    <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full  transition">
      More About It
    </button>
  </div>
          </div>

      </div>
      {/* Row 4 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mx-4 md:mx-16 mb-4">
        <div className="col-span-2 border-gray-50 rounded-md shadow-md border flex justify-center items-center">


          <Image
            src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437134.jpg?uid=R166975833&ga=GA1.1.1254879187.1728653419&semt=ais_hybrid&w=740"
            alt="Landing page"
            width={450}
            height={400}

          />
        </div>

        <div className="col-span-2 border border-gray-50 rounded-lg shadow-sm p-2 md:p-6">
        <h1 className="sm:text-sm md:text-3xl pb-2 font-normal text-primary">What is Lorem Ipsum?</h1>
          <p className="text-base text-gray-700 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="bg-secondary hover:bg-primary hover:text-white p-3 text-white font-semibold border border-red-300 rounded-md shadow-sm hover:shadow-lg transition">
            Get a Ride
          </button>
        </div>

      </div>
      </div>

    </>
  )
}

export default Landing
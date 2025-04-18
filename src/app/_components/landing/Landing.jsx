import Image from 'next/image'
import React from 'react'

function Landing() {
  return (
    <>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-2 mx-4 md:mx-16">
  <div className="col-span-2 border-gray-50 rounded-md shadow-md border flex justify-center items-center">

  
  <Image 
  src={`${process.env.NEXT_PUBLIC_FRONT_DOMAIN}/images/1.png`}
  alt="Landing page"
  width={450}
  height={400}
 
/>
  </div>
  
  <div className="col-span-3 border border-gray-50 rounded-lg shadow-sm p-2 md:p-6">
  <h1 className="text-base md:text-3xl pb-2 font-bold">What is Lorem Ipsum?</h1>
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
    </>
  )
}

export default Landing
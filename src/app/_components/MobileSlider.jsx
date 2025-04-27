'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function MobileSlider({ services }) {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const strapiDomain = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  return (
    <div className="mb-4 mt-10"> <div className="hidden md:block  mt-40  mb-20 relative w-full h-[230px] overflow-visible bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/detdjaspz/image/upload/v1745327663/other_plugins_woovmw.jpg')" }}>
                <div className='flex justify-between items-center gap-6'>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        
        <SwiperSlide>
  {services.map((service, index) => (
    <div key={index} className="w-full">
      Required full width div also
    </div>
  ))}
</SwiperSlide>


</Swiper> 
 </div>
            </div>
    </div>
  );
}

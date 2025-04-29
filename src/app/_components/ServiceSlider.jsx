'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function ServiceSlider({ services }) {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const strapiDomain = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  return (
    <div className="mx-4 md:mx-16 mb-4 mt-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg border-red-600 shadow-md text-center mb-4 p-6 hover:shadow-lg transition it">
              <h3 className="text-lg font-medium mb-4 w-[full] mx-auto">{service.heading}</h3>

              {/* <img
                src={service.image}
                alt={service.name}
                className="mx-auto mb-4 h-24 w-24 object-contain"
              /> */}

               {service?.image?.url ? (<Image
                  src={`${service?.image.url}`}
                  alt={`${service?.image.url}`}
                  width={100}
                  height={100}
                  className="mx-auto mb-4 h-24 w-24 object-contain"

                />
                ) : (<Image
                  src={`${domain}/images/noimage.jpg`}
                  alt={`No Image`}
                  width={100}
                  height={100} 
                  className="mx-auto mb-4 h-24 w-24 object-contain"
                  />)}

              <h4 className="text-lg  mb-2">{service.headingSmall}</h4>

              <p className="text-gray-600 text-sm">{service.content.substring(0,100)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

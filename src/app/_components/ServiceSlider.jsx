'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ServiceSlider({ services }) {
  return (
    <div className="mx-4 md:mx-16 mb-4 mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md text-center p-6 hover:shadow-lg transition it">
              <h3 className="text-xl font-semibold mb-4 w-full mx-auto">{service.title}</h3>

              <img
                src={service.image}
                alt={service.name}
                className="mx-auto mb-4 h-24 w-24 object-contain"
              />

              <h4 className="text-lg font-medium mb-2">{service.name}</h4>

              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

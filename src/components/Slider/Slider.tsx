"use client";

import React from "react";
import type { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface SliderProps {
  children: React.ReactNode[];
}

const Slider: FC<SliderProps> = ({ children }) => {
  return (
    <Swiper
      spaceBetween={12}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        430: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
      modules={[Pagination]}
      className="cursor-grab"
    >
      {children.map((child, i) => (
        <SwiperSlide key={i} className="!h-fit mb-12">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

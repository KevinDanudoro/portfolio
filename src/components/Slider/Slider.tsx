"use client";

import React from "react";
import type { FC } from "react";
import dynamic from "next/dynamic";

import { Pagination } from "swiper/modules";

const Swiper = dynamic(() => import("swiper/react").then((lib) => lib.Swiper));
const SwiperSlide = dynamic(() =>
  import("swiper/react").then((lib) => lib.SwiperSlide)
);

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

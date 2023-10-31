"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

// Import the images and types from the 'images.ts' file
import { images, Image } from "@/images"; // Adjust the import path

export default function ImageCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper rounded-2xl"
      >
        {images.map((image: Image) => (
          <SwiperSlide key={image.id}>
            <img src={image.path} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

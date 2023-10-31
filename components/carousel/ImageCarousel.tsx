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

import { CarouselImages } from "@/types";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

// Import the images and types from the 'images.ts' file
// import { images, Image } from "@/images"; // Adjust the import path

export default async function ImageCarousel() {
  const images = await client.fetch<CarouselImages[]>(
    `*[_type == "carouselImages"]`
  );
  console.log(images);

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
        {images.map((image) => (
          <SwiperSlide key={image._id}>
            <img
              src={urlForImage(image.image).url()}
              alt={image.alt}
              height={300}
              width={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

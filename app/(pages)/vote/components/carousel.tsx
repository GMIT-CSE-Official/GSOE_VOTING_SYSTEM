"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const Carousel = ({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) => {
  return (
    <Swiper
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper !w-full !h-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width={0}
            height={0}
            sizes="auto"
            className="w-full aspect-video object-cover object-center "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

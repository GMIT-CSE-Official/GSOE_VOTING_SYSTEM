"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";

const Images = [
  "bali-1.png",
  "bali-2.png",
  "bali-3.png",
  "bali-4.png",
  "bali-5.png",
];

const Carousel = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
      >
        {Images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <Image
                src={`/assets/Images/${image}`}
                alt="1"
                width={0}
                height={0}
                sizes="auto"
                className="border-white border-[12px] h-[240px] w-[200px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;

import React from "react";
import slider from "@/assets/iphone14.png";
import apple from "@/assets/apple.png";
import product from "@/assets/product.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./icons/right";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 5 }, (_, i) => i).map(id => (
          <SwiperSlide className=" bg-black px-16 w-full">
            <div className="flex  items-center ">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-6">
                  <Image src={apple} alt="phone logo" />
                  <p className="font-sans font-normal text-base text-white">
                    iPhone 14 Series
                  </p>
                </div>
                <p className="font-sans w-[71%] font-semibold text-5xl text-white">
                  Up to 10% off Voucher
                </p>
                <Link
                  href="#"
                  className="font-sans font-normal text-base text-white flex items-center gap-2"
                >
                  Shop Now <ArrowRight />
                </Link>
              </div>
              <Image className="" src={slider} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;

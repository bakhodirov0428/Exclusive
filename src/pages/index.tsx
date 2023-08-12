import { Inter } from "next/font/google";
import Header from "@/components/header";
import Link from "next/link";
import Left from "@/components/icons/left";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="container py-10 flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <Link
            href="#"
            className="font-sans font-normal text-base flex items-center justify-between text-black"
          >
            Woman’s Fashion
            <Left />
          </Link>
          <Link
            href="#"
            className="font-sans font-normal text-base flex items-center justify-between text-black"
          >
            Men’s Fashion
            <Left />
          </Link>
          <Link href="#" className="font-sans font-normal text-base text-black">
            Electronics
          </Link>
          <Link href="#" className="font-sans font-normal text-base text-black">
            Home & Lifestyle
          </Link>
          <Link href="#" className="font-sans font-normal text-base text-black">
            Medicine
          </Link>
          <Link href="#" className="font-sans font-normal text-base text-black">
            Sports & Outdoor
          </Link>
          <Link href="#" className="font-sans font-normal text-base text-black">
            Baby’s & Toys
          </Link>
          <Link href="#" className="font-sans font-normal text-base text-black">
            Groceries & Pets
          </Link>
          <Link href="#" className="font-sans font-normal text-base text-black">
            Health & Beauty
          </Link>
        </div>
        <Swiper></Swiper>
      </div>
    </>
  );
}

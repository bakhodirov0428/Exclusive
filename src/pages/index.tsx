import { Inter } from "next/font/google";
import Header from "@/components/header";
import Link from "next/link";
import Left from "@/components/icons/left";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import star from "@/assets/star.png";
import kalonka from "@/assets/kalonka.png";
import service from "@/assets/Services.png";
import service2 from "@/assets/Services2.png";
import service3 from "@/assets/Services3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LeftBtn from "@/components/icons/leftbtn";
import RightBtn from "@/components/icons/rightbtn";
import Phone from "@/components/icons/phone";
import Time from "@/components/time";
import Timer from "@/components/timer";
import Card from "@/components/card";
import Footre from "@/components/footre";
import axios from "axios";
import Slider from "@/components/sliderBar";

const inter = Inter({ subsets: ["latin"] });
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function Home() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const productResponse = await axios.get<Product[]>(
          "https://fakestoreapi.com/products?limit=5"
        );

        setProduct(productResponse.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    })();
  }, []);
  return (
    <>
      <Header />
      <div className="flex flex-col ">
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
            <Link
              href="#"
              className="font-sans font-normal text-base text-black"
            >
              Electronics
            </Link>
            <Link
              href="#"
              className="font-sans font-normal text-base text-black"
            >
              Home & Lifestyle
            </Link>
            <Link
              href="#"
              className="font-sans font-normal text-base text-black"
            >
              Medicine
            </Link>
            <Link
              href="#"
              className="font-sans font-normal text-base text-black"
            >
              Sports & Outdoor
            </Link>
            <Link
              href="#"
              className="font-sans font-normal text-base text-black"
            >
              Baby’s & Toys
            </Link>
            <Link
              href="#"
              className="font-sans font-normal text-base text-black"
            >
              Groceries & Pets
            </Link>
            <Link
              href="#"
              className="font-sans font-normal text-base text-black"
            >
              Health & Beauty
            </Link>
          </div>
          <hr className=" rotate-90 border  w-[384px] absolute mb-10" />
          <div className="w-[80%] ">
            <Slider />
          </div>
        </div>
        <div className="mt-36 container flex flex-col overflow-hidden">
          <div className=" flex flex-col gap-6">
            <p className=" flex items-center gap-4 font-sans font-semibold text-base text-[#DB4444]">
              <span className="w-5 h-10 bg-[#DB4444] rounded"></span>
              Today’s
            </p>
            <div className=" justify-between flex items-center gap-[87px]">
              <div className="flex  items-center gap-[87px]">
                <h2 className="font-sans font-semibold text-4xl text-black">
                  Flash Sales
                </h2>
                <div className="flex flex-col items-center ">
                  <div className="flex items-center gap-9 ml-3">
                    <p className="font-sans font-medium text-xs">Date</p>
                    <p className="font-sans font-medium text-xs">Hours</p>
                    <p className="font-sans font-medium text-xs">Minutes</p>
                    <p className="font-sans font-medium text-xs">Seconds</p>
                  </div>
                  <Time />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <Link href="#">
                  <LeftBtn />
                </Link>
                <Link href="#">
                  <RightBtn />
                </Link>
              </div>
            </div>
            <div className=" overflow-auto justify-between flex items-center mb-10 gap-[30px] scrollbar-none">
              <Card />
            </div>

            <div className="flex justify-center">
              <button className="w-[234px] mb-[76px] font-sans font-medium text-base text-white py-4 px-12 bg-[#DB4444] rounded">
                View All Products
              </button>
            </div>
            <hr className=" text-gray-950 mb-20" />
          </div>
          <div className=" flex flex-col gap-[60px]">
            <p className=" flex items-center gap-4 font-sans font-semibold text-base text-[#DB4444]">
              <span className="w-5 h-10 bg-[#DB4444] rounded"></span>
              Categories
            </p>
            <div className="flex items-center justify-between">
              <h2 className="font-sans font-semibold text-4xl text-black">
                Browse By Category
              </h2>
              <div className="flex items-center gap-2">
                <div
                  data-swiper="product__prev"
                  className="cursor-pointer rounded-full bg-white px-2 py-2"
                >
                  <LeftBtn />
                </div>
                <div
                  data-swiper="product__next"
                  className="cursor-pointer rounded-full bg-white px-2 py-2"
                >
                  <RightBtn />
                </div>
              </div>
            </div>
            <div>
              <Swiper
                loop
                slidesPerView={6}
                navigation={{
                  prevEl: "div[data-swiper=product__prev]",
                  nextEl: "div[data-swiper=product__next]",
                }}
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 5000 }}
                className="mb-10"
              >
                {Array.from({ length: 10 }, (_, i) => i).map(id => (
                  <SwiperSlide key={id} className="flex ">
                    <div className="text w-[170px] hover:bg-[#DB4444]  rounded flex flex-col items-center justify-center gap-4 px-6 py-6 border">
                      <Phone />
                      <p className="font-sans font-normal text-base text-black ">
                        Phones
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <hr className=" text-gray-950 mb-20" />
          </div>
          <div className=" flex flex-col gap-[60px]">
            <p className=" flex items-center gap-4 font-sans font-semibold text-base text-[#DB4444]">
              <span className="w-5 h-10 bg-[#DB4444] rounded"></span>
              This Month
            </p>
            <div className="flex items-center justify-between">
              <h2 className="font-sans font-semibold text-4xl text-black">
                Best Selling Products
              </h2>
              <button className="font-sans font-medium text-base text-white py-4 px-12 bg-[#DB4444] rounded">
                View All
              </button>
            </div>
            <div className="flex items-center gap-[30px]">
              {product.map(el => (
                <div className="flex flex-col gap-4 " key={el.id}>
                  <div className=" p-[49px] bg-[#F5F5F5] rounded">
                    <Image src={el.image} alt="" width={150} height={150} />
                  </div>
                  <h2>{el.title}</h2>
                  <div className="flex items-center gap-3">
                    <p className="font-sans font-medium text-base text-[#DB4444]">
                      ${el.price}
                    </p>
                    <del className="font-sans font-medium text-base text-gray-500 ">
                      $160
                    </del>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={star} alt="" />
                    <p className="font-sans font-semibold text-sm text-gray-500">
                      (88)
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-black flex items-center justify-between py-[69px] px-[56px]">
              <div className="flex flex-col gap-9">
                <p className="font-sans font-semibold text-base text-[#0f6]">
                  Categories
                </p>
                <h2 className="font-sans w-[57%] font-semibold text-5xl text-white">
                  Enhance Your Music Experience
                </h2>
                <Timer />
                <button className="w-[30%] font-sans font-medium text-base text-white py-4 px-12 bg-[#0F6] rounded">
                  View All
                </button>
              </div>
              <Image src={kalonka} alt="" />
            </div>
            <div className="flex flex-col gap-[60px]">
              <p className="flex items-center gap-4 font-sans font-semibold text-base text-[#DB4444]">
                <span className="w-5 h-10 bg-[#DB4444] rounded"></span>
                Our Products
              </p>
              <div className="flex items-center justify-between">
                <h2 className="font-sans font-semibold text-4xl text-black">
                  Explore Our Products
                </h2>
                <div className="flex items-center gap-2">
                  <div
                    data-swiper="product__prev"
                    className="cursor-pointer rounded-full bg-white px-2 py-2"
                  >
                    <LeftBtn />
                  </div>
                  <div
                    data-swiper="product__next"
                    className="cursor-pointer rounded-full bg-white px-2 py-2"
                  >
                    <RightBtn />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-[30px]">
                {product.map(item => (
                  <div key={item.id} className="flex flex-col gap-4 ">
                    <div className=" p-[49px] bg-[#F5F5F5] rounded">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={270}
                        height={250}
                      />
                    </div>

                    <h2>{item.title}</h2>
                    <div className="flex items-center gap-3">
                      <p className="font-sans font-medium text-base text-[#DB4444]">
                        $120
                      </p>
                      <Image src={star} alt="" />
                      <p className="font-sans font-semibold text-sm text-gray-500">
                        (35)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button className=" w-[234px] mb-[76px] font-sans font-medium text-base text-white py-4 px-12 bg-[#DB4444] rounded">
                  View All Products
                </button>
              </div>
              <hr className=" text-gray-950 mb-20" />
            </div>
          </div>
          <div className=" flex flex-col gap-[60px]">
            <p className="flex items-center gap-4 font-sans font-semibold text-base text-[#DB4444]">
              <span className="w-5 h-10 bg-[#DB4444] rounded"></span>
              Featured
            </p>
            <div className="flex items-center justify-between">
              <h2 className="font-sans font-semibold text-4xl text-black">
                New Arrival
              </h2>
            </div>
            <div className="grid grid-cols-2  mb-9  gap-[30px]">
              <div className="rounded  flex p-9 flex-col items-start justify-end gap-4 bg-black eatured_bg ">
                <h2 className="font-sans font-semibold text-2xl text-white">
                  PlayStation 5
                </h2>
                <p className="font-sans font-normal text-sm text-white">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="font-sans font-medium text-sm text-white underline">
                  Shop Now
                </button>
              </div>
              <div className="flex flex-col gap-[30px] ">
                <div className="girl_bg  rounded flex p-9 flex-col items-start justify-end gap-4">
                  <h2 className="font-sans font-semibold text-2xl text-white">
                    PlayStation 5
                  </h2>
                  <p className="font-sans font-normal text-sm text-white">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <button className="font-sans font-medium text-sm text-white underline">
                    Shop Now
                  </button>
                </div>
                <div className="flex items-center gap-[30px]">
                  <div className="speakers_bg py-10 bg-black fle flex-col items-start justify-end gap-4">
                    <h2 className="font-sans font-semibold text-2xl text-white">
                      Speakers
                    </h2>
                    <p className="font-sans font-normal text-sm text-white">
                      Amazon wireless speakers
                    </p>
                    <button className="font-sans font-medium text-sm text-white underline">
                      Shop Now
                    </button>
                  </div>
                  <div className="speakers_bg p-9 bg-black fle flex-col justify-end gap-4">
                    <h2 className="font-sans font-semibold text-2xl text-white">
                      Speakers
                    </h2>
                    <p className="font-sans font-normal text-sm text-white">
                      Amazon wireless speakers
                    </p>
                    <button className="font-sans font-medium text-sm text-white underline">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <ul className="flex items-center justify-center gap-[88px] mb-[62px]">
              <li className="flex flex-col items-center gap-6">
                <Image src={service} alt="" />
                <div className="flex flex-col items-center gap-2">
                  <h2 className="font-sans font-semibold text-xl text-black">
                    FREE AND FAST DELIVERY
                  </h2>
                  <p className="font-sans font-normal text-sm text-black">
                    Free delivery for all orders over $140
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center gap-6">
                <Image src={service2} alt="" />
                <div className="flex flex-col items-center gap-2">
                  <h2 className="font-sans font-semibold text-xl text-black">
                    24/7 CUSTOMER SERVICE
                  </h2>
                  <p className="font-sans font-normal text-sm text-black">
                    Friendly 24/7 customer support
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center gap-6">
                <Image src={service3} alt="" />
                <div className="flex flex-col items-center gap-2">
                  <h2 className="font-sans font-semibold text-xl text-black">
                    MONEY BACK GUARANTEE
                  </h2>
                  <p className="font-sans font-normal text-sm text-black">
                    We reurn money within 30 days
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex items-center justify-end mb-9">
              <Link href="#" className="p-3 rounded-full bg-[#F5F5F5] w-[46px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footre />
    </>
  );
}

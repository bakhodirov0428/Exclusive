import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footre from "@/components/footre";
import jostik from "@/assets/smolljostic.png";
import bigjostic from "@/assets/bigjostic.png";
import star from "@/assets/star.png";
import LeftBtn from "@/components/icons/leftbtn";
import RightBtn from "@/components/icons/rightbtn";
import Card from "@/components/card";
import Count from "@/components/count";

export default function Product() {
  return (
    <>
      <Header />
      <div className="container flex flex-col mt-20">
        <div className="flex items-center gap-3 mb-20">
          <p className="font-sans font-normal text-sm text-gray-500">
            Account / Gaming /
          </p>
          <p className="font-sans font-normal text-sm text-black">
            Havic HV G-92 Gamepad
          </p>
        </div>
        <div className="flex justify-between gap-[70px] mb-[140px]">
          <div className="flex items-center gap-[30px]">
            <div className="flex flex-col gap-4">
              <div className="bg-gray-500 rounded py-3 px-6 flex items-center">
                <Image src={jostik} alt="" />
              </div>
              <div className="bg-gray-500 rounded py-3 px-6 flex items-center">
                <Image src={jostik} alt="" />
              </div>{" "}
              <div className="bg-gray-500 rounded py-3 px-6 flex items-center">
                <Image src={jostik} alt="" />
              </div>
              <div className="bg-gray-500 rounded py-3 px-6 flex items-center">
                <Image src={jostik} alt="" />
              </div>
            </div>
            <div className="bg-gray-500 rounded py-[95px] flex items-center">
              <Image src={bigjostic} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-sans font-semibold text-2xl text-black">
              Havic HV G-92 Gamepad
            </h2>
            <div className="flex items-center gap-2">
              <Image src={star} alt="" />
              <p className="font-sans font-normal text-sm text-gray-600">
                (150 Reviews)
              </p>
              |
              <p className="font-sans font-normal text-sm text-[#0F6]">
                In Stock
              </p>
            </div>
            <p className="font-sans font-normal text-2xl text-black">$192.00</p>
            <p className="font-sans font-normal text-sm text-black">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <hr />
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <p className="font-sans font-normal text-xl text-black">
                  Colours:
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-4 cursor-pointer hover:w-3 hover:h-3 hover:border hover:border-black h-4 rounded-full bg-[#A0BCE0]"></span>
                  <span className="w-4 cursor-pointer hover:w-3 hover:h-3 hover:border hover:border-black h-4 rounded-full bg-[#E07575]"></span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className="font-sans font-normal text-xl text-black">
                  Size:
                </p>
                <div className="flex items-center gap-2">
                  <p className="py-[6px] px-[7px] hover:text-white hover:bg-red-500 rounded hover:border-transparent cursor-pointer border border-gray-500 text-center font-sans font-medium text-sm text-black">
                    XS
                  </p>
                  <p className="py-[6px] px-[7px] hover:text-white hover:bg-red-500 rounded hover:border-transparent cursor-pointer border border-gray-500 text-center font-sans font-medium text-sm text-black">
                    S
                  </p>
                  <p className="py-[6px] px-[7px] hover:text-white hover:bg-red-500 rounded hover:border-transparent cursor-pointer border border-gray-500 text-center font-sans font-medium text-sm text-black">
                    M
                  </p>
                  <p className="py-[6px] px-[7px] hover:text-white hover:bg-red-500 rounded hover:border-transparent cursor-pointer border border-gray-500 text-center font-sans font-medium text-sm text-black">
                    L
                  </p>
                  <p className="py-[6px] px-[7px] hover:text-white hover:bg-red-500 rounded hover:border-transparent cursor-pointer border border-gray-500 text-center font-sans font-medium text-sm text-black">
                    XL
                  </p>
                </div>
              </div>
              <Count />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className=" flex items-center gap-4 font-sans font-semibold text-base text-[#DB4444]">
            <span className="w-5 h-10 bg-[#DB4444] rounded"></span>
            Related Item
          </p>
          <div className="flex items-center gap-6">
            <Card />
          </div>

          <hr className="container text-gray-950 mb-20" />
        </div>
      </div>
      <Footre />
    </>
  );
}

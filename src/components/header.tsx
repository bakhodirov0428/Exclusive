import Link from "next/link";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Heart from "./icons/heart";
import Cart from "./icons/cart";
import Image from "next/image";
import logo from "@/assets/Exclusive.svg";
import Lupa from "./icons/lupa";

const Header = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-black py-3">
          <div className="container flex items-center justify-center">
            <div className="flex items-center gap-56">
              <div className="flex items-center gap-2">
                <h2 className="font-sans font-normal text-sm text-white">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                </h2>
                <Link
                  href="#"
                  className="font-sans font-semibold text-white text-sm underline"
                >
                  ShopNow
                </Link>
              </div>
              {/* <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="font-sans text-white font-normal text-sm flex items-center gap-1">
                    Language
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className=" bg-white rounded-md p-4 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                  >
                    <DropdownMenu.Item className="font-sans text-black cursor-pointer font-normal text-sm">
                      English
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="font-sans text-black cursor-pointer font-normal text-sm">
                      Russian
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="font-sans text-black cursor-pointer font-normal text-sm">
                      O'zbek
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root> */}
            </div>
          </div>
        </div>
        <div className="bg-white">
          <nav className="flex pt-[47px] pb-4 items-center container justify-between">
            <Link href="/">
              <Image src={logo} alt="" />
            </Link>
            <ul className="flex items-center gap-12">
              <li className="">
                <Link
                  href="/"
                  className="font-sans text-base font-normal text-black"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href="#"
                  className="font-sans text-base font-normal text-black"
                >
                  Contact
                </Link>
              </li>
              <li className="">
                <Link
                  href="#"
                  className="font-sans text-base font-normal text-black"
                >
                  About
                </Link>
              </li>
              <li className="">
                <Link
                  href="#"
                  className="font-sans text-base font-normal text-black"
                >
                  Sing Up
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  className="pl-5 outline-none pr-5 py-2 w-[243px] bg-[#F5F5F5] rounded-[4px]"
                  placeholder="What are you looking for?"
                />
                <Lupa />
              </div>
              <div className="flex items-center gap-4">
                <Heart />
                <Cart />
              </div>
            </div>
          </nav>
          <hr />
        </div>
      </div>
    </>
  );
};
export default Header;

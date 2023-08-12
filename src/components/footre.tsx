import React from "react";
import Send from "./icons/send";
import Link from "next/link";
import Image from "next/image";
import qrcode from "@/assets/Qr Code.png";
import appstore from "@/assets/AppStore.png";
import google from "@/assets/GooglePlay.png";
import Instagram from "./icons/instagram";
import Facebook from "./icons/fasebook";
import Twitter from "./icons/twitter";
import LinkEdin from "./icons/linkidin";
const Footre = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container pt-20 flex justify-between mb-[108px]">
          <div className="flex flex-col gap-6">
            <h2 className="font-sans font-bold text-2xl text-white">
              Exclusive
            </h2>
            <p className="font-sans font-bold text-xl text-white">Subscribe</p>
            <p className="font-sans font-bold text-xl text-white">
              Get 10% off your first order
            </p>
            <div className="relative">
              <input
                type="text"
                className="outline-none text-white rounded bg-black py-3 pr-16 pl-4 border border-white"
                placeholder="Enter your email"
              />
              <Link href="#" className="absolute top-3.5 right-4">
                <Send />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-sans font-bold text-2xl text-white">Support</h2>
            <p className="font-sans font-bold text-xl text-white">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="font-sans font-bold text-xl text-white">
              exclusive@gmail.com
            </p>
            <p className="font-sans font-bold text-xl text-white">
              +88015-88888-9999
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-sans font-bold text-2xl text-white">Account</h2>
            <p className="font-sans font-bold text-xl text-white">My Account</p>
            <p className="font-sans font-bold text-xl text-white">
              Login / Register
            </p>
            <p className="font-sans font-bold text-xl text-white">Cart</p>
            <p className="font-sans font-bold text-xl text-white">Wishlist</p>
            <p className="font-sans font-bold text-xl text-white">Shop</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-sans font-bold text-2xl text-white">
              Quick Link
            </h2>
            <p className="font-sans font-bold text-xl text-white">
              Privacy Policy
            </p>
            <p className="font-sans font-bold text-xl text-white">
              Terms Of Use
            </p>
            <p className="font-sans font-bold text-xl text-white">FAQ</p>
            <p className="font-sans font-bold text-xl text-white">Contact</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-sans font-bold text-2xl text-white">
              Download App
            </h2>
            <p className="font-sans font-bold text-xs text-white">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center gap-2">
              <Image src={qrcode} alt="" />
              <div className="flex flex-col gap-1">
                <Image src={google} alt="" />
                <Image src={appstore} alt="" />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Facebook />
              <Twitter />
              <Instagram />
              <LinkEdin />
            </div>
          </div>
        </div>
        <hr className="text-gray-500 mb-4" />
        <h2 className="font-sans font-normal py-6 text-center text-base text-[#FFFFFF]">
          Copyright Rimel 2022. All right reserved
        </h2>
      </div>
    </>
  );
};
export default Footre;

import { ImLinkedin } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-center bg-[#212934] pt-12">
        <div className="w-[95%] md:w-[90%] xl:w-[1320px]">
          <div
            style={{ borderBottom: "1px solid gray" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5 pt-7 pb-10 text-white"
          >
            <div className="text-start md:mb-0 mb-16">
              <h1
                style={{ borderBottom: "1px solid gray" }}
                className="text-[#59ab6e] text-3xl pb-5 mb-4 font-semibold"
              >
                Zay Shop
              </h1>
              <div className="flex gap-2 text-lg robotoFont pb-3 items-center">
                <MdLocationOn size={20} /> 123 Consectetur at ligula 10660
              </div>
              <div className="flex gap-2 text-lg robotoFont pb-3 items-center hover:text-[#68bb7d] cursor-pointer">
                <FaPhone size={20} /> 010-020-0340
              </div>
              <div className="flex gap-2 text-lg robotoFont pb-3 items-center hover:text-[#68bb7d] cursor-pointer">
                <MdEmail size={20} /> info@company.com
              </div>
            </div>
            <div className="text-start md:mb-0 mb-16">
              <h1
                style={{ borderBottom: "1px solid gray" }}
                className="text-white font-extralight text-3xl pb-5 mb-4 "
              >
                Products
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Luxury
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Sport Wear
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Men's Shoes
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Women's Shoes
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Popular Dress
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Gym Accessories
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Sport Shoes
              </h1>
            </div>
            <div className="text-start md:mb-0 mb-16">
              <h1
                style={{ borderBottom: "1px solid gray" }}
                className="text-white font-extralight text-3xl pb-5 mb-4 "
              >
                Further Info
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Home
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                About Us
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Shop Locations
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                FAQs
              </h1>
              <h1 className="text-lg font-medium hover:text-[#68bb7d] cursor-pointer pb-3 robotoFont">
                Contact
              </h1>
            </div>
          </div>
          <div className="flex md:flex-row md:justify-between flex-col py-8">
            <div className="flex gap-2 mb-4 md:mb-0">
              <div className="rounded-full p-2 border border-[#2d343f] bg-transparent hover:bg-[#cfd6e1]">
                <CgFacebook
                  className="hover:text-[#212934] text-[#cfd6e1]"
                  size={25}
                />
              </div>
              <div className="rounded-full p-2 border border-[#2d343f] bg-transparent hover:bg-[#cfd6e1]">
                <AiOutlineInstagram
                  className="hover:text-[#212934] text-[#cfd6e1]"
                  size={25}
                />
              </div>
              <div className="rounded-full p-2 border border-[#2d343f] bg-transparent hover:bg-[#cfd6e1]">
                <AiOutlineTwitter
                  className="hover:text-[#212934] text-[#cfd6e1]"
                  size={25}
                />
              </div>
              <div className="rounded-full p-2 border border-[#2d343f] bg-transparent hover:bg-[#cfd6e1]">
                <ImLinkedin
                  className="hover:text-[#212934] text-[#cfd6e1]"
                  size={25}
                />
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Email address"
                className="border font-normal border-[#2d343f] bg-transparent rounded-s-md p-2 text-lg "
              />
              <button className="bg-[#59ab6e] text-[#cfd6e1] robotoFont p-2 px-5 text-lg font-normal rounded-e-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1d242d] flex justify-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1320px]">
          <div className="text-start py-7">
            <h1 className="text-[#cfd6e1] text-lg robotFont">
              Copyright © 2021 Company Name | Designed by <u>TemplateMo</u>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import img from "../../assets/images/logo_footer.png";
import { MdLocationOn } from "react-icons/md";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <div className="bg-[#222222]">
        <div className="flex justify-center">
          <div className="xl:w-[1170px] lg:w-[950px] md:w-[730px] w-[280px]">
            <div className="grid my-36 grid-cols-1 xl:grid-cols-8 md:grid-cols-7">
              <div className="flex items-center xl:col-span-2 md:col-span-2 my-5">
                <img className="" src={img} alt="" />
              </div>
              <input
                type="text"
                placeholder="Enter your email"
                className="my-7  md:ml-4 md:col-span-3 xl:col-span-4 bg-white px-8 py-5 placeholder:text-gray-400 placeholder:text-lg w-full"
              />
              <h1 className="md:w-full w-2/3  bg-[#151515] my-7 cursor-pointer text-center md:col-span-2 xl:col-span-2 py-5 font-bold hover:bg-white hover:text-[#151515] text-white">
                SBSCRIBE NOW
              </h1>
            </div>
            <div className="grid mb-36 grid-cols-1 md:grid-cols-4 xl:gap-14 md:gap-5">
              <div className="text-start mb-8 text-white">
                <h1 className="text-2xl md:text-xl font-bold py-5">
                  USEFUL LINK
                </h1>
                <h1 className="md:text-base text-lg py-1">Home</h1>
                <h1 className="md:text-base text-lg py-1">About</h1>
                <h1 className="md:text-base text-lg py-1">What we do</h1>
                <h1 className="md:text-base text-lg py-1">Portfolio</h1>
                <h1 className="md:text-base text-lg py-1">Contact US</h1>
              </div>
              <div className="text-start mb-8 text-white">
                <h1 className="text-2xl md:text-xl font-bold py-5">NEWS</h1>
                <h1 className="md:text-base text-lg py-1">
                  It is a long established
                </h1>
                <h1 className="md:text-base text-lg py-1">
                  fact that a reader will
                </h1>
                <h1 className="md:text-base text-lg py-1">
                  be distracted by the
                </h1>
                <h1 className="md:text-base text-lg py-1">
                  readable content of a
                </h1>
                <h1 className="md:text-base text-lg py-1">page when</h1>
              </div>
              <div className="text-start mb-8 text-white">
                <h1 className="text-2xl md:text-xl font-bold py-5">UCOMPANY</h1>
                <h1 className="md:text-base text-lg py-1">
                  It is a long established
                </h1>
                <h1 className="md:text-base text-lg py-1">
                  readable content of a
                </h1>
                <h1 className="md:text-base text-lg py-1">
                  act that a reader will
                </h1>
                <h1 className="md:text-base text-lg py-1">
                  be distracted by the
                </h1>
                <h1 className="md:text-base text-lg py-1">page when</h1>
              </div>
              <div className="text-start mb-8 text-white">
                <h1 className="text-2xl md:text-xl font-bold py-5">
                  CONTACT US
                </h1>
                <h1 className="md:text-base text-lg py-1 flex gap-3">
                  {" "}
                  <MdLocationOn /> Location
                </h1>
                <h1 className="md:text-base text-lg py-1 flex gap-3">
                  <IoIosCall />
                  Call +01 1234567890
                </h1>
                <h1 className="md:text-base text-lg py-1 flex gap-3">
                  <AiOutlineMail />
                  demo@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#151515]">
        <div className="flex justify-center">
          <div className="xl:w-[1170px] lg:w-[950px] md:w-[730px] w-[350px]">
            <div className="flex flex-col md:justify-center text-center my-6 md:flex-row">
              <h1 className="text-gray-400 text-lg mb-5">
                © 2020 All Rights Reserved. Free Html Template
              </h1>
              <div className="flex gap-4 justify-center">
                <FaFacebookF size={27} color="white" />
                <FaTwitter size={27} color="white" />
                <AiFillLinkedin size={27} color="white" />
                <BsInstagram size={27} color="white" />
                <BsYoutube size={27} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

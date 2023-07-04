import React from "react";
import img from "../../../../assets/images/prot1.png";
import img1 from "../../../../assets/images/prot2.png";
import img2 from "../../../../assets/images/prot3.png";
import img3 from "../../../../assets/images/prot4.png";
import { AiOutlineSearch } from "react-icons/ai";
import { GrLink } from "react-icons/gr";

function Container() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[95%] xl:w-[1170px]">
          <div className="flex justify-start mt-16 mb-12">
            <div>
              <h1 className="text-5xl font-bold text-[#323232]">We Have Done Portfolio</h1>
              <div className="mt-4 w-20 h-2 bg-[#2e2f34]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6">
            <div
              className="cardd  mb-6 bg-cover shadow-xl bg-no-repeat h-[60vh] overflow-hidden w-full bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${img})` }}
            >
              <div className="text-start cardText bg-white p-9">
                <div className="flex card_bug ">
                  <div className="bg-white shadow-2xl flex items-center p-5 rounded-full">
                    <AiOutlineSearch color="black" size={18} />
                  </div>
                  <div className="bg-white shadow-2xl flex items-center p-5 rounded-full">
                    <GrLink color="black" size={18} />
                  </div>
                </div>
                <h1 className="text-2xl font-bold pb-3 pt-2">
                  Carrency Dashbord
                </h1>
                <p className="text-lg ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majoraity have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable
                </p>
              </div>
            </div>
            <div
              className="cardd  mb-6 bg-cover shadow-xl  bg-no-repeat h-[60vh] overflow-hidden w-full bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${img1})` }}
            >
              <div className="text-start cardText bg-white p-9">
                <div className="flex card_bug ">
                  <div className="bg-white shadow-2xl flex items-center p-5 rounded-full">
                    <AiOutlineSearch color="black" size={18} />
                  </div>
                  <div className="bg-white shadow-2xl flex items-center p-5 rounded-full">
                    <GrLink color="black" size={18} />
                  </div>
                </div>
                <h1 className="text-2xl font-bold pb-3 pt-2">
                  Carrency Dashbord
                </h1>
                <p className="text-lg ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majoraity have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable
                </p>
              </div>
            </div>
            <div
              className="cardd  mb-6 bg-cover shadow-xl  bg-no-repeat h-[60vh] overflow-hidden w-full bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${img2})` }}
            >
              <div className="text-start cardText bg-white p-9">
                <div className="flex card_bug ">
                  <div className="bg-white shadow-2xl flex items-center p-5 rounded-full">
                    <AiOutlineSearch color="black" size={18} />
                  </div>
                  <div className="bg-white shadow-2xl flex items-center p-5 rounded-full">
                    <GrLink color="black" size={18} />
                  </div>
                </div>
                <h1 className="text-2xl font-bold pb-3 pt-2">
                  Carrency Dashbord
                </h1>
                <p className="text-lg ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majoraity have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable
                </p>
              </div>
            </div>
            <div
              className="cardd  mb-6 bg-cover shadow-xl  bg-no-repeat h-[60vh] overflow-hidden w-full bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${img3})` }}
            >
              <div className="text-start cardText bg-white p-9">
                <div className="flex card_bug ">
                  <div className="bg-white shadow-2xl flex items-center p-5 rounded-full">
                    <AiOutlineSearch color="black" size={18} />
                  </div>
                  <div className="bg-white shadow-2xl flex items-center p-5 rounded-full">
                    <GrLink color="black" size={18} />
                  </div>
                </div>
                <h1 className="text-2xl font-bold pb-3 pt-2">
                  Carrency Dashbord
                </h1>
                <p className="text-lg ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majoraity have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-6 mb-10">
      <button className="hover:bg-[#464646c7] bg-[#000000c7] text-lg font-semibold text-center py-3 px-16 text-white">See More</button>
      </div>
    </>
  );
}

export default Container;

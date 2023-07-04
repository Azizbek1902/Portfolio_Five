import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import img from "../../../../assets/images/clint.jpg";
import img2 from "../../../../assets/images/icon.png";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <div className="flex justify-center pt-36">
        <div className="w-[90%] xl:w-[1170px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="text-start">
              <h1 className="text-5xl font-bold text-[#000000]">
                Get in Touch
              </h1>
              <div className="mt-4 mb-12 w-20 h-2 bg-[#000000]"></div>
              <input
                type="text"
                placeholder="Name"
                className="w-full py-6 outline-none mb-5 px-5 placeholder:text-xl border-[1px] border-[#d2d2d3] placeholder:text-[#888888]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full py-6 outline-none mb-5 px-5 placeholder:text-xl border-[1px] border-[#d2d2d3] placeholder:text-[#888888]"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full py-6 outline-none mb-5 px-5 placeholder:text-xl border-[1px] border-[#d2d2d3] placeholder:text-[#888888]"
              />
              <textarea
                cols="20"
                rows="4"
                type="text"
                placeholder="Message"
                className="w-full pt-16 outline-none mb-5 px-5 placeholder:text-xl border-[1px] border-[#d2d2d3] placeholder:text-[#888888]"
              ></textarea>
              <button className="text-white bg-[#464646c7] px-16 py-5 font-bold mb-6">
                SEND NOW
              </button>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-[#000000]">
                What Says Clients
              </h1>
              <div className="mt-4 mb-12 w-20 h-2 bg-[#000000]"></div>
              <Carousel
                className="rounded-xl lg:h-[600px] h-[850px]"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="black"
                    size="32px"
                    onClick={handlePrev}
                    className="!absolute lg:mt-56 mt-[360px]  py-9 px-9 xl:ml-48 lg:ml-32 md:ml-20 md:mt-60 shadowBtnn ml-20 shadow-xl  top-2/4 myCaruselBtn -translate-y-2/4 left-0"
                  >
                    <AiOutlineLeft strokeWidth={2} className="w-[66px] h-[30px]" />
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="black"
                    size="32"
                    onClick={handleNext}
                    className="!absolute top-2/4 lg:mt-56 xl:mr-48 lg:mr-32 md:mr-20 md:mt-60 shadowBtnn mt-[360px]  py-9 px-9 mr-20 shadow-xl -translate-y-2/4 !right-0 myCaruselBtn"
                  >
                    <AiOutlineRight strokeWidth={2} className="w-[66px] h-[30px]" />
                  </IconButton>
                )}
              >
                <div className="text-center p-12 shadowCarousel">
                  <div className="flex items-end -mt-32 mb-9 justify-between">
                    <div className="flex items-end gap-3">
                      <img src={img} alt="" />
                      <h1 className="text-xl font-bold">Deno</h1>
                    </div>
                    <img src={img2} alt="" />
                  </div>
                  <p className="text-xl text-[#757575]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem IpsumIt is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum
                  </p>
                </div>
                <div className="text-center p-12 shadowCarousel">
                  <div className="flex items-end -mt-32 mb-9 justify-between">
                    <div className="flex items-end gap-3">
                      <img src={img} alt="" />
                      <h1 className="text-xl font-bold">Deno</h1>
                    </div>
                    <img src={img2} alt="" />
                  </div>
                  <p className="text-xl text-[#757575]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem IpsumIt is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum
                  </p>
                </div>
                <div className="text-center p-12 shadowCarousel">
                  <div className="flex items-end -mt-32 mb-9 justify-between">
                    <div className="flex items-end gap-3">
                      <img src={img} alt="" />
                      <h1 className="text-xl font-bold">Deno</h1>
                    </div>
                    <img src={img2} alt="" />
                  </div>
                  <p className="text-xl text-[#757575]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem IpsumIt is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

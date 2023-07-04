import React from "react";
import img from "../../../../assets/images/banner.jpg";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

function Header() {
  return (
    <div
      className="bg-cover bg-no-repeat h-[100vh] w-full bg-[image:var(--image-url)] header md:h-[100vh]"
      style={{ "--image-url": `url(${img})` }}
    >
      <div className="flex justify-center">
        <Carousel
          className="rounded-xl xl:w-[1100px] lg:w-[800px] md:w-[700px] w-[90%]   relative top-40"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 -translate-y-2/4 left-4 hidden"
            >
              <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 -translate-y-2/4 !right-4 hidden"
            >
              <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
        >
          <div className="text-start text-white">
            <h1 className="md:text-[100px] text-[50px] leading-[60px] font-bold md:leading-[110px] md:mt-[-30px] ">
              Creative <br /> Work Idea
            </h1>
            <p className="text-lg py-4 pb-12">
              There are many variations of passages of Lorem Ipsum <br />
              available, but the majority have suffered alteration
            </p>
            <div className="flex md:gap-3 flex-col md:flex-row  md:mt-[-30px] headerBTn">
              <button className="my-4 hover:duration-700 md:my-0 text-[#0e0b01] hover:bg-[#0e0b01] w-52 hover:text-white py-5 text-xl bg-white ">
                About Company
              </button>
              <button className="text-[#0e0b01] hover:duration-700 hover:bg-[#0e0b01] w-52 hover:text-white py-5 text-xl bg-white ">
                Contact
              </button>
            </div>
          </div>
          <div className="text-start text-white">
            <h1 className="md:text-[100px] text-[50px] leading-[60px] font-bold md:leading-[110px]">
              Creative <br /> Work Idea
            </h1>
            <p className="text-lg py-4 pb-12">
              There are many variations of passages of Lorem Ipsum <br />
              available, but the majority have suffered alteration
            </p>
            <div className="flex md:gap-3 flex-col md:flex-row">
              <button className="my-4 md:my-0 text-[#0e0b01] hover:bg-[#0e0b01] w-52 hover:text-white py-5 text-xl bg-white ">
                About Company
              </button>
              <button className="text-[#0e0b01] hover:bg-[#0e0b01] w-52 hover:text-white py-5 text-xl bg-white ">
                Contact
              </button>
            </div>
          </div>
          <div className="text-start text-white">
            <h1 className="md:text-[100px] text-[50px] leading-[60px] font-bold md:leading-[110px]">
              Creative <br /> Work Idea
            </h1>
            <p className="text-lg py-4 pb-12">
              There are many variations of passages of Lorem Ipsum <br />
              available, but the majority have suffered alteration
            </p>
            <div className="flex md:gap-3 flex-col md:flex-row">
              <button className="my-4 md:my-0 text-[#0e0b01] hover:bg-[#0e0b01] w-52 hover:text-white py-5 text-xl bg-white ">
                About Company
              </button>
              <button className="text-[#0e0b01] hover:bg-[#0e0b01] w-52 hover:text-white py-5 text-xl bg-white ">
                Contact
              </button>
            </div>
          </div>
          <div className="text-start text-white">
            <h1 className="md:text-[100px] text-[50px] leading-[60px] font-bold md:leading-[110px]">
              Creative <br /> Work Idea
            </h1>
            <p className="text-lg py-4 pb-12">
              There are many variations of passages of Lorem Ipsum <br />
              available, but the majority have suffered alteration
            </p>
            <div className="flex md:gap-3 flex-col md:flex-row">
              <button className="my-4 md:my-0 text-[#0e0b01] hover:bg-[#0e0b01] w-52 hover:text-white py-5 text-xl bg-white ">
                About Company
              </button>
              <button className="text-[#0e0b01] hover:bg-[#0e0b01] w-52 hover:text-white py-5 text-xl bg-white ">
                Contact
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Header;

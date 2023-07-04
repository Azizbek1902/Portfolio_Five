import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Carousel, IconButton } from "@material-tailwind/react";
import img from "../../../../assets/images/we1.png";

function HomeCard() {
  const data = [
    {
      id: 1,
      title:
        "many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which",
    },
    {
      id: 2,
      title:
        "many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which",
    },
    {
      id: 3,
      title:
        "many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which",
    },
  ];
  return (
    <div>
      <div className="flex justify-center pt-28">
        <div>
          <h1 className="text-5xl font-bold text-[#323232]">What we do</h1>
          <div className="ml-24 mt-4 w-20 h-2 bg-[#2e2f34]"></div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div className="w-[90%] xl:w-[1140px]">
          <Carousel
            className="rounded-xl xl:h-[600px] md:h-[720px] sm:h-[1400px] h-[1500px]"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="black"
                size="32px"
                onClick={handlePrev}
                className="!absolute md:mt-64  py-7 px-10 md:py-7 md:px-10 sm:mt-[680px] mt-[720px] lg:left-[370px]  md:left-[250px] xl:left-[280px] xl:ml-[200px] shadowBtnn top-2/4 myCaruselBtn -translate-y-2/4 sm:left-28 left-20"
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
                className="!absolute top-2/4 md:mt-64 py-7 px-10 md:py-7 md:px-10 sm:mt-[680px] mt-[720px] lg:right-[370px] md:right-[250px] xl:right-[280px] xl:mr-[200px] shadowBtnn -translate-y-2/4 sm:right-28 right-20 myCaruselBtn"
              >
                <AiOutlineRight strokeWidth={2} className="w-[66px] h-[30px]" />
              </IconButton>
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.map((elem) => (
                <div
                  className="text-start p-5 lg:p-12 border-[1px] border-[#292a2c]"
                  key={elem.id}
                >
                  <img src={img} alt="" />
                  <h1 className="font-bold leading-6 text-xl py-4">
                    WEBSITE <br /> DEVELOPMENT
                  </h1>
                  <p className="text-lg">{elem.title}</p>
                  <button className="mt-12 float-right bg-[#464646] text-white py-2 px-4 text-lg font-semibold">
                    Read More
                  </button>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.map((elem) => (
                <div
                  className="text-start p-5 lg:p-12 border-[1px] border-[#292a2c]"
                  key={elem.id}
                >
                  <img src={img} alt="" />
                  <h1 className="font-bold leading-6 text-xl py-4">
                    WEBSITE <br /> DEVELOPMENT
                  </h1>
                  <p className="text-lg">{elem.title}</p>
                  <button className="mt-12 float-right bg-[#464646] text-white py-2 px-4 text-lg font-semibold">
                    Read More
                  </button>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.map((elem) => (
                <div
                  className="text-start p-5 lg:p-12 border-[1px] border-[#292a2c]"
                  key={elem.id}
                >
                  <img src={img} alt="" />
                  <h1 className="font-bold leading-6 text-xl py-4">
                    WEBSITE <br /> DEVELOPMENT
                  </h1>
                  <p className="text-lg">{elem.title}</p>
                  <button className="mt-12 float-right bg-[#464646] text-white py-2 px-4 text-lg font-semibold">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;

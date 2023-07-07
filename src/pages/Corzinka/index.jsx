import { BsFillStarFill } from "react-icons/bs";
import React, { useState } from "react";
import CorzinkaCarousel from "../../components/views/corzinka/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/shop_01.jpg";
import img2 from "../../assets/images/shop_02.jpg";
import img3 from "../../assets/images/shop_03.jpg";
import img4 from "../../assets/images/shop_04.jpg";
import img5 from "../../assets/images/shop_05.jpg";
import img6 from "../../assets/images/shop_06.jpg";
import img7 from "../../assets/images/shop_07.jpg";
import img8 from "../../assets/images/shop_08.jpg";
import Cart from "../../components/views/shop/card";

function Corzinka() {
  const breakpoints = {
    mobile: {
      breakpoint: 320,
      items: 2,
    },
    tablet: {
      breakpoint: 768,
      items: 3,
    },
    desktop: {
      breakpoint: 1024,
      items: 4,
    },
  };
  const [result, setResult] = useState(1);
  const handlePlus = () => {
    setResult(result + 1);
  };
  const handleMinus = () => {
    if (result > 1) {
      setResult(result - 1);
    } else {
      alert("Ortiq Kamaytirib bo'lmaydi");
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="flex justify-center bg-[#e9eef5]">
        <div className="w-[95%] md:w-[90%] xl:w-[1320px] py-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-6">
            <div className="lg:col-span-4">
              <CorzinkaCarousel />
            </div>
            <div className="lg:col-span-6 border border-[rgba(0,0,0,.125)] rounded-sm bg-white">
              <div className="text-start px-4 py-5">
                <h1 className="text-3xl font-light">Active Wear</h1>
                <p className="pt-2 text-[22px] font-light">$25.00</p>
                <div className="flex gap-1 items-center pt-5">
                  <div className="flex gap-2">
                    <BsFillStarFill color="#ede861" size={18} />
                    <BsFillStarFill color="#ede861" size={18} />
                    <BsFillStarFill color="#ede861" size={18} />
                    <BsFillStarFill color="#ede861" size={18} />
                    <BsFillStarFill color="#6c757d" size={18} />
                  </div>
                  <h1 className="text-lg font-light">
                    Rating 4.8 | 36 Comments
                  </h1>
                </div>
                <div className="flex items-center pt-5">
                  <h1 className="text-base font-semibold pr-5">Brand:</h1>
                  <p className="text-[#bcbcbc] text-lg">Easy Wear</p>
                </div>
                <h1 className="text-base font-semibold pt-7">Description:</h1>
                <p className="font-light text-lg pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod temp incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse. Donec condimentum elementum convallis.
                  Nunc sed orci a diam ultrices aliquet interdum quis nulla.
                </p>
                <div className="flex items-center pt-5">
                  <h1 className="text-base font-semibold pr-5">
                    Avaliable Color:
                  </h1>
                  <p className="text-[#bcbcbc] text-lg">White / Black</p>
                </div>
                <h1 className="text-base font-semibold pt-7">Specification:</h1>
                <p className="font-light text-lg pt-2">Lorem ipsum dolor sit</p>
                <p className="font-light text-lg">Amet, consectetur</p>
                <p className="font-light text-lg">Adipiscing elit,set</p>
                <p className="font-light text-lg">Duis aute irure</p>
                <p className="font-light text-lg">Ut enim ad minim</p>
                <p className="font-light text-lg">Dolore magna aliqua</p>
                <p className="font-light text-lg">Excepteur sint</p>
                <div className="flex items-center flex-col md:flex-row gap-8 mt-7">
                  <div className="flex gap-3 items-center">
                    <p className="font-light text-lg">Size:</p>
                    <button className="cursor-pointer bg-[#59ab6e] px-3 py-1 rounded-md text-white text-xl font-normal">
                      S
                    </button>
                    <button className="cursor-pointer bg-[#59ab6e] px-3 py-1 rounded-md text-white text-xl font-normal">
                      M
                    </button>
                    <button className="cursor-pointer bg-[#59ab6e] px-3 py-1 rounded-md text-white text-xl font-normal">
                      L
                    </button>
                    <button className="cursor-pointer bg-[#59ab6e] px-3 py-1 rounded-md text-white text-xl font-normal">
                      XL
                    </button>
                    <button className="cursor-pointer bg-[#59ab6e] px-3 py-1 rounded-md text-white text-xl font-normal">
                      S
                    </button>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p className="font-light text-lg">Quantity</p>
                    <button
                      onClick={handleMinus}
                      className="cursor-pointer bg-[#59ab6e] px-3 py-1 rounded-md text-white text-xl font-normal"
                    >
                      -
                    </button>
                    <button className="bg-[#6c757d] px-2 rounded-md text-white text-xl font-normal">
                      {result}
                    </button>
                    <button
                      onClick={handlePlus}
                      className="cursor-pointer bg-[#59ab6e] px-3 py-1 rounded-md text-white text-xl font-normal"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <button className="bg-[#59ab6e] w-full py-3 rounded-md cursor-pointer text-white text-xl font-normal md:mb-0 mb-6">
                    Buy
                  </button>
                  <button className="bg-[#59ab6e] w-full py-3 rounded-md cursor-pointer text-white text-xl font-normal md:mb-0 mb-6">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1320px] py-10">
          <h1 className="text-2xl font-semibold pb-5">Related Products</h1>
          <Carousel showThumbs={false} showArrows={false} infiniteLoop={true}  responsive={breakpoints}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 border-none">
              <Cart img={img1} />
              <Cart img={img2} />
              <Cart img={img3} />
              <Cart img={img4} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 border-none">
              <Cart img={img5} />
              <Cart img={img6} />
              <Cart img={img7} />
              <Cart img={img8} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 border-none">
              <Cart img={img1} />
              <Cart img={img2} />
              <Cart img={img3} />
              <Cart img={img4} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 border-none">
              <Cart img={img5} />
              <Cart img={img6} />
              <Cart img={img7} />
              <Cart img={img8} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Corzinka;

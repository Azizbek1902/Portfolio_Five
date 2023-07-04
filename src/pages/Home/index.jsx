import React from "react";
import Header from "../../components/views/home/Header";
import CardCarousel from "../../components/views/home/CardCorousel";
import About from "../../components/views/home/About";
import Container from "../../components/views/home/Container";
import img1 from "../../assets/images/chose1.png";
import img2 from "../../assets/images/chose2.png";
import img3 from "../../assets/images/chose3.png";
import Contact from "../../components/views/home/Contact";

function Home() {
  return (
    <div>
      <Header />
      <CardCarousel />
      <About />
      <Container />
      <div className="flex justify-center bg-[#323232]">
        <div className="w-[95%] xl:w-[1170px]">
          <div className="flex justify-start mt-16 mb-12">
            <div>
              <h1 className="text-5xl font-bold text-[#ffffff]">
                Why choose do
              </h1>
              <div className="mt-4 w-20 h-2 bg-[#ffffff]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 mb-6">
            <div className="w-full h-[318px] md:py-8 md:pr-8 p-8 text-white mb-6">
              <img src={img1} alt="" />
              <h1 className="text-3xl font-bold py-3">Project Done</h1>
              <p className="text-5xl font-bold">1000+</p>
              <button className="text-[#323232] mt-8 text-lg bg-white py-2 font-semibold px-10">
                Read More
              </button>
            </div>
            <div className="w-full h-[318px] p-8 text-white mb-6">
              <img src={img2} alt="" />
              <h1 className="text-3xl font-bold py-3">Happy Clients</h1>
              <p className="text-5xl font-bold">900+</p>
              <button className="text-[#323232] mt-8 text-lg bg-white py-2 font-semibold px-10">
                Read More
              </button>
            </div>
            <div className="w-full h-[318px] p-8 xl:pl-17 text-white mb-6">
              <img src={img3} alt="" />
              <h1 className="text-3xl font-bold py-3">Awards</h1>
              <p className="text-5xl font-bold">100+</p>
              <button className="text-[#323232] mt-8 text-lg bg-white py-2 font-semibold px-10">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Home;

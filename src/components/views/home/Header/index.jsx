import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import img1 from "../../../../assets/images/banner_img_01.jpg";
import img2 from "../../../../assets/images/banner_img_02.jpg";
import img3 from "../../../../assets/images/banner_img_03.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Header() {
  const data = [
    {
      id: 1,
      title: "Zay eCommerce",
      desc: "Tiny and Perfect eCommerce Template",
      lorem:
        "Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.",
      img: img1,
    },
    {
      id: 2,
      title: "Proident occaecat",
      desc: "Aliquip ex ea commodo consequat",
      lorem:
        "You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.",
      img: img2,
    },
    {
      id: 3,
      title: "Repr in voluptate",
      desc: "Ullamco laboris nisi ut",
      lorem:
        "We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.",
      img: img3,
    },
  ];
  return (
    <>
      <Swiper
        className="bg-[#efefef]"
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((elem) => (
          <SwiperSlide key={elem.id} className="lg:px-40 px-20 pt-10 pb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex items-center order-2 lg:order-1">
                <div className="text-start">
                  <h1 className="text-[48px] font-thin pb-2 text-[#212529] robotoFont">
                    {elem.title}
                  </h1>
                  <h2 className="text-[30px] font-sans font-normal text-[#212529]">
                    {elem.desc}
                  </h2>
                  <p className="text-lg robotoFont font-light">{elem.lorem}</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img src={elem.img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Header;

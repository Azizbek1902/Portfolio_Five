import React from "react";
import img1 from "../../../../assets/images/brand_01.png";
import img2 from "../../../../assets/images/brand_02.png";
import img3 from "../../../../assets/images/brand_03.png";
import img4 from "../../../../assets/images/brand_04.png";
import Slider from "infinite-react-carousel";
function Brand() {
  const data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
  ];
  return (
    <div className="flex justify-center bg-[#e9eef5] pt-16 pb-6 xl:pb-32 md:pb-10">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[990px]">
        <div className="flex justify-center">
          <div className="text-center pb-7 w-[90%] md:w-[80%] lg:w-[60%] xl:w-[600px]">
            <h1 className="robotoFont text-5xl font-light">Our Brands</h1>
            <p className="pt-5 text-lg font-sans font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <Slider autoplay={true}>
          <div className="caros px-10 md:px-16 xl:px-32">
            {data.map((elem) => (
              <img src={elem.img} alt="" className="imgg" key={elem.id} />
            ))}
          </div>
          <div className="caros px-10 md:px-16 xl:px-32">
            {data.map((elem) => (
              <img src={elem.img} alt="" className="imgg" key={elem.id} />
            ))}
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Brand;

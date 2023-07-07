import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../../assets/images/product_single_01.jpg";
import img2 from "../../../../assets/images/product_single_02.jpg";
import img3 from "../../../../assets/images/product_single_03.jpg";
import img4 from "../../../../assets/images/product_single_04.jpg";
import img5 from "../../../../assets/images/product_single_05.jpg";
import img6 from "../../../../assets/images/product_single_06.jpg";
import img7 from "../../../../assets/images/product_single_07.jpg";
import img8 from "../../../../assets/images/product_single_08.jpg";
import img9 from "../../../../assets/images/product_single_09.jpg";
import img10 from "../../../../assets/images/product_single_10.jpg";

function CorzinkaCarousel() {
  const images = [
    { id: 1, img: img1 },
    { id: 2, img: img1 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
  ];
  return (
    <div>
      <Carousel
        useKeyboardArrows={true}
        infiniteLoop={true}
        showIndicators={false}
        showArrows={false}
        breakPoints={[
          {
            width: 500,
            settings: {
              showThumbs: true,
            },
          },
          {
            width: 1000,
            settings: {
              showThumbs: true,
            },
          },
          {
            width: 1500,
            settings: {
              showThumbs: true,
            },
          },
        ]}
      >
        {images.map((elem) => (
          <div className="slide">
            <img alt="sample_file" src={elem.img} key={elem.id} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CorzinkaCarousel;

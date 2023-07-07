import React from "react";
import Header from "../../components/views/home/Header";
import img1 from '../../assets/images/category_img_01.jpg'
import img2 from '../../assets/images/category_img_02.jpg'
import img3 from '../../assets/images/category_img_03.jpg'
import Container from "../../components/views/home/Container";

function Home() {
  const data = [
    {
      id:1,
      img: img1,
      title: "Watches"
    },
    {
      id:2,
      img: img2,
      title: "Shoes"
    },
    {
      id:3,
      img: img3,
      title: "Accessories"
    }
  ]
  return (
    <div>
      <Header />
      <div className="flex justify-center my-20">
        <div className="w-[95%] md:w-[90%] xl:w-[1220px]">
          <div className="flex justify-center">
            <div className="text-center xl:w-[650px] md:w-[90%] w-[95%}">
              <h1 className="robotoFont text-[48px] font-extralight tracking-tighter">Categories of The Month</h1>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="grid mt-20 grid-cols-1 md:grid-cols-3 md:gap-20">
            {
              data.map((elem) => (
                <div className="text-center cursor-pointer pb-20 md:pb-0" key={elem.id}>
                  <div className="flex justify-center w-full">
                    <img src={elem.img} alt="" className="rounded-full"/>
                  </div>
                  <h1 className="text-xl font-semibold py-3">{elem.title}</h1>
                  <button className="bg-[#59ab6e] mt-3 py-2 px-3 rounded-md text-white robotoFont font-bold">Go Shop</button>  
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Container />
    </div>
  );
}

export default Home;

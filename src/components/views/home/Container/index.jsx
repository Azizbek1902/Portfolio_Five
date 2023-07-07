import { BsFillStarFill } from "react-icons/bs";
import React from "react";
import img1 from "../../../../assets/images/feature_prod_01.jpg";
import img2 from "../../../../assets/images/feature_prod_02.jpg";
import img3 from "../../../../assets/images/feature_prod_03.jpg";

function Container() {
  const data = [
    {
      id: 1,
      img: img1,
      star: 3,
      price: "$240.00",
      title: "Gym Weight",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
      total: "Reviews (24)",
    },
    {
      id: 2,
      img: img2,
      star: 3,
      price: "$480.00",
      title: "Cloud Nike Shoes",
      desc: "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
      total: "Reviews (48)",
    },
    {
      id: 3,
      img: img3,
      star: 5,
      price: "$360.00",
      title: "Summer Addides Shoes",
      desc: "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
      total: "Reviews (74)",
    },
  ];
  return (
    <>
      <div className="flex justify-center mt-20 bg-[#e9eef5] py-10">
        <div className="w-[95%] md:w-[90%] xl:w-[1320px]">
          <div className="flex justify-center">
            <div className="text-center xl:w-[600px] md:w-[90%] w-[95%}">
              <h1 className="robotoFont text-[48px] font-extralight tracking-tighter">
                Featured Product
              </h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="grid mt-20 grid-cols-1 md:grid-cols-3 md:gap-5 gap-0">
            {data.map((elem) => (
              <div
                className="rounded-sm  bg-white border-[1px] border-[rgba(0,0,0,.125)] mb-5 md:mb-0"
                key={elem.id}
              >
                <img src={elem.img} className="w-full rounded-t-sm" alt="" />
                <div className="p-3">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <BsFillStarFill 
                        size={20}
                        className={`${
                          elem.star > 1 ? "text-[#ede861]" : "text-[#bcbcbc]"
                        }`}
                      />
                      <BsFillStarFill 
                        size={20}
                        className={`${
                          elem.star > 2 ? "text-[#ede861]" : "text-[#bcbcbc]"
                        }`}
                      />
                      <BsFillStarFill 
                        size={20}
                        className={`${
                          elem.star > 3 ? "text-[#ede861]" : "text-[#bcbcbc]"
                        }`}
                      />
                      <BsFillStarFill 
                        size={20}
                        className={`${
                          elem.star > 4 ? "text-[#ede861]" : "text-[#bcbcbc]"
                        }`}
                      />
                      <BsFillStarFill 
                        size={20}
                        className={`${
                          elem.star > 5 ? "text-[#ede861]" : "text-[#bcbcbc]"
                        }`}
                      />
                    </div>
                    <span className="text-[#bcbcbc] robotoFont text-lg font-serif font-medium">{elem.price}</span>
                  </div>
                  <h1 className="text-[30px] robotoFont font-semibold mt-2">{elem.title}</h1>
                  <p className="text-lg font-light">{elem.desc}</p>
                  <h3 className="text-[#bcbcbc] text-lg py-2">{elem.total}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;

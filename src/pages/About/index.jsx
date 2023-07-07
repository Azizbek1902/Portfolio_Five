import React from "react";
import { FaUserAlt } from "react-icons/fa"; 
import { FaPercent } from "react-icons/fa"; 
import { FaExchangeAlt } from "react-icons/fa"; 
import { FaTruck } from "react-icons/fa"; 
import Header from "../../components/views/about/Header";
import Brand from "../../components/views/about/Brand";

function About() {
  const data = [
    {
      id:1,
      icon: <FaTruck size={72}/>,
      title:"Delivery Services"
    },
    {
      id:2,
      icon: <FaExchangeAlt size={60}/>,
      title:"Shipping & Return"
    },
    {
      id:3,
      icon: <FaPercent size={60}/>,
      title:"Promotion"
    },
    {
      id:4,
      icon: <FaUserAlt size={60}/>,
      title:"24 Hours Service"
    }
  ]
  return (
    <>
      <Header />
      <div className="flex justify-center py-20">
        <div className="w-[95%] md:w-[90%] xl:w-[1320px]">
          <div className="flex justify-center">
            <div className="text-center mb-10 xl:w-[600px] w-[95%] md:w-[80%]">
              <h1 className="text-5xl pb-4 font-extralight">Our Services</h1>
              <p className="text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-7">
            {data.map((item) => (
              <div className="shadowww hover:text-white hover:bg-[#59ab6e] bg-white py-10 md:mb-0 mb-7" key={item.id}>
                <div className="flex justify-center text-[#59ab6e] iconn">{item.icon}</div>
                <h1 className="text-center pt-5 text-xl font-semibold">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </>
  );
}

export default About;

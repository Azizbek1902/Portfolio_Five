import React from "react";
import Cart from "../card";
import img1 from "../../../../assets/images/shop_01.jpg";
import img2 from "../../../../assets/images/shop_02.jpg";
import img3 from "../../../../assets/images/shop_03.jpg";
import img4 from "../../../../assets/images/shop_04.jpg";
import img5 from "../../../../assets/images/shop_05.jpg";
import img6 from "../../../../assets/images/shop_06.jpg";
import img7 from "../../../../assets/images/shop_07.jpg";
import img8 from "../../../../assets/images/shop_08.jpg";
import img9 from "../../../../assets/images/shop_09.jpg";

function Contaner() {
  return (
    <div>
      <div className="flex justify-between pb-10">
        <div className="flex gap-3">
          <h1 className="hover:text-[#69bb7e] text-[22px] font-normal cursor-pointer">
            All
          </h1>
          <h1 className="hover:text-[#69bb7e] text-[22px] font-normal cursor-pointer">
            Men's
          </h1>
          <h1 className="hover:text-[#69bb7e] text-[22px] font-normal cursor-pointer">
            Women's
          </h1>
        </div>
        <select className="w-[40%] md:w-[65%] xl:w-[50%] px-3 focus:border-[#e8e8e8] active:border-[#e8e8e8] border border-[#e8e8e8]">
          <option>Feature</option>
          <option>A to Z</option>
          <option>Item</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Cart img={img1}/>
          <Cart img={img2}/>
          <Cart img={img3}/>
          <Cart img={img4}/>
          <Cart img={img5}/>
          <Cart img={img6}/>
          <Cart img={img7}/>
          <Cart img={img8}/>
          <Cart img={img9}/>
      </div>
      <div className="flex  justify-end mb-20">
        <button className="cursor-pointer text-white bg-[#69bb7e] py-2 px-5 text-lg">1</button>
        <button className="cursor-pointer py-2 px-5 border border-[#dee2e6] text-lg hover:bg-[#69bb7e] hover:text-white">2</button>
        <button className="cursor-pointer py-2 px-5 border border-[#dee2e6] text-lg hover:bg-[#69bb7e] hover:text-white">3</button>
      </div>
    </div>
  );
}

export default Contaner;

import React from "react";
import Brand from "../../components/views/about/Brand";
import Slider from "../../components/views/shop/slider";
import Contaner from "../../components/views/shop/container";
function Shop() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="w-[95%] md:w-[90%] xl:w-[1320px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-5">
            <div className="col-span-3">
              <Slider />
            </div>
            <div className="col-span-9">
              <Contaner />
            </div>
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
}

export default Shop;

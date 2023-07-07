import React from "react";
import img1 from "../../../../assets/images/about-hero.svg";

function Header() {
  return (
    <>
      <div className="flex justify-center bg-[#59ab6e] py-24">
        <div className="w-[95%] md:w-[90%] xl:w-[1320px]">
          <div className="grid grid-cols-1 md:grid-cols-10">
            <div className="flex items-center md:col-span-7">
              <div className="text-start text-white">
                <h1 className="text-[40px] font-semibold pb-3">About Us</h1>
                <p className="text-lg font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="md:col-span-3">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

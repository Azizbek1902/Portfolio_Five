import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Cart({ img }) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="border border-[rgba(0,0,0,.125)] bg-clip-border shadow-lg cartShop">
        <div
          className="bg-cover bg-no-repeat h-[450px]  bg-center flex items-center justify-center w-full bg-[image:var(--image-url)]"
          style={{ "--image-url": `url(${img})` }}
        >
          <div className="w-full h-[450px] bgIMGShop flex items-center justify-center">
            <div className="hidden aposity">
              <div className="bg-[#59ab6e] text-white rounded-md p-3 mb-4 cursor-pointer" onClick={() => {navigate("/corzinka")}}>
                <BiHeart size={22} />
              </div>
              <div className="bg-[#59ab6e] text-white rounded-md p-3 mb-4 cursor-pointer" onClick={() => {navigate("/corzinka")}}>
                <FaEye size={22} />
              </div>
              <div className="bg-[#59ab6e] text-white rounded-md p-3 mb-4 cursor-pointer" onClick={() => {navigate("/corzinka")}}>
                <BsFillCartPlusFill size={22} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-start p-5">
          <h1 className="font-sans text-lg font-bold robotoFont ">
            Oupidatat non
          </h1>
          <h1 className="font-sans text-lg font-bold robotoFont ">M/L/X/XL</h1>
          <div className="flex justify-center">
            <div>
              <div className="flex gap-2">
                <BsFillStarFill color="#ede861" size={20} />
                <BsFillStarFill color="#ede861" size={20} />
                <BsFillStarFill color="#ede861" size={20} />
                <BsFillStarFill color="#bcbcbc" size={20} />
                <BsFillStarFill color="#bcbcbc" size={20} />
              </div>
              <h1 className="font-sans text-lg font-light text-center pt-3">
                $250.00
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

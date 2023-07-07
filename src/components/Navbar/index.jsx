import { FaCartArrowDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiTwotonePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-24">
      <Typography
        as="li"
        variant=""
        color="blue-gray"
        className="p-1 font-[100] hover:text-[#69bb7e] text-[#212934] text-lg"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[100] hover:text-[#69bb7e] text-[#212934] text-lg"
      >
        <NavLink
          to="/about"
          className="flex items-center active:text-[#69bb7e]"
        >
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[100] hover:text-[#69bb7e] text-[#212934] text-lg"
      >
        <NavLink to="/shop" className="flex items-center active:text-[#69bb7e]">
          Shop
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[100] hover:text-[#69bb7e] text-[#212934] text-lg"
      >
        <NavLink to="/contact" className="flex items-center">
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="lg:flex  lg:justify-center lg:bg-[#212934] hidden">
        <div className="xl:w-[1296px] w-[90%]">
          <div className="flex justify-between py-2 items-center">
            <div className="flex gap-3 text-white">
              <div className="flex gap-2 cursor-pointer items-center">
                <HiOutlineMail />
                <span className="font-thin">info@company.com</span>
              </div>
              <div className="flex gap-2 cursor-pointer items-center">
                <AiTwotonePhone />
                <span className="font-thin">010-020-0340</span>
              </div>
            </div>
            <div className="flex gap-2  text-white">
              <CgFacebook />
              <AiOutlineInstagram />
              <AiOutlineTwitter />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>
      <Navbar className="mx-auto max-w-screen-2xl shadow-none px-0 rounded-none">
        <div className="container mx-auto flex items-center lg:px-0 px-3 justify-between text-blue-gray-900">
          <h1 className="text-[#59ab6e] font-semibold text-6xl">Zay</h1>
          <div className="hidden lg:block">{navList}</div>
          <div className="lg:flex hidden gap-7 items-center">
            <div className="cursor-pointer">
              <FaSearch size={20} />
            </div>
            <div className="cursor-pointer">
              <span className="ml-2 bg-[#e9eef5] rounded-full px-2 text-black font-medium">
                7
              </span>
              <FaCartArrowDown className="relative bottom-3" size={20} />
            </div>
            <div className="cursor-pointer">
              <span className="ml-2 bg-[#e9eef5] rounded-full px-2 text-black font-medium">
                +99
              </span>
              <FaUserAlt className="relative bottom-3" size={20} />
            </div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex gap-7 items-center">
              <div className="cursor-pointer flex w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-[#e8e8e8] border-[1px] px-4 py-2 rounded-s-md text-[#212529] placeholder:font-thin placeholder:font-sans  text-xl w-full"
                />
                <div className="border-[#ced4da] border-[1px] bg-[#e9ecef] rounded-e-md flex items-center px-3">
                  <FaSearch size={20} color="black" className="outline-none" />
                </div>
              </div>
              <div className="cursor-pointer">
                <span className="ml-2 bg-[#e9eef5] rounded-full px-2 text-black font-medium">
                  7
                </span>
                <FaCartArrowDown
                  className="relative bottom-3"
                  size={20}
                  color="black"
                />
              </div>
              <div className="cursor-pointer">
                <span className="ml-2 bg-[#e9eef5] rounded-full px-2 text-black font-medium">
                  +99
                </span>
                <FaUserAlt
                  className="relative bottom-3"
                  size={20}
                  color="black"
                />
              </div>
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </>
  );
}

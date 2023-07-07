import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function Contact() {
  const defaultState = {
    center: [41.2975104, 69.2649955],
    zoom: 5,
  };
  return (
    <div>
      <div className="flex justify-center bg-[#e9eef5]">
        <div className="w-[95%] md:w-[80%] xl:w-[700px] py-14">
          <h1 className="text-5xl font-medium robotoFont text-center">
            Contact Us
          </h1>
          <p className="pt-4 font-light text-lg text-center">
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="w-full">
      <YMaps>
        <Map  className="w-full h-[50vh]" defaultState={defaultState}>
          <Placemark geometry={[41.2975104, 69.2649955]} />
        </Map>
      </YMaps>
      </div>
      <div className="flex justify-center mt-16">
        <div className="w-[95%] md:w-[80%] xl:w-[990px]">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7">
              <div>
                <label
                  className="text-lg block pt-4 pb-2 font-light"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="px-4 py-2 rounded-md focus:border focus:border-[#86b7fe] w-full border border-[#e8e8e8] text-lg font-light placeholder:text-black"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id=""
                />
              </div>
              <div>
                <label
                  className="text-lg block pt-4 pb-2 font-light"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="px-4 py-2 rounded-md focus:border focus:border-[#86b7fe] w-full border border-[#e8e8e8] text-lg font-light placeholder:text-black"
                  type="email"
                  placeholder="Email"
                  name="name"
                  id=""
                />
              </div>
            </div>
            <label
              className="text-lg block pt-4 pb-2 font-light"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="px-4 py-2 rounded-md focus:border focus:border-[#86b7fe] w-full border border-[#e8e8e8] text-lg font-light placeholder:text-black"
              type="text"
              placeholder="Subject"
              name="subject"
              id=""
            />
            <label
              className="text-lg block pt-4 pb-2 font-light"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="px-4 py-2 rounded-md focus:border focus:border-[#86b7fe] w-full border border-[#e8e8e8] text-lg font-light placeholder:text-black"
              name="message"
              id=""
              rows="10"
            >
              Message
            </textarea>
            <div className="flex justify-end mb-16">
              <button className=" text-white font-medium text-lg py-2 px-5 rounded-md mt-4 bg-[#59ab6e]">
                Let's talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

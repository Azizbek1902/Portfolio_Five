import React from "react";
import img from "../../../../assets/images/about_bg.jpg";

function About() {
  return (
    <div className="pt-44">
      <div
        className="bg-cover bg-center bg-no-repeat h-[100vh] w-full mb-12 bg-[image:var(--image-url)]"
        style={{ "--image-url": `url(${img})` }}
      >
        <div className="flex justify-center pt-24">
          <div>
            <h1 className="text-5xl font-bold text-[#ffffff]">About Company</h1>
            <div className="ml-32 mt-4 w-20 h-2 bg-[#ffffff]"></div>
          </div>
        </div>
        <h1 className="text-center text-white text-lg pt-4">
          There are may variations of passages of Lorem Ipsum avaiblable, but
          the majority have
        </h1>
      </div>
    </div>
  );
}

export default About;

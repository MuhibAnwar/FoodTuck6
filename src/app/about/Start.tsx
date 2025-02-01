import Image from "next/image";
import React from "react";

export default function Start() {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row px-6 py-10 space-y-10 lg:space-y-0 lg:space-x-10 mt-10">
      {/* Left Section: Thumbnail Gallery */}
      <div className="flex justify-center lg:block">
        <Image
          src="/a1.png"
          alt="Main Dish"
          width={500}
          height={500}
          className="rounded-lg shadow-md"
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
        />
      </div>

      {/* Main Image Section */}
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <Image
          src="/a2.png"
          alt="Side Dish 1"
          width={300}
          height={270}
          className="rounded-lg shadow-md w-full max-w-xs lg:max-w-sm"
        />
        <Image
          src="/lime.png"
          alt="Side Dish 2"
          width={300}
          height={270}
          className="rounded-lg shadow-md w-full max-w-xs lg:max-w-sm"
        />
      </div>

      {/* Right Section: Product Details */}
      <div className="flex-1 space-y-6 lg:ml-10">
        <div className="text-lg font-bold text-gray-800 mt-20">
          <p className="text-[#FF9F0D] italic px-3 py-1 rounded"style={{color:'[#FF9F0D]'}}>About us ___</p>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-black mt-4 lg:mt-10">
          Food is an important part of a balanced diet
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="text-white bg-[#FF9F0D] inline-block px-6 py-3 rounded cursor-pointer hover:bg-orange-600">
          Show more
        </div>
      </div>
    </div>
  );
}

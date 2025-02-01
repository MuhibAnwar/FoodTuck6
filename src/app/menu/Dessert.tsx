
import React from "react";
import Image from "next/image";
import { BsCupHot } from "react-icons/bs";

export default function Dessert() {
  return (
    <div className="bg-white min-h-screen flex flex-wrap mx-auto px-5 md:px-20 justify-center md:justify-between items-start">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-10 md:mt-20">
        <Image
          src="/dessert.png"
          alt="Image"
          width={350}
          height={550}
          className="mb-10 md:mb-20"
        />
      </div>

      {/* Right Section: Heading */}
      <div className="w-full md:w-1/2 mt-10 md:mt-20">
        <BsCupHot className="text-[#FF9F0D] text-2xl mb-2" />

        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Dessert
        </h1>

        {/* Menu Items */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div>
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg md:text-2xl">
              Fig and lemon cake
              </h2>
              <span className="text-[#FF9F0D] font-bold text-lg md:text-2xl">
                $32
              </span>
            </div>
            <p className="text-sm text-black mt-2">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-sm text-gray-500">560 CAL</p>
          </div>

          {/* Item 2 */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg md:text-2xl text-black">
              Creamy mascarpone cake
              </h3>
              <span className="text-[#FF9F0D] font-bold text-lg md:text-2xl">
                $43
              </span>
            </div>
            <p className="text-sm text-black mt-2">
              Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <p className="text-sm text-gray-500">700 CAL</p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg md:text-2xl text-black">
              Pastry, blueberries, lemon juice
              </h3>
              <span className="text-[#FF9F0D] font-bold text-lg md:text-2xl">
                $14
              </span>
            </div>
            <p className="text-sm text-black mt-2">
              Ground cumin, avocados, peeled and cubed
            </p>
            <p className="text-sm text-gray-500">1000 CAL</p>
          </div>

          {/* Item 4 */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg md:text-2xl text-black">
              Pain au chocolat
              </h3>
              <span className="text-[#FF9F0D] font-bold text-lg md:text-2xl">
                $35
              </span>
            </div>
            <p className="text-sm text-black mt-2">
              Spreadable cream cheese, crumbled blue cheese
            </p>
            <p className="text-sm text-gray-500">560 CAL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

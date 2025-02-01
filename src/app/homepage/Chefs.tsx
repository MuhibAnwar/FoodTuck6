import React from "react";
import Image from "next/image";

export default function MeetOurChefs() {
  return (
    <div className="bg-black text-white py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p  id='qoute'className="text-lg text-yellow-500 italic">Chefs</p>
        <h2 className="text-4xl text-white font-bold">
   <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h2>
      </div>

      {/* Chef Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Chef 1 */}
        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-64">
          <Image
            src="/h1.png"
            alt="Chef D.Estwood"
            width={256}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">D. Estwood</h3>
            <p className="text-sm text-gray-500">Chief Chef</p>
          </div>
        </div>

        {/* Chef 2 */}
        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-64">
          <Image
            src="/h2.png"
            alt="Chef D.Scoriesh"
            width={256}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">D. Scoriesh</h3>
            <p className="text-sm text-gray-500">Assistant Chef</p>
          </div>
        </div>

        {/* Chef 3 */}
        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-64">
          <Image
            src="/h3.png"
            alt="Chef M. William"
            width={256}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">M. William</h3>
            <p className="text-sm text-gray-500">Advertising Chef</p>
          </div>
        </div>

        {/* Chef 4 */}
        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-64">
          <Image
            src="/h4.png"
            alt="Chef W.Readfroad"
            width={256}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">W. Readfroad</h3>
            <p className="text-sm text-gray-500">Chef</p>
          </div>
        </div>
      </div>

      {/* See More Button */}
      <div className="text-center mt-12">
      <a href="/chefs"> <button className="px-6 py-3 bg-black border border-yellow-500 text-yellow-500 rounded-full font-bold hover:bg-yellow-600 transition duration-300">
          See More
        </button></a>
      </div>
    </div>
  );
}

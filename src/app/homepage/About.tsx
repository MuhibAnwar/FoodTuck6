import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <div>
              <div className="bg-black min-h-screen flex flex-wrap mx-auto px-5 md:px-20 justify-center md:justify-between items-start">
                  {/* Left Section: Text and Details */}
                  <div className="w-full md:w-1/2 mt-10 md:mt-20">
            
                  <p id='qoute'className="text-[#FF9F0D] italic px-3 py-1 rounded"style={{color:'[#FF9F0D]'}}>about us</p>

                    <h1 className="text-8xl md:text-4xl font-bold text-white mb-6">
                   <span className="text-[#FF9F0D]">We</span> Create the best<br/>
foody product

                    </h1>
            
                    <div className="">
                      {/* Item 1 */}
                      <div>
                        <div className="mt-10">
                  <p className="text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br/> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit<br/> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis<br/> sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in<br/> consequat.</p>
                      </div>
                      <div className="mt-10">
                      <p className="text-lg text-gray-300 mt-2 mb-2 "> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                      <p className="text-lg text-gray-300 mt-2 mb-2"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
                      <p className="text-lg text-gray-300 mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                    </div>
                  </div>
            </div>
            <div className="flex flex-col items-center relative mt-10 md:mt-20">
  {/* Top Image (Egg) */}
  <Image
    src="/about22.png"
    alt="Egg Image"
    width={400}
    height={194}
    className="rounded-lg shadow-md"
  />

  {/* Bottom Images */}
  <div className="flex space-x-4 mt-4">
    {/* Left Bottom Image */}
    <Image
      src="/about3.png"
      alt="Dish Image Left"
      width={200}
      height={100}
      className="rounded-lg shadow-md"
    />

    {/* Right Bottom Image */}
    <Image
      src="/about1.png"
      alt="Dish Image Right"
      width={200}
      height={100}
      className="rounded-lg shadow-md"
    />
  </div>    
  </div>

</div>

        </div>
    );
}
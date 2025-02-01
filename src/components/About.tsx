import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <p id="about" className="text-yellow-500 font-semibold text-lg">About Us</p>
          <h2 className="text-4xl font-bold mt-2">
            <span className="text-yellow-500">We</span> Create the Best Foody Product
          </h2>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae risus felis.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <span className="text-yellow-500 text-lg font-bold mr-2">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 text-lg font-bold mr-2">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 text-lg font-bold mr-2">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full">
            Read More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/about2.png"
              alt="Top Food"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Image
              src="/about3.png"
              alt="Bottom Left Food"
              className="rounded-lg shadow-lg border border-yellow-500"
            />
          </div>
          <div>
            <Image
              src="/about1.png"
              alt="Bottom Right Food"
              className="rounded-lg shadow-lg border border-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
    

  );
};

export default AboutUs;

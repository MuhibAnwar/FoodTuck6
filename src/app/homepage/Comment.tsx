import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function Comment() {
  return (
    <div className="bg-black text-white py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p id="qoute" className="text-lg text-yellow-500 italic">
          Testimonials
        </p>
        <h2 className="text-4xl text-white font-bold">
          What our client are saying
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white text-black shadow-md p-8 max-w-xl mx-auto relative rounded-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
        {/* Profile Image */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <Image
            src="/p1.png" // Replace with your image path
            alt="Alamin Hasan"
            width={80}
            height={80}
            className="rounded-full border-4 border-gray-800"
          />
        </div>

        {/* Quotation Icon */}
        <div className="mt-12 text-center">
          <p className="text-yellow-400 text-5xl font-bold">“</p>
        </div>

        {/* Testimonial Text */}
        <p className="text-center text-gray-500 mt-4 text-sm sm:text-base lg:text-lg px-4 lg:px-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center mt-6">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>

        {/* User Details */}
        <div className="text-center mt-4">
          <p className="text-xl font-semibold">Alamin Hasan</p>
          <p className="text-sm text-gray-400">Food Specialist</p>
        </div>
      </div>
    </div>
  );
}

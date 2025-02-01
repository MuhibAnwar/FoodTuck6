import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";

export default function Start() {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row flex-wrap px-6 space-x-10 mt-10">
      {/* Left Section: Thumbnail Gallery */}
      <div className="flex flex-col flex-wrap md:ml-20 justify-center items-start space-y-4">
        {["/d1.png", "/d2.png", "/d3.png", "/d4.png"].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={'first'}
            width={150}
            height={150}
            className="rounded-md cursor-pointer border-2 border-gray-200"
          />
        ))}
      </div>

      {/* Main Image Section */}
      <div className="flex-shrink-0">
        <Image
          src="/egg.png"
          alt="Main Dish"
          width={500}
          height={1000}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right Section: Product Details */}
      <div className="flex-2 space-y-4">
        <div className="md:text-sm font-bold text-white bg-[#FF9F0D] md:mt-10 inline-block px-3 py-1 rounded">
          In stock
        </div>
        <h1 className="md:text-4xl font-bold text-black">Yummy Chicken Chup</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br/>
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
          urna,<br/> vitae feugiat pretium donec id elementum. Ultrices mattis sed
          vitae <br/>mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <h2 className="md:text-3xl font-bold text-black">$54.00</h2>

        {/* Rating Section */}
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
          <p className="text-gray-500">| 5.0 rating | 22 reviews</p>
        </div>

        {/* Additional Info */}
        <p className="font-semibold text-black">Dictum / cursus / Risus</p>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center space-x-4">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-16 border-2 border-black rounded-md text-center"
          />
          <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded hover:bg-[#e8890b]">
            Add to cart
          </button>
        </div>

        {/* Wishlist and Compare */}
        <div className="flex items-center space-x-6 text-gray-800">
          <div className="flex items-center space-x-2 cursor-pointer">
            <CiHeart className="text-xl" />
            <p className="text-sm">Add to Wishlist</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <IoIosGitCompare className="text-xl" />
            <p className="text-sm">Compare</p>
          </div>
        </div>

        {/* Category and Tags */}
        <div className="text-gray-600 space-y-1">
          <p className="text-sm">Category: Pizza</p>
          <p className="text-sm">Tag: Our Shop</p>
        </div>

        {/* Social Sharing */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">Share:</span>
          <div className="flex items-center space-x-3">
            <FaYoutube className="text-black text-xl cursor-pointer hover:scale-110 transition-transform" />
            <FaFacebook className="text-black text-xl cursor-pointer hover:scale-110 transition-transform" />
            <FaTwitter className="text-black text-xl cursor-pointer hover:scale-110 transition-transform" />
            <FaPinterest className="text-black text-xl cursor-pointer hover:scale-110 transition-transform" />
            <FaInstagram className="text-black text-xl cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}

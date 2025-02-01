import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";



export const Navbar = () => {
  return (
    <header id="navbar" className="bg-black py-2">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div id="logo" className="text-2xl font-bold text-white space-x-1">
          <h2>
          Food <span className="text-[#FF9F0D]">tuck</span></h2>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-white">
          <a href="/HomePage" className="hover:text-yellow-500">
            Home
          </a>
          <a href="/shoplist" className="hover:text-yellow-500">
            Menu
          </a>
          <a href="/checkout" className="hover:text-yellow-500">
            Checkout
          </a>
          <a href="/wishlist" className="hover:text-yellow-500">
            Wishlist
          </a>
          <a href="/about" className="hover:text-yellow-500">
            About
          </a>
          <a href="/shoplist" className="hover:text-yellow-500">
            Shoping Cart
          </a>
          <a href="/signup" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="flex space-x-4  items-center">
  <a href="/shoplist"><CiSearch href="/shoplist" className="text-white text-xl cursor-pointer hover:text-yellow-500 transition duration-200" /></a>
  <a href="/signup"><IoPersonOutline href="/singup" className="text-white text-xl cursor-pointer hover:text-yellow-500 transition duration-200" /></a>
  <a href="/wishlist"><HiOutlineShoppingBag href="/wishlist" className="text-white text-xl cursor-pointer hover:text-yellow-500 transition duration-200" /></a>
</div>


      </div>
    </header>
  );
};

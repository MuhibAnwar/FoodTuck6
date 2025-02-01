import React from "react";
import { IoStopwatchOutline } from "react-icons/io5";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
    
      <div className="container mx-auto px-6">
        {/* Support Section */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
            </h2>
            <p className="text-gray-300 mb-4">
              Dont wait, make a smart & logical quote here. Its pretty easy.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 text-right items-between">
            <div className="flex flex-col md:flex-row md:items-baseline">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full md:w-auto p-2  bg-[#FF9F0D] text-white focus:outline-none focus:ring-2 focus:ring-yellow-500  md:mb-0"
              />
              <button className="px-6 py-2 bg-white text-[#FF9F0D]  hover:bg-yellow-600 transition ">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <hr className="border-yellow-500 my-8" />

        {/* About Us and Links Section */}
        <div className="mt-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About Us Text */}
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-gray-300">
              orporate clients and leisure travelers has
been relying on Groundlink for dependab
safe, and professional chauffeured car
service in major cities across World.
              </p>
              <div className="flex flex-col items-between justify-between  mt-4">
              <div style={{ backgroundColor: 'rgba(255, 159, 13, 1)' }} className="w-12 h-12 rounded flex items-center justify-center mt-4">
   <IoStopwatchOutline />

              </div>
              <h3 className="text-lg mb-2">Opening Houres</h3>
              <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
              <p className="text-sm">Sunday - Closed</p>
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col items-start ">
              <h3 className="text-lg font-bold mb-2 hover:text-yellow-500">Useful Links</h3>
            
      <a href="/menu" className="hover:text-yellow-500 mt-2">Menu </a>
              
              
                <a href="/chefs" className="hover:text-yellow-500 mt-2">Ours Chefs</a>
                <a href="/about" className="hover:text-yellow-500  mt-2">About</a>
                <a href="/shopdetails" className="hover:text-yellow-500 mt-2">Shop details</a>
                <a href="/shoplist" className="hover:text-yellow-500 mt-2">Shop List</a>
                <a href="/checkout" className="hover:text-yellow-500 mt-2">Cheeckout Page</a>
              
            </div>

            {/* Help Links */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold mb-2">Help?</h3>
              <a href="/faq" className="hover:text-yellow-500 mt-2">FAQs</a>
              
                <a href="/shopping" className="hover:text-yellow-500 mt-2 ">Shopping Cart</a>
                <a href="/signup" className="hover:text-yellow-500 mt-2">Sign up  page</a>
                <a href="/signin" className="hover:text-yellow-500 mt-2  ">Sign in page</a>
                <a href="/404error" className="hover:text-yellow-500 mt-2">404 Error</a>

            </div>

            {/* Recent Posts */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold mb-2">Recent Post</h3>
              <div className="flex items-between mr-2">
              <Image
                src="/f1.png"
                alt="Recent Post 1"
                width={40}
                height={25}/>
                <div className="mt-2 ml-3">
             <p className="text-sm text-slate-300 mb-1">20 Feb 2022</p>
        
             <p>Keep Your Business </p>
             </div>
          </div>
          <div className="flex items-between mr-2 mt-2">
              <Image
                src="/f2.png"
                alt="Recent Post 2"
                width={40}
                height={25}/>
                <div className="mt-2 ml-3">
             <p className="text-sm text-slate-300 mb-1">20 Feb 2022</p>
        
             <p>Keep Your Business </p>
             </div>
          </div>
          <div className="flex items-between mr-2 mt-4">
              <Image
                src="/f3.png"
                alt="Recent Post 3"
                width={40}
                height={25}/>
                <div className="mt-2 ml-3">
             <p className="text-sm text-slate-300 mb-1">20 Feb 2022</p>
        
             <p>Keep Your Business </p>
             </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

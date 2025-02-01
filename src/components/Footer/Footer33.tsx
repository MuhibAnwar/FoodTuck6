import React from "react";
import Footer from "./Footer";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";


export default function Footer3() {
    return (
        <div>
            <Footer />
            <footer>
            <div className="bg-[#4F4F4F] py-8 flex ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] leading-6 mb-4 md:mb-0 text-white">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mb-4 md:mb-0">
          <div className="bg-white rounded-square w-10 h-10 space-x-4 flex items-center justify-center">
          <FaFacebookF />
            </div>
          <div className="bg-white rounded-square w-10 h-10 space-x-4 flex items-center justify-center">
          <FaTwitter />
          </div>
          <div className="bg-white rounded-square w-10 h-10 space-x-4 flex items-center justify-center">
          <FaInstagram />
          </div>
          <div className="bg-white rounded-square w-10 h-10  space-x-4 flex items-center justify-center">
          <FaYoutube  className="text-orange-500"/>
          </div>
          <div className="bg-white rounded-square w-10 h-10 space-x-4  flex items-center justify-center">
          <FaPinterest />
          </div> 
</div>
        </div>
       
      </div>
     

    </footer>
        </div>
    );
}
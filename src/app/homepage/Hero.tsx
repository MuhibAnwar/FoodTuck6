import React from "react";
import Image from "next/image";
import Comment from "./Comment";
import Choose from "@/components/Choose";
import Chooseus from "@/components/Chooseus";
import About from "./About";
import Cards from "./Cards";
import MeetOurChefs from "./Chefs";
import Menu from "./Menu";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative bg-black px-3 md:px-[135px] flex flex-col justify-center md:flex-row md:items-center py-[50px] bg-cover bg-center"
  style={{ backgroundImage: 'url("/imageb1.png")' }}
>
  {/* Semi-Transparent Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-0  ">

  </div>
<div className="mb-20">
  {/* Text Section */}
  <div className="relative z-10 text-white w-full md:w-[50%] text-center  md:text-left">
    <h1 id="quote" className="md:text-[32px] text-[24px] text-[#FF9F0D]">
      Its Quick & Amusing!
    </h1>
    <h1 className="text-10xl md:text-[50px] font-bold whitespace-nowrap mb-4  md:whitespace-normal">
      <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
    </h1>
    <p className="text-[10px] md:text-[16px] font-normal mb-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
    </p>
    <div className="flex flex-col md:flex-row items-center md:items-start">
    <a href="/shoplist"> <button  className="bg-yellow-500 text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px]  hover:bg-black hover:text-[#FF9F0D]">
        See More
      </button>
    </a>

      </div>
      </div>
    </div>
  

  {/* Image Section */}
  
  <div className="relative z-10 mt-[50px] md:mt-0 md:w-[50%] flex justify-center flex-wrap ">
    <div className="relative mb-[40px]" >
      <Image
        src="/dish.png"
        alt="Hero Dish"
        width={500}
        height={500}
        className="object-contain mb-[40px]"
      />
   </div>
   </div>
  
</section>

      {/* Additional Sections */}
      <About />
      <Choose />
      <Chooseus />

      <Menu />
      <MeetOurChefs />
      <Comment />

      <Cards />

    </>
  );
}

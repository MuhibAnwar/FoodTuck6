import React from "react";
import Image from "next/image";

export default function Cards() {
  return (
    <div className="bg-black text-white py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p  id='qoute'className="text-lg text-yellow-500 italic">Blog list</p>
        <h2 className="text-4xl text-white font-bold">
   <span className="text-[#FF9F0D]">La</span>test News & Blog
        </h2>
      </div>

      {/* Chef Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {/* Chef 1 */}
      <a href="/shoplist"> <div className="bg-black text-white border  border-white  shadow-lg overflow-hidden w-64">          <Image
            src="/w1.png"
            alt="Chef D.Estwood"
            width={256}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4 mt-2">
          <p className="text-xs text-[#FF9F0D] mb-4 ">10 February 2022 </p>

            <h3 className="text-lg font-bold">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h3>
            <p className="text-sm text-gray-500">Learn More</p>
          </div>
      
        </div>
        </a>

        {/* Chef 2 */}
        <a href="/shoplist"> 
        <div className="bg-black text-white border border-white shadow-lg overflow-hidden w-64">
          <Image
            src="/s6.png"
            alt="Chef D.Scoriesh"
            width={256}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4 mt-2 ">
          <p className="text-xs text-[#FF9F0D] mb-4 ">10 February 2022 </p>

            <h3 className="text-lg font-bold">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</h3>
            <p className="text-sm text-gray-500">Learn More</p>
          </div>
        </div>
       </a>

        {/* Chef 3 */}
        <a href="/shoplist"> 
        <div className="bg-black  text-white border border-white shadow-lg overflow-hidden w-64">
          <Image
            src="/w.png"
            alt="Chef M. William"
            width={256}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4 mt-2">
            <p className="text-xs text-[#FF9F0D] mb-4 ">10 February 2022 </p>
            <h3 className="text-lg font-bold">Curabitur rutrum velit ac congue malesuada</h3>
            <p className="text-sm text-gray-500 mt-6">Learn More</p>
          </div>

        </div>
        </a>
        
        
        
        </div>
      

    
    </div>
  );
}

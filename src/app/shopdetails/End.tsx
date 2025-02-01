import React from "react";
import Image from "next/image";

const validateImgSrc = (src: string) => (src.startsWith("/") ? src : `/${src}`);

export default function End() {
    return (
        <div className="bg-white min-h-screen mx-auto mt-20">
            <div className="inline-block">
                 <div className="text-sm text-white bg-[#FF9F0D] inline-block px-10 py-3 ml-20 ">
          Description

        </div>
        <br/>
        <br/>
        <p className="ml-20 mt-5 text-md text-gray-500 ">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus <br/> bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet<br/> interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
<p  className="ml-20 mt-5 text-md text-gray-500 mt-10 ">Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor<br/> quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum.<br/> Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
<p   className="ml-20 mt-10 text-lg text-gray-800 mt-10 text-2xl ">Key Benefits</p>
<ol>
    <li  className="ml-20 mt-5 text-md text-gray-600 mt-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li  className="ml-20 mt-5 text-md text-gray-600 mt-10 ">
    Maecenas ullamcorper est et massa mattis condimentum.

    </li>
    <li  className="ml-20 mt-5 text-md text-gray-600 mt-10 ">
    Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.

    </li>
    <li  className="ml-20 mt-5 text-md text-gray-600 mt-10 ">Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
    <li  className="ml-20 mt-5 text-md text-gray-600 mt-10 ">
    Mauris eget diam magna, in blandit turpis.
    </li>
</ol>
<h2  className="ml-20 mt-10 text-lg text-black text-5xl font-bold  mt-10 md:text-4xl ">Similar Products</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:mt-10 md:ml-2 md:mr-2 ">
  {["/s1.png", "s2.png", "s3.png", "s1.png"].map((img, index) => (
    <div
      key={index}
      className="relative group md:mb-10  shadow-lg overflow-hidden"
    >
      <Image
           src={validateImgSrc(img)}
        alt={`Similar Product ${index + 1}`}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        width={192}
        height={192}
      />
     
    </div>
  ))}
</div> 
            </div>
            </div>

            
        
    );
}
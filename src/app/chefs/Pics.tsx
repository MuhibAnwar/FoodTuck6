import React from "react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", title: "Chef", imgSrc: "ch1.png" },
  { name: "Jorina Begum", title: "Chef", imgSrc: "ch2.png" },
  { name: "M. Mohammad", title: "Chef", imgSrc: "ch3.png" },
  { name: "Munna Kathy", title: "Chef", imgSrc: "ch4.png" },
  { name: "Tahmina Rumi", title: "Chef", imgSrc: "ch5.png" },
  { name: "Bisnu Devgon", title: "Chef", imgSrc: "ch6.png" },
  { name: "Motin Molladsf", title: "Chef", imgSrc: "ch7.png" },
  { name: "William Rumi", title: "Chef", imgSrc: "ch8.png" },
  { name: "Kets William Roy", title: "Chef", imgSrc: "ch9.png" },
  { name: "Mahmud Kholil", title: "Chef", imgSrc: "ch10.png" },
  { name: "Ataur Rahman", title: "Chef", imgSrc: "ch11.png" },
  { name: "Monalisa Holly", title: "Chef", imgSrc: "ch12.png" },
];

// Ensure imgSrc is correctly formatted with a leading slash
const validateImgSrc = (src: string) => (src.startsWith("/") ? src : `/${src}`);

const ChefGallery = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto grid grid-cols-1 ml-10 mr-10 mt-10  mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="chef-gallery">
  {chefs.map((chef, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={validateImgSrc(chef.imgSrc)}
        alt={chef.name}
        className="object-cover"
        width={250} // Adjust for better alignment
        height={250} // Adjust for better alignment
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold">{chef.name}</h2>
        <p className="text-gray-500">{chef.title}</p>
      </div>
    </div>
  ))}
</div>

  </div>
  )
};

export default ChefGallery;

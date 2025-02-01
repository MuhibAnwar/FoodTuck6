import React from "react";
import Image from "next/image";
import { FaHamburger, FaWineGlassAlt } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
const validateImgSrc = (src: string) => (src.startsWith("/") ? src : `/${src}`);

const Choose: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
  <aside className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  {/* Left Image Section */}
  <div className="grid grid-cols-3 gap-4 lg:w-full px-6">
    {/* Large Top-Left Image */}
    <div className="col-span-2 row-span-2">
      <Image
        src={validateImgSrc("w.png")}
        alt="Large Food Item"
        className="shadow-lg object-cover  ml-auto"
        width={300}
        height={300}
      />
    </div>

    {/* Smaller Images */}
    {["w1.png", "w2.png", "w5.png", "w4.png", "w6.png"].map((img, index) => (
      <div key={index} className="col-span-1">
        <Image
          src={validateImgSrc(img)}
          alt={`Food ${index + 1}`}
          className="shadow-lg object-cover mr-auto  "
          width={150}
          height={150}
        />
      </div>
    ))}
  </div>

  {/* Right Text Section */}
  <div className="flex flex-col justify-center lg:items-start">
    <p  id="quote" className="text-yellow-500 font-semibold text-lg">
      Why Choose Us
    </p>
    <h2 className="text-4xl font-bold mt-2 leading-tight text-center lg:text-left">
      <span className="text-yellow-500">Ex</span>tra Ordinary Taste <br />
      And Experienced
    </h2>
    <p className="mt-4 text-gray-300 text-center lg:text-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br/> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit<br/> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis<br/> sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>

    {/* Icons Grid */}
    <div className="grid grid-cols-3 gap-4 mt-6 ">
      {[
        { icon: <FaHamburger />
        },
        { icon: <BiSolidDish className="text-yellow-500" />
        },
        { icon: <FaWineGlassAlt />
        },].map(
        (item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-800 p-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors duration-300"
          >
            <p className="mt-2 text-yellow-500 font-semibold">
              {item.icon}
            </p>
          </div>
        )
      )}
    </div>

    {/* Experience Section */}
    <div className="flex items-center mt-8 justify-center lg:justify-start rounded bg-white p-6">
      <p className="text-2xl font-bold text-yellow-500 md:text-6xl">30+</p>
      <p className="ml-4 text-black font-bold text-center lg:text-left">
        Years of <br /> Experience
      </p>
    </div>
  </div>
</aside>


    </section>
  );
};

export default Choose;

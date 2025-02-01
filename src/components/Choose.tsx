import React from "react";
import Image from "next/image";

const validateImgSrc = (src: string) =>
  src.startsWith("/") || src.startsWith("http") ? src : `/${src}`;

const Choose: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <p id="choose" className="text-yellow-500 font-semibold text-center text-lg">
            Food Category
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-center">
            <span className="text-yellow-500">Choose</span> Food Item
          </h2>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {["choose.png", "choose2.png", "choose4.png", "choose3.png"].map(
            (img, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <Image
                  src={validateImgSrc(img)}
                  alt={`Food item ${index + 1}`}
                  className="object-cover w-56 h-48 sm:h-60"
                  layout="responsive"
                  width={300}
                  height={300}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Choose;

'use client';
import Image from 'next/image';
import sanityClient from '@sanity/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';


import { useParams } from "next/navigation";



const sanity = sanityClient({
  projectId: 'pxraojki',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}


const ProductDetails = () => {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "food" && _id == $id][0]{
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": image.asset->url,
          tags
        }`;
        const data = await sanity.fetch(query, { id: params.id });
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={400}
            height={400}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-700 tracking-widest">
              FOOD TRUCK
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p className="leading-relaxed font-bold text-black">{product.description}</p>

            {/* Tags Section */}
            {product.tags.length > 0 && (
              <div className="mt-6">
                <h3 className="text-black text-sm font-medium mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-slate-700 bg-gray-200 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-6 pb-5 border-b-2 border-gray-100 mb-5">
              <span className="title-font text-2xl text-yellow-600 font-bold">
                ${product.price}
              </span>
              <Link href="/shoplist">
                <button className="flex items-center text-black bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
